import React, { Fragment } from 'react';

import Header from '../../components/Header';
import Slider from '../../components/Slider';
import Blocks from '../../components/Blocks';
import Products from '../../components/Products';
import Skils from '../../components/Skils';
import { Touch } from '../../components/Touch';
import Map from '../../components/Location';
import { Footer } from '../../components/Footer';

function Main() {
    return (
        <Fragment>
            <Header />
            <Slider />
            <Blocks />
            <Products />
            <Skils />
            <Touch />
            <Map />
            <Footer />
        </Fragment>
    )
}

export default Main;