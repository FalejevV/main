import styled from "styled-components";

export const Page = styled.div`
    width:100%;
    max-width: 100vw;
    overflow-x: hidden;
    min-height:100vh;
    background-color: #0D1323;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
`

export const Container = styled.div`
    max-width: 1115px;
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap:30px;

    @media screen and (max-width:900px) {
        flex-direction:column;
        max-width:none;
        gap:15px;
    }
`

export const BlockGrid = styled.div`
    display: grid;
    gap:0px;
    align-items: center;
    justify-content: center;
    justify-items: center;
    align-items: center;
    gap:30px;
    grid-template-columns: 1fr 1fr;
    grid-template-columns: repeat(3,minmax(150px, 240px));
    width:100%;
    max-width: 745px;
    height:100%;
    max-height: 470px;

    @media screen and (max-width:900px){
        grid-template-columns: 1fr;
        max-height: none;
        max-width: 500px;
        gap:15px;
    }
`

