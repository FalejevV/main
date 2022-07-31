import styled from "styled-components";
import {Link} from "react-router-dom";
import downArrow from "./icon-arrow-down.svg";

export const NavbarContainer = styled.div`
    max-width: 1200px;
    min-height:60px;
    height:fit-content;
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
    z-index:1000;

    @media(max-width:800px){
        left:unset;
        right:0px;
        transform: translate(0);
        top:0;
        height:100vh;
        width:100%;
        max-width:300px;
        flex-direction: column;
    }

`

export const Dropdown = styled.div`
    display: none;
    flex-direction: column;
    align-items: center;
    padding:10px 0px;
    background-color: red;
    position: absolute;
    top:55px;
    left:50%;
    transform: translate(-50%);
    border-radius: 0 0 10px 10px;
    border:2px solid black;
    border-top:0px;
    background-color: white;
    gap:5px;
    z-index: 1005;
    @media (max-width: 600px){
        ${({ active }) => active && `
            display:flex;
        `}
    }

    @media(max-width:800px){
        position: relative;
        top:300px;
    }
`

export const NavbarLink = styled(Link)`
    height:58px;
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
    white-space: nowrap;
    font-family: 'Roboto', sans-serif;
    position: relative;
    &:hover{
        transform: scale(1.1);
    };
`

export const NavbarDropdownItem = styled.div`
    height:58px;
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
    white-space: nowrap;
    font-family: 'Roboto', sans-serif;
    position: relative;
    cursor:pointer;
    &:hover{
        transform: scale(1.1);
        ${Dropdown}{
            display: flex;
        }
    };

    ${({ dropdown }) => dropdown && `
    padding-right:20px;

    &:after{
        transition: all 0.3s;
        content: url(${downArrow});
        position:absolute;
        right:5px;
        padding-bottom:5px;
    }
    &:hover{
         &:after{
            transform: translate(0px, 3px) rotate(180deg) ;
        }
    }

    @media(max-width:800px){
        flex-direction:column;
    }

`};

    @media(max-width:600px){
        ${({ active }) => active && `
            &:after{
                transform: translate(0px, 3px) rotate(180deg);
            }
        `}
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