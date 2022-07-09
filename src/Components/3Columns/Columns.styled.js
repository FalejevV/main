import styled from "styled-components";

export const Page = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100vw;
    min-height:100vh;
    height:100%;
    background-color: #F2F2F2;
    padding:20px 20px;
    font-family: 'Lexend Deca', sans-serif;
`

export const ColumnsContainer = styled.div`
    max-width: 920px;
    max-height: 500px;
    height:500px;
    width:100%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    overflow:hidden;

    @media(max-width:835px){
        flex-direction: column;
        max-height: unset;
    }
`

export const Column = styled.div`
    width:100%;
    min-height:500px;
    background-color: ${({ mainColor }) => mainColor || "white"};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding:50px;

    @media(max-width:835px){
        min-height: unset;
        height:fit-content;
        padding:40px;
    }
`

export const IconImage = styled.img`
    margin-bottom: 35px;
`

export const Title = styled.h1`
    font-family: 'Big Shoulders Display', cursive;
    color:white;
    font-size:40px;
    margin-bottom: 25px;

    @media(max-width:835px){
        font-size:35px;
    }
`

export const Text = styled.p`
    color:white;
    font-size:15px;
    line-height: 25px;
    flex:auto;
    opacity: 0.6;
    padding-bottom: 25px;

    @media(max-width:835px){
        font-size:13px;
        line-height: 23px;
    }
`

export const Button = styled.button`
    font-family: 'Lexend Deca', sans-serif;
    background-color: white;
    color: ${({ mainColor }) => mainColor || "white"};
    font-size: 15px;
    padding:12px 31px;
    border-radius: 30px;
    border:2px solid white;
    cursor:pointer;
    transition: all 0.3s;
    &:hover{
        background-color: transparent;
        color:white;
    }

    @media(max-width:835px){
        padding:10px 28px;
        font-size: 13px;
    }
`