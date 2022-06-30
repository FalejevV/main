import styled from "styled-components";
import {Link} from "react-router-dom";

export const NavbarContainer = styled.div`
    max-width: 1200px;
    height:60px;
    background-color: white;
    border-radius: 0 0 10px 10px;
    position: absolute;
    top:0;
    left:50%;
    transform: translate(-50%);
    width:100%;
    display: flex;
    align-items: center;
    overflow: hidden;
    border:2px solid black;
    border-top:0px;
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