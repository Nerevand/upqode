import React from 'react';
import { NavLink } from "react-router-dom";

import { SubItem } from './Sub-item';

export function Item(props) {
    const { name } = props;
    return (
        <li className="nav-item nav-item__levelOne dropdown">
            <NavLink className="nav-link" to="/someway" aria-haspopup="true" aria-expanded="false">
                {name}
            </NavLink>
            <ul className="dropdown-menu">
                <SubItem
                    name='Action 1'
                    subname='1'
                />
                <SubItem
                    name='Action 2'
                    subname='2'
                />
                <SubItem
                    name='Action 3'
                    subname='3'
                />
            </ul>
        </li>
    );
}