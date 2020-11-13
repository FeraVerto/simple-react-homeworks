import React, {useState} from "react";
import Header from "./Header/Header";
import Routes from "./Routes/Routes";
import {HashRouter} from "react-router-dom";
import {Navbar} from "./Navbar/Navbar";
import "./HW5.css";


function HW5() {

    let [collapsedNavbar, setCollapsedNavbar] = useState(true);

    function setCollapsed() {
        setCollapsedNavbar(!collapsedNavbar)
    }

    return (
        <div className="hw5">
            {/*в gh-pages лучше работает HashRouter*/}
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
