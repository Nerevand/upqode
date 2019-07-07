import React from 'react';

import './style.scss';

export function Card(props) {
    const { image, name, subname, description } = props;
    return (
        <div className='myCard'>
            <div className='myCard-wrapper'>
                <img src={image} alt='' className='myCard-img' />
            </div>

            <div>
                <h4>{name}</h4>
                <h6>{subname}</h6>
                <p>{description}</p>
            </div>
        </div>
    );
}