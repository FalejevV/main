import styled from "styled-components";

export const Container = styled.div`
    min-width: 100vw;
    min-height: 100vh;

    background-color: hsl(30, 38%, 92%);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const WTFText = styled.h1`
    color:black;
    cursor:pointer;
`

export const WTFImage = styled.img`
    width:40vw;
    height:60vh;
    position: absolute;
    z-index: 1000;
    cursor:pointer;
`