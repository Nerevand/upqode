import React from 'react';

import fb from '../../assets/img/png/fb.png';
import gp from '../../assets/img/png/gp.png';
import tw from '../../assets/img/png/tw.png';
import db from '../../assets/img/png/db.png';

import './style.scss';

export function Footer() {
    return (
        <footer>
            <h6>Copyright © Company. All Rights Reserved  2019</h6>

            <ul>
                <li>
                    <img src={fb} alt='' />
                </li>

                <li>
                    <img src={gp} alt='' />
                </li>

                <li>
                    <img src={tw} alt='' />
                </li>

                <li>
                    <img src={db} alt='' />
                </li>
            </ul>
        </footer>
    );
}