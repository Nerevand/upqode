import React, { Component } from 'react';

import { Card } from './Card';
import { data } from './data.js';

import './style.scss';

export default class Blocks extends Component {
    render() {
        return (
            <section className='section'>
                <h2>
                    Why <span className='color-blue'>choose us</span>
                </h2>
                <p>
                    Quisque fermentum, nisl mattis volutpat rhoncus, tellus est congue nibh, ut euismod quam nisi quis felis.
                    Nullam at scelerisque tellus mattis volutpat rhoncus,
                </p>

                <div className='section-blocks'>
                    {
                        data.map(({ img, title, text }, index) => {
                            return (
                                <Card
                                    img={img}
                                    title={title}
                                    text={text}
                                    key={index}
                                />
                            );
                        })
                    }
                </div>

            </section>
        );
    }
}