import React from 'react';

import lupa from '../../../assets/img/png/lupa.png';
import set from '../../../assets/img/png/set.png';

import './style.scss';

export function Card(props) {
    const { img, title, text } = props;
    return (
        <div className="card" style={{ width: "11rem" }}>
            <div className='card-wrapper'>
                <img src={img} className="card-img-top" alt="..." />
            </div>
            <div className="card-body">
                <h5 className="card-title">
                    {title}
                </h5>

                <p className="card-text">
                    {text}
                </p>
            </div>
            <div className='card-hide'>
                <h6>See more</h6>
                <div className='card-hide__icons'>
                    <img src={set} alt='' />
                    <img src={lupa} alt='' />
                </div>
            </div>
        </div>
    );
}