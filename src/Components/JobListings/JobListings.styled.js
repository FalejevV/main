import styled from "styled-components";

export const Page = styled.div`
    background-color:  #EFFAFA;
    display: flex; 
    align-items: flex-start;
    justify-content: center;
    width:100%;
    max-width: 100vw;
    height:100vh;
`
export const Container = styled.div`
    width: 100%;
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`

export const HeaderImage = styled.img`
    width:100%;
    height:156px;
    background-color: #5CA5A5;
    object-fit: cover;
`

export const List = styled.div`
    display: flex;
    flex-direction: column;
    gap:24px;
    align-items: center;
    width:100%;
    max-width: 1130px;
    padding-bottom: 50px;
    padding:0px 10px;
    margin-top: 40px;
    transition: all 0.3s;
    ${({ shiftDown }) => shiftDown && `
        margin-top:76px;
    `}
`