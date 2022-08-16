import styled from "styled-components";
import downArrow from "./img/icon-arrow-down.svg";

export const Header = styled.div`
    max-width: 1440px;
    width:100%;
    height:90px;
    margin:0 auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 40px;
    gap:20px;
    margin-bottom: 40px;

    @media(max-width:550px){
        padding: 10px 20px;
    }
`

export const NavContainer = styled.div`
    max-width: 1440px;
    width:100%;
    height:90px;
    margin:0 auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap:60px;
    transition: all 0.3s;

`
export const BrandTitle = styled.h1`
    font-size:32px;
    font-weight: 700;
    color:black;
    cursor: pointer;
`
export const Navbar = styled.div`
    width:fit-content;
    height:100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap:0px;
    flex:auto;

`


export const DropdownTitle = styled.p`
    padding:5px;
    &:after{
        transition: all 0.3s;
        content:url(${downArrow});
        position:absolute;
        right:0;
        width:fit-content;
    }

    ${({toggled}) => toggled &&`
        &:after{
            transform:rotate(180deg) translate(0, -3px);
        }
    `}

`


export const DropdownMenu = styled.div`
    position: absolute;
    display: none;
    flex-direction: column;
    right:0;
    top:45px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 0px 15px -3px rgba(0,0,0,0.2);  
    padding:10px 15px;
    width:fit-content;
    ${({toggled}) => toggled && `
        display:flex;
        height:auto;
        overflow:hidden;
        padding:10px;
    `}
`


export const Icon = styled.svg`
    width: 20px;
    height:20px;
`
export const BurgerButton = styled.div`
    @media (max-width:1050px){
        width:30px;
        height: 30px;
        position: absolute;
        cursor:pointer;
        padding:10px;
        z-index: 1000;
        right:50px;
        span:nth-child(1){
            content:"";
            width:100%;
            height:1px;
            background-color: black;
            position:absolute;
            top: 5px;
            left:0;
            transition: all 0.3s;
        }
        span:nth-child(2){
            content:"";
            width:100%;
            height:1px;
            background-color: black;
            position:absolute;
            top:50%;
            transform: translate(0,-50%);
            left:0;
            transition: all 0.3s;
        }
        span:nth-child(3){
            content:"";
            width:100%;
            height:1px;
            background-color: black;
            position:absolute;
            bottom: 5px;
            left:0;
            transition: all 0.3s;
        }
        
        ${({ toggled }) => toggled && `
            span:nth-child(1){
                transform: translate(0,10px) rotate(45deg) ;
            }
            span:nth-child(2){
                background-color: transparent;
            }
            span:nth-child(3){
                transform: translate(0,-9px) rotate(-45deg) ;
            }
        `}

        @media(max-width:550px){
            right:35px;
        }
    }
`

export const MenuItem = styled.div`
    color:#676767;
    font-size: 14px;
    font-weight: 500;
    position: relative;
    padding:10px;
    width:fit-content;
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap:5px;
    white-space: nowrap;
    ${({ dropdown }) => dropdown && `
        margin-right:10px;
        &:hover{
            ${DropdownTitle}{
                @media(min-width:1050px){
                    &:after{
                        transform:rotate(180deg) translate(0, -3px);
                    }
                }
            }
            ${DropdownMenu}{
                @media(min-width:1050px){
                    display:flex;
                }

                ${DropdownItem}:hover{
                    transform:scale(1.05);
                }
            }
        }
    `};

    ${({ border }) => border && `
        border:1px solid #676767;
        border-radius:10px;
        padding:10px 20px;
        &:hover{
            border:1px solid black;
        }
    `}

    transition: all 0.3s;
    &:hover{
        color:black;
    }

`

export const DropdownItem = styled(MenuItem)`
    width:fit-content;
`

export const LoginBar = styled(Navbar)`
    flex: 0;
    gap:20px;
`

export const Page = styled.div`
    max-width: 100vw;
    width:100%;
    min-height: 100vh;
    background-color: #FAFAFA;
    font-family: 'Epilogue', sans-serif;
    padding:0px 10px;
    @media (max-width:1050px){
        ${NavContainer}{
            position:absolute;
            flex-direction: column;
            top:0px;
            right:-300px;
            height:100vh;
            width:300px;
            background-color: white;
            padding:40px 10px;
            padding-top: 60px;

            ${({ mobileOpen }) => mobileOpen && `
                right:0;
            `};
            ${Navbar}{
                flex-direction: column;
                flex: 0 1;
                gap:0px;
                ${MenuItem}{
                    flex-direction: column;
                    padding:15px;
                    width:100px;
                }
                ${DropdownMenu}{
                    align-content: flex-start;
                    position:relative;
                    top:10px;
                    margin-bottom: 0;
                    width:fit-content;
                    box-shadow: 0px 0px 15px -3px rgba(0,0,0,0);  
                    ${MenuItem}{
                        flex-direction: row;
                        width:fit-content;
                    }
                }
            }
        }
    }
`

export const Hero = styled.section`
    max-width: 1160px;
    margin: 0 auto;
    display:flex;
    padding:0px 10px;
    gap:100px;
    justify-content: center;
    align-items: flex-end;

    @media(max-width:1030px){
        gap:50px;
    }

    @media(max-width:900px){
        gap:20px;
    }

    @media(max-width:860px){
        flex-direction: column-reverse;
        padding:10px 0px;  
        gap:60px;
    }
`

export const InfoSection = styled.div`
    display:flex;
    flex-direction:column;
    flex:auto;
    justify-content: flex-end;

    @media(max-width:860px){
        align-items: center;
        text-align: center;
    }
`

export const HeroImage = styled.img`
    max-width:480px;
    width:100%;
    height:100%;
    @media(max-width:860px){
        display:none;
    }
`

export const HeroImageMobile = styled.img`
    display:none;
    width:100%;
    max-height:420px;
    object-fit: contain;
    @media(max-width:860px){
        display:block;
    }
`


export const HeroTitle = styled.h1`
    font-weight: 700;
    font-size: 80px;
    margin-bottom: 60px;

    @media(max-width:900px){
        font-size: 60px;
    }
    @media(max-width:450px){
        font-size: 40px;
    }
    @media(max-width:450px){
        margin-bottom: 25px;
    }
`

export const HeroText = styled.p`
    color:#676767;
    font-size:18px;
    padding-right:100px;
    line-height: 30px;
    margin-bottom: 60px;
    height:fit-content;
    @media(max-width:900px){
        padding-right:50px;
    }
    @media(max-width:860px){
        padding-right:0px;
    }
    @media(max-width:450px){
        width:290px;
        margin-bottom: 30px;
    }
`

export const HeroButton = styled.button`
    width:fit-content;
    color:white;
    font-size: 18px;
    font-weight: 700;
    background-color: black;
    padding: 15px 30px;
    border-radius: 15px;
    margin-bottom: 100px;
    cursor:pointer;
    border:1px solid black;

    transition: all 0.3s;
    &:hover{
        background-color: transparent;
        color:black;
    }

    @media(max-width:860px){
        margin-bottom: 40px;
    }
`

export const HeroClients = styled.div`
    display:flex;

    width:100%;
    gap:40px;
    align-items: center;

    @media(max-width:900px){
        gap:20px;
    }
    @media(max-width:860px){
        justify-content: center;
    }

    @media(max-width:450px){
        flex-wrap: wrap;
    }
`