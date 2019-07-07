import React, { Component } from 'react';

import { data } from './data';
import { Card } from './Card';

import img from '../../assets/img/png/triagle.png';

import './style.scss';

export default class Products extends Component {
    render() {
        return (
            <div className='products'>
                <img src={img} alt='' className='our-products' />

                <div id="carouseIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouseIndicators" data-slide-to="0"></li>
                        <li data-target="#carouseIndicators" data-slide-to="1" className="active"></li>
                        <li data-target="#carouseIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item">
                            <div className='carousel-cards'>
                                {
                                    data.map(({ image, name, subname, description }, index) => {
                                        return (
                                            <Card
                                                image={image}
                                                name={name}
                                                subname={subname}
                                                description={description}
                                                key={index} />
                                        );
                                    })
                                }
                            </div>
                        </div>
                        <div className="carousel-item active">
                            <div className='carousel-cards'>
                                {
                                    data.map(({ image, name, subname, description }, index) => {
                                        return (
                                            <Card
                                                image={image}
                                                name={name}
                                                subname={subname}
                                                description={description}
                                                key={index} />
                                        );
                                    })
                                }
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className='carousel-cards'>
                                {
                                    data.map(({ image, name, subname, description }, index) => {
                                        return (
                                            <Card
                                                image={image}
                                                name={name}
                                                subname={subname}
                                                description={description}
                                                key={index} />
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev carousel-arrows" href="#carouseIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next carousel-arrows" href="#carouseIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        );
    }
}