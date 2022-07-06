import React from "react";
import { MenuButton, NavbarContainer, NavbarLink } from "./Navbar.styled";

function Navbar(){
    const [visible, setVisible] = React.useState(false);
    return(
        <NavbarContainer visible={visible}>
            <MenuButton onClick={() => setVisible(prevVisible => !prevVisible)}>{visible ? "Close menu" : "Open menu"}</MenuButton>
            <NavbarLink onClick={() => setVisible(false)} to="/">Home</NavbarLink>
            <NavbarLink onClick={() => setVisible(false)} to="main/card">Preview Card</NavbarLink>
            <NavbarLink onClick={() => setVisible(false)} to="main/rating">Rating Component</NavbarLink>
            <NavbarLink onClick={() => setVisible(false)} to="main/expenses">Expenses chart</NavbarLink>
            <NavbarLink onClick={() => setVisible(false)} to="main/snap">Snap section</NavbarLink>
            <NavbarLink onClick={() => setVisible(false)} to="main/advice">Advice generator</NavbarLink>
            <NavbarLink onClick={() => setVisible(false)} to="main/calculator">Calculator</NavbarLink>
        </NavbarContainer>
    )
}

export default Navbar;