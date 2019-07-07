import React from 'react';

import { SubItem } from './Sub-item';

export function Item(props) {
    const { name } = props;
    return (
        <li className="nav-item nav-item__levelOne dropdown">
            <a className="nav-link" href="#1" aria-haspopup="true" aria-expanded="false">
                {name}
            </a>
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