import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div clasName="navigation-bar">
                <nav>
                    <ul>
                        <li>home</li>
                        <li>art</li>
                        <li>education</li>
                        <li>community development</li>
                        <li>about</li>
                        <li>contact</li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Header;
