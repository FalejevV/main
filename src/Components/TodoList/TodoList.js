import React from "react";
import { Container, Page, Title, HeaderImage, TopContainer, ThemeSwitchImage, InputField, InputFieldContainer, CircleDecoration, TodosContainer, TodoElement, TodoTitle, Divider, TodoCloseIcon, MenuContainer, TodoCounter, ButtonList, MenuButton, PlaceholderDiv } from "./TodoList.styled";
import bgDesktopLight from "./img/bg-desktop-light.jpg";
import bgDesktopDark from "./img/bg-desktop-dark.jpg";
import bgMobileLight from "./img/bg-mobile-light.jpg";
import bgMobileDark from "./img/bg-mobile-dark.jpg";

import iconMoon from "./img/icon-moon.svg";
import iconSun from "./img/icon-sun.svg";

import checkIcon from "./img/icon-check.svg";
import closeIcon from "./img/icon-cross.svg";

import { nanoid } from "nanoid";

function TodoList(){
    const [width, setWidth] = React.useState(window.innerWidth);
    const [inputData, setInputData] = React.useState("");
    const [listFilter, setListFilter] = React.useState("All");
    const [theme, setTheme] = React.useState(0);
    const [todoList, setTodoList] = React.useState([
        {
            title: "Complete online JavaScript course",
            done: true,
        },
        {
            title: "Jog around the park 3x",
            done: false,
        },
        {
            title: "10 minutes meditation",
            done: false,
        },
        {
            title: "Read for 1 hour",
            done: false,
        },
        {
            title: "Pick up groceries",
            done: false,   
        },
        {
            title: "Complete Todo App on Frontend Mentor",
            done: false,
        }
    ]);
    const todosLeft = todoList.reduce((acc, item) => {
        return item.done === false ? acc+= 1 : acc+=0;
    }, 0);

    function removeTodo(delIndex){
        setTodoList(prevTodoList => prevTodoList.filter((item,index) => index !== delIndex));
    }

    function triggerTodo(todoIndex){
        setTodoList(prevTodoList => prevTodoList.map((item,index) => {
            if (index !== todoIndex){
                return item;
            }else {
                return {
                    ...item,
                    done : !item.done
                }
            }
        }));
    }

    function updateInputData(e){
        setInputData(e.target.value);
    }
    
    function clearCompleted(){
        setTodoList(prevTodoList => prevTodoList.filter(item => !item.done));
    }

    function getTodos(){
        return todoList.map((item,index) => {
            if (listFilter === "All"){
                return <PlaceholderDiv key={nanoid()}>
                    <TodoElement key={nanoid()} theme={theme}>
                            <CircleDecoration onClick={() => triggerTodo(index)} theme={theme} checked={item.done} checkable checkImage={checkIcon}></CircleDecoration>
                            <TodoTitle checked={item.done} theme={theme}>{item.title}</TodoTitle>
                            <TodoCloseIcon onClick={() => removeTodo(index)} src={closeIcon} />
                    </TodoElement>
                    <Divider key={nanoid()} theme={theme} />
                </PlaceholderDiv>
            } else if (listFilter === "Active"){
                if (!item.done){
                    return <PlaceholderDiv key={nanoid()}>
                    <TodoElement key={nanoid()} theme={theme}>
                            <CircleDecoration onClick={() => triggerTodo(index)} theme={theme} checked={item.done} checkable checkImage={checkIcon}></CircleDecoration>
                            <TodoTitle checked={item.done} theme={theme}>{item.title}</TodoTitle>
                            <TodoCloseIcon onClick={() => removeTodo(index)} src={closeIcon} />
                    </TodoElement>
                    <Divider key={nanoid()} theme={theme} />
                </PlaceholderDiv>
                }
            } else if (listFilter === "Completed"){
                if(item.done){
                    return <PlaceholderDiv key={nanoid()}>
                    <TodoElement key={nanoid()} theme={theme}>
                            <CircleDecoration onClick={() => triggerTodo(index)} theme={theme} checked={item.done} checkable checkImage={checkIcon}></CircleDecoration>
                            <TodoTitle checked={item.done} theme={theme}>{item.title}</TodoTitle>
                            <TodoCloseIcon onClick={() => removeTodo(index)} src={closeIcon} />
                    </TodoElement>
                    <Divider key={nanoid()} theme={theme} />
                </PlaceholderDiv>
                }
            }
            return "";
        })
    }
    
    function newTodo(){
        if(inputData !== ""){
            setTodoList(prevTodoList => {
                let newList = [...prevTodoList];
                newList.push({
                    title: inputData,
                    done: false,
                })
                return newList;
            });
            setInputData("");
        }
    }
    
    function enterDetection(event){
        if(event.code === "Enter"){
            newTodo();
        }
    }

    React.useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));

        return () => {
            window.removeEventListener("resize", () => setWidth(window.innerWidth));
        }
    }, [])
    return(
        <Page theme={theme}>
            {theme === 0 ? 
                <picture>
                    <source srcSet={bgMobileLight} media="(max-width : 600px)" />
                    <HeaderImage src={bgDesktopLight}  alt="background"/>
                </picture>
            :
                <picture>
                    <source srcSet={bgMobileDark} media="(max-width : 600px)" />
                    <HeaderImage src={bgDesktopDark}  alt="background"/>
                </picture>
            }
            <Container>
                <TopContainer>
                    <Title>TODO</Title>
                    {theme === 0 ?
                        <ThemeSwitchImage onClick={() => setTheme(1)} src={iconMoon}/>
                        :
                        <ThemeSwitchImage onClick={() => setTheme(0)} src={iconSun} />
                    }
                </TopContainer>
                <InputFieldContainer>
                    <InputField onKeyUp={enterDetection} onChange={(e) => updateInputData(e)} value={inputData} theme={theme} placeholder="Create a new todo..." />
                    <CircleDecoration></CircleDecoration>
                </InputFieldContainer>
                <TodosContainer>
                    {getTodos()}
                    {todoList.length > 0 &&
                    <MenuContainer theme={theme}>
                        <TodoCounter>{todosLeft} items left</TodoCounter>
                        {width > 600 && 
                        <ButtonList>
                            <MenuButton theme={theme} selected={listFilter === "All"} onClick={() => setListFilter("All")}>All</MenuButton>
                            <MenuButton theme={theme} selected={listFilter === "Active"} onClick={() => setListFilter("Active")}>Active</MenuButton>
                            <MenuButton theme={theme} selected={listFilter === "Completed"} onClick={() => setListFilter("Completed")}>Completed</MenuButton>
                        </ButtonList>
                        }
                        <MenuButton onClick={clearCompleted} theme={theme} fontSize="15px">Clear completed</MenuButton>
                    </MenuContainer>
                    }
                    
                </TodosContainer>
                {width <= 600 && 
                        <ButtonList theme={theme}>
                            <MenuButton theme={theme} selected={listFilter === "All"} onClick={() => setListFilter("All")}>All</MenuButton>
                            <MenuButton theme={theme} selected={listFilter === "Active"} onClick={() => setListFilter("Active")}>Active</MenuButton>
                            <MenuButton theme={theme} selected={listFilter === "Completed"} onClick={() => setListFilter("Completed")}>Completed</MenuButton>
                        </ButtonList>
                        }
            </Container>
        </Page>
    )
}

export default TodoList;