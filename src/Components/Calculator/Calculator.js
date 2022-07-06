import React from "react";
import { Page, TopBar, Text, ThemeControllerContainer, ThemeNumbers, ThemeSlider, Display, Container, KeyboardContainer, Button, OperationIndicator } from "./Calculator.styled";

function Calculator(){
    const [currentTheme, setCurrentTheme] = React.useState(0);
    const [prevValue, setPrevValue] = React.useState("");
    const [value, setValue] = React.useState("");
    const [stringValue, setStringValue] = React.useState("");
    const [selectedOperation, setSelectedOperation] = React.useState("");
    const [dotUsed,setDotUsed] = React.useState(false);
    const [tempResult, setTempResult] = React.useState("");

    React.useEffect(() => {
        let resultValue = "";
        let dotFound = false;
        value.toString().split('').forEach((number) => {
            if (number === "."){
                dotFound = true;
            }
        })
        value.toString().split('').forEach((number) => {
            resultValue += number
        });
        setDotUsed(dotFound);
        setStringValue(resultValue);

    }, [value, dotUsed]);

    function switchTheme(){
        setCurrentTheme(prevTheme => {
            if(prevTheme >= 2){
                return 0;
            }else{
                return prevTheme + 1;
            }
        })
    }

    function inputValue(value){
        setValue(prevValue => {
            if(prevValue.toString().length === 0 && prevValue === 0){
                return value;
            }else{
                if(value === "." && dotUsed){
                    return prevValue + "";
                }else if( value === "." && !dotUsed){
                    setDotUsed(prevValue.toString().length);
                    return prevValue + "" + value;
                }
                return prevValue + "" + value;
            }
        });
    }

    function delValue(){
        setValue(prevValue => {
            if (prevValue.toString().slice(0,value.toString().length -2 ) === ","){
                return prevValue.toString().slice(0,value.toString().length -2);
            }else{
                if(prevValue.toString().length === 1){
                    return "";
                }else{
                    return prevValue.toString().slice(0,value.toString().length -1);
                }
            }
        })
    }

    function setOperation(operation){
        if(prevValue === "" && value !== ""){
            setSelectedOperation(operation);
            setPrevValue(value);
            setTempResult(value);
            setValue("");
        }else if(prevValue !== "" && value !== ""){
            setPrevValue(eval(`${prevValue} ${selectedOperation} ${value}`));
            setTempResult((eval(`${prevValue} ${selectedOperation} ${value}`)));
            setValue("");
            setSelectedOperation(operation);
        }else if (prevValue !== "" && value === ""){
            setSelectedOperation(operation);
        }
    }

    function getResult(){
        if(prevValue !== "" && value !== "" && selectedOperation !== ""){
            setValue(eval(`${prevValue} ${selectedOperation} ${value}`));
            setPrevValue("");
            setTempResult("");
            setSelectedOperation("");
        }
    }

    function reset(){
        setPrevValue("");
        setTempResult("");
        setSelectedOperation("");
        setValue("");
    }

    return(
        <Page themeId={currentTheme}>
            <Container>
                <TopBar>
                    <Text flex="auto" themeId={currentTheme} fontSize="30px">calc</Text>
                    <Text themeId={currentTheme} paddingBottom="7px" fontSize="12px">THEME</Text>
                    <ThemeControllerContainer onClick={switchTheme}>
                        <ThemeNumbers>
                            <Text themeId={currentTheme} fontSize="12px">1</Text>
                            <Text themeId={currentTheme} fontSize="12px">2</Text>
                            <Text themeId={currentTheme} fontSize="12px">3</Text>
                        </ThemeNumbers>
                        <ThemeSlider themeId={currentTheme}>
                            
                        </ThemeSlider>
                    </ThemeControllerContainer>
                </TopBar>
                <Display themeId={currentTheme}>
                    {Number(stringValue).toLocaleString('en-IN',{maximumFractionDigits: 20})}
                    {selectedOperation !== "" && <OperationIndicator themeId={currentTheme}>{tempResult} {selectedOperation} </OperationIndicator>}
                </Display>
                <KeyboardContainer themeId={currentTheme}>
                    <Button themeId={currentTheme} onClick={() => inputValue(7)}>7</Button>
                    <Button themeId={currentTheme} onClick={() => inputValue(8)}>8</Button>
                    <Button themeId={currentTheme} onClick={() => inputValue(9)}>9</Button>
                    <Button themeId={currentTheme} accentColor onClick={delValue}>DEL</Button>
                    <Button themeId={currentTheme}  onClick={() => inputValue(4)}>4</Button>
                    <Button themeId={currentTheme}  onClick={() => inputValue(5)}>5</Button>
                    <Button themeId={currentTheme}  onClick={() => inputValue(6)}>6</Button>
                    <Button themeId={currentTheme} onClick={() => setOperation("+")}>+</Button>
                    <Button themeId={currentTheme}  onClick={() => inputValue(1)}>1</Button>
                    <Button themeId={currentTheme}  onClick={() => inputValue(2)}>2</Button>
                    <Button themeId={currentTheme}  onClick={() => inputValue(3)}>3</Button>
                    <Button themeId={currentTheme} onClick={() => setOperation("-")}>-</Button>
                    <Button themeId={currentTheme} onClick={() => inputValue(".")}>.</Button>
                    <Button themeId={currentTheme}  onClick={() => inputValue(0)}>0</Button>
                    <Button themeId={currentTheme} onClick={() => setOperation("/")}>/</Button>
                    <Button themeId={currentTheme} onClick={() => setOperation("*")}>x</Button>
                    <Button doubleSize accentColor themeId={currentTheme} onClick={reset}>RESET</Button>
                    <Button doubleSize mainButton themeId={currentTheme} onClick={getResult}>=</Button>
                </KeyboardContainer>
            </Container>
        </Page>
    )
}

export default Calculator;