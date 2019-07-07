import React from 'react';

import './style.scss';

export function Success() {
    return (
        <section className="c-container">
            <div className="container">
                <div className="loader">
                    <div className="checkmark"></div>
                </div>
                <div className="message">Success!</div>
            </div>
        </section>
    );
}