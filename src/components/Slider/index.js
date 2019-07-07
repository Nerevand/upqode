import React, { Component } from 'react';

import slider1 from '../../assets/img/png/slider-1.png';

import './style.scss'

export default class Slider extends Component {
    render() {
        return (
            <section className='clider'>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={slider1} className="d-block w-100" alt="..." />
                            <div className='overlay'></div>

                            <div className="carousel-caption">
                                <h3 className="carousel-caption__spans">
                                    <span className='carousel-caption__white'>Creative</span>
                                    <span className='carousel-caption__yellow'> Design Agency</span>
                                </h3>
                                <p>
                                    Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit
                                    non mi porta gravida at eget metus. Curabitur blandit tempus porttitor.
                                </p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={slider1} className="d-block w-100" alt="..." />
                            <div className='overlay'></div>

                            <div className="carousel-caption">
                                <h3 className="carousel-caption__spans">
                                    <span className='carousel-caption__white'>Creative</span>
                                    <span className='carousel-caption__yellow'> Design Agency</span>
                                </h3>
                                <p>
                                    Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit
                                    non mi porta gravida at eget metus. Curabitur blandit tempus porttitor.
                                </p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={slider1} className="d-block w-100" alt="..." />
                            <div className='overlay'></div>

                            <div className="carousel-caption">
                                <h3 className="carousel-caption__spans">
                                    <span className='carousel-caption__white'>Creative</span>
                                    <span className='carousel-caption__yellow'> Design Agency</span>
                                </h3>
                                <p>
                                    Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit
                                    non mi porta gravida at eget metus. Curabitur blandit tempus porttitor.
                                </p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </section>
        );
    }
}