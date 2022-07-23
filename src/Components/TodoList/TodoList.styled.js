import styled from "styled-components";

const bgColors = ["#FAFAFA", "#181824"];
const placeholderColors = ["#66666D", "#6B6D82"];
const textColors = ["#565563", "#BEC0D9"];
const blockColors = ["white", "#25273C"];
const dividerColors = ["rgb(200, 200, 200)", "rgb(70, 70, 70)"];
const textHoverColor = ["black", "white"];

export const Page = styled.div`
    transition: all 0.3s;
    background-color: ${({ theme }) => bgColors[theme] || bgColors[0]};
    display:  flex;
    justify-content: center;
    width:100vw;
    max-width: 100vw;
    height:100%;
    min-height:100vh;
    position: relative;
    font-family: 'Josefin Sans', sans-serif;
`

export const Container = styled.div`
    margin-top: 65px;
    width:560px;
    height:100%;
    display: flex;
    padding: 10px;
    z-index: 5;
    flex-direction: column;

`

export const HeaderImage = styled.img`
    height: 300px;
    position: absolute;
    top:0;
    left:50%;
    transform: translate(-50%,0);
    object-fit: contain;
`

export const TopContainer = styled.div`
    width:100%;
    height:fit-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 35px;
`

export const Title = styled.h1`
    color:white;
    font-size: 40px;
    letter-spacing: 15px;

    @media screen and (max-width:600px){
        font-size: 30px;
    }
`

export const ThemeSwitchImage = styled.img`
    cursor: pointer;
    width:27px;
    height:27px;

    @media screen and (max-width:600px){
        width:24px;
        height:24px;
    }    
`
export const InputFieldContainer = styled.div`
    width:100%;
    height:65px;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    margin-bottom: 30px;

    @media screen and (max-width:600px){
        margin-bottom: 20px;
        height:55px;
    }
`
export const InputField = styled.input`
    background-color: ${({ theme }) => blockColors[theme] || blockColors[0]};
    transition:all 0.3s;
    width:100%;
    height:65px;
    min-height:65px;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 18px;
    font-weight: 500;
    padding: 15px;
    padding-left: 70px;
    padding-top: 17px;
    color:${({ theme }) => textColors[theme] || textColors[0]};
    &::placeholder{
        color:${({ theme }) => placeholderColors[theme] || placeholderColors[0]};
    }

    @media screen and (max-width:600px){
        padding-top: 10px;
        font-size:14px;
    }

`
export const PlaceholderDiv = styled.div`
    width:100%;
`

export const CircleDecoration = styled.div`
    position: absolute;
    left:25px;
    top:50%;
    transform: translate(0, -50%);
    width:25px;
    height: 25px;
    border-radius: 50%;
    border:1px solid gray;
    opacity: 0.2;
    transition: all 0.3s;
    overflow: hidden;
    pointer-events: none;
    &:after{
        width:25px;
        height:25px;
        position:absolute;
        content: "";
        border-radius: 50%;
    }

    ${({ checkable, theme }) => checkable && `
        pointer-events:all;
        position:relative;
        left:0px;
        transform:translate(0,0);
        top:0px;   
        margin-left:25px;
        cursor:pointer;
        border-radius:50%;
        &:hover{
            opacity: 0.8;
        }

        &:hover{
        background: rgb(2,0,36);
        background: linear-gradient(145deg, rgba(2,0,36,1) 0%, rgba(0,216,255,1) 1%, rgba(255,0,251,0.7861345221682423) 100%); 
        border:1 px solid transparent;

        &:after{
            left:1px;
            top:1px;
            width:21px;
            height: 21px;
            border-radius: 50%;
            background-color: ${blockColors[theme] || "white"}
        }
    }
    
    `};

    ${({ checked, checkImage }) => checked && `
        background: rgb(2,0,36);
        background: linear-gradient(145deg, rgba(2,0,36,1) 0%, rgba(0,216,255,1) 1%, rgba(255,0,251,0.7861345221682423) 100%); 
        border-radius:50%;
        opacity:1;
        position:relative;        transition:all 0.3s;
        &:after{
            transition:all 0.3s;
            left:-1px;
            top:-1px;
            width:25px;
            height:25px;
            position:absolute;
            content: "";
            background-image: url(${checkImage});
            background-repeat: no-repeat;
            background-position:50%;
        }

        &:hover{
            &:after{
                background-color:transparent;
            }
            filter:brightness(0.7);
        }
    `};
`

export const TodosContainer = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    height:fit-content;
    border-radius: 5px;
    overflow:hidden;
    -webkit-box-shadow: 0px 0px 20px 6px rgba(0,0,0,0.48); 
    box-shadow: 0px 0px 20px 6px rgba(0,0,0,0.10);
    background-color: transparent;
`


export const TodoCloseIcon = styled.img`
    width:27px;
    height:27px;
    padding:5px;
    cursor:pointer;
    position:absolute;
    right:20px;
    display:none;
    transition:all 0.3s;
    &:hover{
        transform:scale(1.2);
    }
`

export const TodoElement = styled(InputFieldContainer)`
    border-radius: 0;
    background-color: ${({ theme }) => blockColors[theme] || blockColors[0]};
    margin-bottom: 0px;
    display:flex;
    align-items:center;
    height:65px;
    cursor:pointer;
    min-height:65px;
    transition:all 0.3s;
    &:hover{
        filter: brightness(0.96);
        ${TodoCloseIcon}{
            display:block;
        }
    }
`

export const TodoTitle = styled.p`
    transition:all 0.3s;
    font-size: 18px;
    padding-left: 20px;
    padding-right:40px;
    color: ${({ theme }) => textColors[theme] || textColors[0]};
    user-select: none;

    ${({ checked }) =>  checked &&`
        text-decoration:line-through;
        opacity:0.3;
    `}

    @media screen and (max-width:600px){
        font-size:14px;
    }
`


export const Divider = styled.hr`
    width: 100%;
    height:1px;
    background-color: ${({ theme }) => dividerColors[theme] || dividerColors[0]};
`

export const MenuContainer = styled.nav`
    transition: all 0.3s;
    display:flex;
    justify-content: center;
    align-items: center;
    height:55px;
    width:100%;
    background-color: ${({ theme }) => blockColors[theme] || blockColors[0]};
    padding:25px;

    @media screen and (max-width:600px) {
        justify-content: space-between;
    }
`

export const TodoCounter = styled.p`
    color: ${({ theme }) => placeholderColors[theme] || placeholderColors[0]};
    font-size:14px;
    transition: all 0.3s;
`

export const ButtonList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap:15px;
    flex:1;

    @media screen and (max-width:600px) {
        margin-top: 20px;
        height:55px;
        width:100%;
        border-radius: 5px;
        padding:10px;
        background-color: ${({ theme }) => blockColors[theme] || blockColors[0]};
        -webkit-box-shadow: 0px 0px 20px 6px rgba(0,0,0,0.48); 
        box-shadow: 0px 0px 20px 6px rgba(0,0,0,0.10);
    }
`

export const MenuButton = styled(TodoCounter)`
    cursor:pointer;
    font-size: ${({ fontSize }) => fontSize || "16px"};

    &:hover{
        color: ${({ theme }) => textHoverColor[theme] || textHoverColor[0]};
    }

    ${({ selected }) => selected && `
        background: rgb(2,0,36);
        background: linear-gradient(145deg, rgba(2,0,36,1) 0%, rgba(0,196,255,1) 0%, rgba(10,0,255,0.7861345221682423) 100%); 
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; 
    `}
`