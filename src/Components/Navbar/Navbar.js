import React from "react";
import { NavbarContainer, NavbarLink } from "./Navbar.styled";

function Navbar(){
    return(
        <NavbarContainer>
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="main/card">Preview Card</NavbarLink>
            <NavbarLink to="main/rating">Rating Component</NavbarLink>
        </NavbarContainer>
    )
}

export default Navbar;