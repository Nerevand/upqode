import React from 'react';

export function SubLi(props) {
    const { name } = props;
    return (
        <li
            className="nav-item dropdown">
            <a className="dropdown-item" href="#1">
                {name}
            </a>
        </li>
    );
}