import React, {useState} from "react";
import Header from "./Header/Header";
import Routes from "./Routes/Routes";
import {HashRouter} from "react-router-dom";
import {Navbar} from "./Navbar/Navbar";
import s from "./HW5.module.css";

function HW5() {

    let [collapsedNavbar, setCollapsedNavbar] = useState(true);

    function setCollapsed() {
        setCollapsedNavbar(!collapsedNavbar)
    }

    return (
        <div className={s.hw5}>
            <HashRouter>

                <Header/>
                <Navbar collapsedNavbar={collapsedNavbar}
                        setCollapsedNavbar={setCollapsed}
                />
                <Routes/>

            </HashRouter>
        </div>
    );
}

export default HW5;
