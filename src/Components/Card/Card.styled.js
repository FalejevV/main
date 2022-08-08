import styled from "styled-components";

export const Page = styled.div`
    max-width: 100vw;
    width:100vw;
    height:100vh;
    background-color: white;
    display: flex;
    font-family: 'Space Grotesk', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1060px){
        align-items: flex-start;
    }
`

export const Container = styled.div`
    max-width: 1440px;
    height:fit-content;
    width:100%;
    display:flex;
    position:relative;
    align-items: center;
    justify-content: center;
    gap:120px;
    padding:50px;
    @media (max-width: 1060px){
        flex-direction: column;
        margin:0;
        padding:20px;
    }
`

export const BGPicture = styled.picture`
    position:absolute;
    top:50%;
    transform: translateY(-50%);
    left:0px;

    @media (max-width: 1060px){
        transform: translateY(0px);
        top:0%;
        width:100%;
    }

`

export const ImageBackground = styled.img`
    max-width: 100%;
    height:900px;
    top:0px;
    @media (max-width: 1060px){
        width:100%;
        height:240px;
        object-fit: cover;
        top:0;
    }
`


export const CardsFlexbox = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 540px;
    width:100%;
    position:relative;
    z-index:10;
    gap:35px;

    @media (max-width: 1060px){
        flex-direction: column-reverse;
        gap:0px;
        margin-bottom: 20px;
    }
`