import React, { Component } from 'react';

import { Item } from './Nav-item';

import logo from '../../assets/img/png/logo.png';

import './style.scss'

class Header extends Component {
    render() {
        return (
            <header className='header'>
                <nav className="navbar navbar-expand-lg navbar-light bg-white w-10">
                    <img src={logo} className='header-logo' alt='' />
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <Item
                                name='Home'
                            />

                            <Item
                                name='Products'
                            />

                            <Item
                                name='About'
                            />

                            <Item
                                name='Contact'
                            />

                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;