import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {PATH} from "../Routes/Routes";
import s from "./Navbar.module.css";


type NavbarType = {
    collapsedNavbar: boolean
    setCollapsedNavbar: () => void
}

export function Navbar(props: NavbarType) {
    return (
        <div className={s.navbar_block}>
            <div className={s.navbar_button} onClick={(e) => {
                props.setCollapsedNavbar()
            }}>Menu <span className={s.navbar_arrow}>></span>
            </div>
            {!props.collapsedNavbar && <Menu/>}
        </div>
    );
}


export function Menu() {
    return (
        <ul className={s.navbar}>
            <li><NavLink to={PATH.PRE_JUNIOR} activeClassName={s.activeLink}>PreJunior</NavLink></li>
            <li><NavLink to={PATH.JUN} activeClassName={s.activeLink}>Junior</NavLink></li>
            <li><NavLink to={PATH.JUN_PLUS} activeClassName={s.activeLink}>JuniorPlus</NavLink></li>
        </ul>
    )
}



