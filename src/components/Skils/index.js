import React, { Component } from 'react';

import ipad from '../../assets/img/png/ipad.png';

import './style.scss';

export default class Skils extends Component {
    componentDidMount() {
        const $ = window.$;

        $(function () {
            var jqBar = $('.skils');
            var jqBarStatus = true;

            $(window).scroll(function () {
                var scrollEvent = ($(window).scrollTop() > (jqBar.position().top - $(window).height()));
                if (scrollEvent && jqBarStatus) {
                    jqBarStatus = false;
                    let progressBar = document.querySelectorAll('.progress-bar');

                    const time = 1500;

                    function calculateTime(time, dataCount) {
                        return time / dataCount;
                    }

                    progressBar.forEach(i => {
                        let count = 0;

                        let label = i.children[0].children[1];
                        let line = i.children[1];

                        let dataCount = parseInt(label.getAttribute('data-count'));

                        let lineCount = line.children[0];

                        let runTime = calculateTime(time, dataCount);

                        let animationLineCount = setInterval(_ => {
                            if (count < dataCount) {
                                count++;

                                label.innerHTML = count + '%';
                                lineCount.style.width = count + '%';

                            }
                        }, runTime);

                    });
                }
            });
        });


    }

    render() {
        return (
            <div className='skils'>
                <div className='skils-bar'>
                    <h1>
                        <span style={{ color: '#019bd9' }}>
                            ABOUT
                        </span> US
                    </h1>

                    <p style={{ color: '#9a9a9a' }}>
                        Quisque fermentum, nisl mattis volutpat rhoncus, tellus est congue nibh, ut euism
                        Nullam at scelerisque tellus mattis volutpat rhoncus,
                    </p>

                    <br />

                    <p>
                        Nullam at scelerisque tellus. Nulla feugiat iaculis ante, non tincidunt ligula scelerisque a. Vestibulum accumsan tincidunt odio vel finibus. Phasellus vestibulum lobortis ligula ut volutpat. Maecenas vitae nibh vel purus mollis semper. Nullam tempus feugiat mi id semper. Pellentesque ac posuere augue, vitae mollis enim. Etiam et ullamcorper dolor, a hendrerit quam.
                        Donec pulvinar iaculis faucibus. Nunc feugiat semper fringilla.
                    </p>

                    <div className='progress-bar'>
                        <div className='skils-block'>
                            <h5>Photoshop</h5>
                            <label data-count='79%'>0%</label>
                        </div>
                        <div className='line'>
                            <span></span>
                        </div>
                    </div>
                    <div className='progress-bar'>
                        <div className='skils-block'>
                            <h5>HTML/CSS</h5>
                            <label data-count='90%'>0%</label>
                        </div>
                        <div className='line'>
                            <span></span>
                        </div>
                    </div>
                    <div className='progress-bar'>
                        <div className='skils-block'>
                            <h5>JAVASCRIPT</h5>
                            <label data-count='69%'>0%</label>
                        </div>
                        <div className='line'>
                            <span></span>
                        </div>
                    </div>
                    <div className='progress-bar'>
                        <div className='skils-block'>
                            <h5>WORDPRESS</h5>
                            <label data-count='92%'>0%</label>
                        </div>
                        <div className='line'>
                            <span></span>
                        </div>
                    </div>

                </div>
                <img src={ipad} alt='' />
            </div>
        );
    }
}