import React from 'react';
import { NavLink } from "react-router-dom";

import { SubLi } from './SubLi';

export function SubItem(props) {
    const { name, subname } = props;
    return (
        <li className="nav-item dropdown">
            <NavLink className="dropdown-item" to="/someway">{name}</NavLink>
            <ul className="dropdown-menu dropdown-submenu">
                <SubLi name={`Action ${subname}.1`} />
                <SubLi name={`Action ${subname}.2`} />
                <SubLi name={`Action ${subname}.3`} />
            </ul>
        </li>


    );
}