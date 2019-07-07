import React from 'react';

import { SubLi } from './SubLi';

export function SubItem(props) {
    const { name, subname } = props;
    return (
        <li className="nav-item dropdown">
            <a className="dropdown-item" href="#1">{name}</a>
            <ul className="dropdown-menu dropdown-submenu">
                <SubLi name={`Action ${subname}.1`} />
                <SubLi name={`Action ${subname}.2`} />
                <SubLi name={`Action ${subname}.3`} />
            </ul>
        </li>


    );
}