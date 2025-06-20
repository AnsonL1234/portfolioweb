import React from "react";
import { headerData } from "./headerData";

export default function Header(props) {

    return (
        <header>
            <ul>
                <li className="nav_items">
                    <a className="nav_link" href="#home">{props.homePage}</a>
                </li>
            </ul>
        </header>
    );
}

