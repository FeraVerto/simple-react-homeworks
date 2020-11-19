import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {PATH} from "../Routes/Routes";
import "./Navbar.css";


type NavbarType = {
    collapsedNavbar: boolean
    setCollapsedNavbar: () => void
}

export function Navbar(props: NavbarType) {
    return (
        <div className="navbar_block">
            <div className="navbar_button" onClick={(e) => {
                props.setCollapsedNavbar()
            }}>Menu <span className="navbar_arrow">></span>
            </div>
            {!props.collapsedNavbar && <Menu/>}
        </div>
    );
}


export function Menu() {
    return (
        <ul className="navbar">
            <li><NavLink to={PATH.PRE_JUNIOR} activeClassName="activeLink">PreJunior</NavLink></li>
            <li><NavLink to={PATH.JUN} activeClassName="activeLink">Junior</NavLink></li>
            <li><NavLink to={PATH.JUN_PLUS} activeClassName="activeLink">JuniorPlus</NavLink></li>
        </ul>
    )
}



