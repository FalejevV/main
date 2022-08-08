import React from "react";
import { Container, Dropdown, DropdownItem, NavLink,DropdownMenu, ShowButton } from "./NavbarNew.styled";

function NavbarNew(){
    const [menuVisible, setMenuVisible] = React.useState(false);
    function toggleMenu(){
        setMenuVisible(prevMenuVisible => !prevMenuVisible);
    }
    return(
        <Container visible={menuVisible}>
            <NavLink onClick={toggleMenu} to="/">Home</NavLink>
            <Dropdown>
                <DropdownItem>Newbie</DropdownItem>
                <DropdownMenu>
                    <NavLink onClick={toggleMenu} to="main/card">Preview Card</NavLink>
                    <NavLink onClick={toggleMenu} to="main/rating">Rating Component</NavLink>
                    <NavLink onClick={toggleMenu} to="main/3columns">3 columns</NavLink>
                </DropdownMenu>
            </Dropdown>
            <Dropdown>
                <DropdownItem>Junior</DropdownItem>
                <DropdownMenu>
                    <NavLink onClick={toggleMenu} to="main/expenses">Expenses Chart</NavLink>
                    <NavLink onClick={toggleMenu} to="main/snap">Snap Section</NavLink>
                    <NavLink onClick={toggleMenu} to="main/advice">Advice Generator</NavLink>
                    <NavLink onClick={toggleMenu} to="main/tips">Tip Calculator</NavLink>
                    <NavLink onClick={toggleMenu} to="main/tdashboard">Time Dashboard</NavLink>
                    <NavLink onClick={toggleMenu} to="main/cardform">Interactive Card Form</NavLink>
                </DropdownMenu>
            </Dropdown>
            <Dropdown>
                <DropdownItem>Intermediate</DropdownItem>
                <DropdownMenu>
                    <NavLink onClick={toggleMenu} to="main/calculator">Calculator</NavLink>
                    <NavLink onClick={toggleMenu} to="main/tracker">IP Tracker</NavLink>
                    <NavLink onClick={toggleMenu} to="main/todo">Todo List</NavLink>
                    <NavLink onClick={toggleMenu} to="main/timer">Countdown Timer</NavLink>
                    <NavLink onClick={toggleMenu} to="main/joblist">Job Listings</NavLink>
                </DropdownMenu>
            </Dropdown>

            <ShowButton visible={menuVisible} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </ShowButton>
        </Container>
    )
}

export default NavbarNew;