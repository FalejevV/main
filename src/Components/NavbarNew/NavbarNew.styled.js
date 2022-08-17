import styled from "styled-components";
import {Link} from "react-router-dom";
import downArrow from "./icon-arrow-down.svg";

export const Container = styled.nav`
    display: flex;
    width:100%;
    max-width:1050px;
    background-color: white;
    height: 60px;
    border:2px solid black;
    align-items: center;
    position:fixed;
    top:-2px;
    left:50%;
    transform: translate(-50%);
    border-radius: 0 0 10px 10px;
    padding:20px;
    z-index:2000;
    top:-60px;
    transition: all 0.3s;
    
    ${({ visible }) => visible && `
        top:-2px;
    `}

    @media(max-width:750px){
        flex-direction:column;
        right:-300px;
        left:auto;
        top:0px;
        transform: translate(0);
        width:100%;
        max-width:300px;
        height:100vh;
        border-radius: 0;
        border:0px;
        border-left:2px solid black;

        ${({ visible }) => visible && `
            right:0px;
        `}

    }

`

export const ShowButton = styled.p`
    width:50px;
    height:40px;
    padding:10px;
    position:absolute;
    top:58px;
    background-color: white;
    opacity: 0.2;
    border:2px solid black;
    border-top:0px;
    border-radius: 0 0 10px 10px;
    left:50%;
    transform: translateX(-50%);
    cursor:pointer;
    transition: all 0.3s;

    
    @media(max-width:750px){
        top:50%;
        left:-50px;
        transform: translate(0);
        border:1px solid black;
        border-radius: 10px 0 0 10px;
    }

    &:hover{
        opacity: 1;
    }

    span{  
        transition: all 0.3s;
        position:absolute;
        top:8px;
        left:50%;
        transform: translateX(-50%);
        width:70%;
        height:2px;
        background-color: black;
    }

    span:nth-child(2){
        top:18px;
    }

    span:last-child{
        top:auto;
        bottom: 8px;
    }

    ${({ visible }) => visible && `
        span:first-child{
            transform: translate(-16px,10px) rotate(43deg);
        }
        span:nth-child(2){
            opacity:0;
        }
        span:last-child{
            transform: translate(-16px,-10px) rotate(-43deg);
        }

        @media(max-width:750px){
            left:10px;
            border:1px solid transparent;
        }
    `}

`

export const DropdownItem = styled.p`
    color:black;
    font-size: 20px;
    padding: 10px 20px; 
    text-align: center;
    cursor:pointer;
    transition: all 0.3s;
    &:after{
        transition: all 0.3s;
        position:absolute;
        content: url(${downArrow});
        padding-left:10px;
    }
`

export const DropdownMenu = styled.div`
    display: flex;
    flex-direction: column;
    gap:5px;
    height:fit-content;
    display: none;
    width:150px;
    position: absolute;
    left:50%;
    transform: translate(-50%);
    top:35px;
    background-color: white;
    padding:10px;
    border:2px solid black;
    border-top:0px;
    border-radius: 0 0 10px 10px;
    @media(max-width:750px){
        position: relative;
        top:0px;
        border:0px;
        right:0px;

        &:before{
            content:"";
            width:100%;
            height:1px;
            background-color: black;
            top:0px;
            left:0px;
        }

        &:after{
            content:"";
            width:100%;
            height:1px;
            background-color: black;
            bottom:0px;
            left:0px;
        }
    }
`

export const NavLink = styled(Link)`
    color:black;
    font-size: 20px;
    padding: 10px; 
    text-align: center;
    cursor:pointer;
    text-decoration: none;
    transition:all 0.3s;
    &:hover{
        transform: scale(1.1);
    }

    @media(max-width:750px){
        width:100%;
    }
`


export const Dropdown = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1000;
    &:hover{
        ${DropdownMenu}{
            display: flex;
        }

        ${DropdownItem}{
            &:after{
                transform: rotate(180deg) translate(-10px, -5px);
            }
        }

        @media(max-width:750px){
            ${NavLink}{
                text-align: left;
                padding-left:20%;
            }
        }

    }

    @media(max-width:750px){
        width:100%;
    }
`