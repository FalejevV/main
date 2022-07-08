import styled from "styled-components";

export const Page = styled.div`
    background-color: transparent;
    position: relative;
    width:100vw;
    height:100vh;
    font-family: 'Rubik', sans-serif;
    overflow-x:hidden;
`

export const Container = styled.div`
    max-width: 1440px;
    width:100%;
    position: relative;
    margin:0 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const TopBackground = styled.img`
    position: absolute;
    top:0px;
    object-fit: cover;
    width:100%;
    left:0;
    height:280px;

    @media (max-width: 700px){
        height:300px;
    }
`

export const Title = styled.h1`
    color:white;
    font-size: 30px;
    font-weight: 500;
    z-index: 2;
    padding-top: 35px;
    margin-bottom: 35px;
`

export const InputContainer = styled.div`
    max-width: 550px;
    width:100%;
    height:60px;
    z-index: 2;
    overflow: hidden;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 45px;

    @media (max-width: 700px){
        width:95%;
    }
`

export const InputField = styled.input`
    width: 88%;
    height:inherit;
    background-color: #FFFFFF;
    font-weight: 400;
    font-size: 18px;
    padding:0px 25px;
    &:placeholder{
        color:#A3A3A3;
    }
`

export const InputButton = styled.button`
    width:12%;
    height:inherit;
    background-color: #000000;
    cursor: pointer;
`

export const DataDivider = styled.hr`
    z-index: 5;
    height:90px;
    min-width:1px;
    width:1px;
    background-color: #A3A3A3;
    opacity: 0.4;
`

export const DataBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    max-width: 1110px;
    width:100%;
    min-height:160px;
    height:fit-content;
    padding:35px;
    z-index: 4;
    background-color:white;
    gap:30px;
    border-radius: 20px;
    position:absolute;
    top:205px;

    @media (max-width: 1150px){
        width:98%;
    }

    @media (max-width: 950px) and (min-width: 700px){
        gap:10px;
    }
    @media (max-width: 700px){
        flex-direction:column;
        width:95%;
        padding:25px;
        ${DataDivider}{
            display:none;
        }
    }
`

export const DataItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width:100%;
    height:100%;
    gap:20px;

    @media (max-width: 700px){
        text-align: center;
        gap:5px;
    }
`

export const DataTitle = styled.p`
    width:100%;
    color:#949494;    
    font-weight: 700;
    font-size: 13px;
    letter-spacing: 2px;
    @media (max-width: 700px){
        font-size: 12px;
    }
`

export const DataValue = styled.p`
    width:100%; 
    color:black;
    font-weight: 500;
    font-size: 25px;
    padding-right: 25px;
    @media (max-width: 700px){
        padding-right: 0px;
        font-size:20px;
    }

`
