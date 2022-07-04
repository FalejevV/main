import styled from "styled-components";
import {Link} from "react-router-dom";

export const NavbarContainer = styled.div`
    max-width: 1200px;
    height:60px;
    background-color: white;
    border-radius: 0 0 10px 10px;
    position: absolute;
    top:-60px;
    left:50%;
    transform: translate(-50%);
    width:100%;
    display: flex;
    align-items: center;
    border:2px solid black;
    border-top:0px;

    transition: all 0.3s;
    ${({ visible }) => visible && `
        top:0;
    `}
`

export const NavbarLink = styled(Link)`
    height:100%;
    min-width: 100px;
    width:fit-content;
    color:white;
    text-decoration: none;
    font-size:20px;
    color:black;
    padding:0px 20px;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    transition: all 0.3s;

    font-family: 'Roboto', sans-serif;
    &:hover{
        transform: scale(1.1);
    }
`

export const MenuButton = styled.button`
    position: absolute;
    left:50%;
    transform: translate(-50%);
    bottom:-40px;
    background-color: white;
    padding:10px 20px;
    cursor: pointer;
    border:2px solid black;
    border-radius: 0px 0px 10px 10px;

    opacity: 0.2;
    transition: all 0.3s;
    &:hover {
        opacity: 1;
    }
`