import React from 'react';
import { NavLink } from "react-router-dom";

export function SubLi(props) {
    const { name } = props;
    return (
        <li
            className="nav-item dropdown">
            <NavLink className="dropdown-item" to="/someway">
                {name}
            </NavLink>
        </li>
    );
}