import React from "react";
import { NavbarContainer, NavbarLink } from "./Navbar.styled";

function Navbar(){
    return(
        <NavbarContainer>
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="main/card">Preview Card</NavbarLink>
        </NavbarContainer>
    )
}

export default Navbar;