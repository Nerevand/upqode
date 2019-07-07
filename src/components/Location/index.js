import React, { Component, Fragment } from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

import { Success } from '../common/Success';

import './style.scss';

class Map extends Component {
    constructor(props) {
        super(props);

        this.getPosition();

        this.state = {
            latitude: 49.852555,
            longitude: 24.025850,
            data: {
                name: '',
                email: '',
                message: ''
            },
            errors: {
                email: ''
            },
            success: false

        }
    }

    getPosition = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                })
            });
        }
    }

    handleSetData = () => {
        this.setState({
            data: {
                name: this._name.value.trim(),
                email: this._email.value.trim(),
                message: this._message.value.trim()
            }
        })
    }

    handleSend = () => {
        let [name, email, message] = [this._name.value.trim(), this._email.value.trim(), this._message.value.trim()];
        let errorMessage = document.getElementsByClassName('error-message');
        let arr = document.getElementsByClassName('form-control');
        const validy = this._email.validity;

        if (name.length === 0 || email.length === 0 || message.length < 10 || !validy.valid) {
            if (name.length === 0) {
                arr[1].style.border = '1px solid red';
                errorMessage[0].style.opacity = 1;
            } else {
                arr[1].style.border = '1px solid rgb(169, 169, 169';
                errorMessage[0].style.opacity = 0;
            }

            if (email.length === 0) {
                arr[2].style.border = '1px solid red';
                errorMessage[1].style.opacity = 1;
                this.setState({ errors: { email: 'Enter an email' } });
            } else if (!validy.valid) {
                arr[2].style.border = '1px solid red';
                errorMessage[1].style.opacity = 1;
                this.setState({ errors: { email: 'Enter a valid email' } });
            } else {
                arr[2].style.border = '1px solid rgb(169, 169, 169';
                errorMessage[1].style.opacity = 0;
            }

            if (message.length < 10) {
                arr[3].style.border = '1px solid red';
                errorMessage[2].style.opacity = 1;
            } else {
                arr[3].style.border = '1px solid rgb(169, 169, 169';
                errorMessage[2].style.opacity = 0;
            }
        } else {
            arr[1].style.border = '1px solid rgb(169, 169, 169';
            arr[2].style.border = '1px solid rgb(169, 169, 169';
            arr[3].style.border = '1px solid rgb(169, 169, 169';
            errorMessage[0].style.opacity = 0;
            errorMessage[1].style.opacity = 0;
            errorMessage[2].style.opacity = 0;
            this.setState({ success: true })
            setTimeout(() => {
                this.setState({ success: false })
            }, 3000)
        }
    }

    render() {
        const { longitude, latitude, errors, success } = this.state;

        return (
            <Fragment>
                <LeafletMap
                    center={[latitude, longitude]}
                    zoom={17}
                    attributionControl={true}
                    zoomControl={false}
                    doubleClickZoom={false}
                    scrollWheelZoom={false}
                    dragging={true}
                    animate={true}
                    easeLinearity={0.35}
                    className='leafMap'
                >
                    <TileLayer
                        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    />
                    <Marker position={[49.852539, 24.025863]}>
                        <Popup>
                            Popup for any custom information.
                    </Popup>
                    </Marker>
                    <div className='map-wrapper'>
                        <div className='wrapper-center'>
                            {success ? <Success /> : ''}
                            <form>
                                <div className='input-block'>
                                    <input
                                        type='text'
                                        className='form-control'
                                        placeholder='Full Name'
                                        onBlur={this.handleSetData}
                                        ref={node => this._name = node} />
                                    <p className='error-message'>Enter your name</p>
                                </div>

                                <div className='input-block'>
                                    <input
                                        type='email'
                                        className='form-control'
                                        placeholder='E-mail Address'
                                        pattern='[a-zA-Z0-9.-_]{4,}@[a-zA-Z.-]{2,}'
                                        onBlur={this.handleSetData}
                                        ref={node => this._email = node} />
                                    <p className='error-message'>{errors.email}</p>
                                </div>

                                <div className='wrapper-area'>
                                    <textarea
                                        className='form-control'
                                        ref={node => this._message = node}
                                        placeholder='Message'>
                                    </textarea>
                                    <p className='error-message'>Leave your message to us(min length 10 charts)</p>
                                </div>

                                <div className='box-wrapper'>
                                    <div className='checkbox-wrapper'>
                                        <label className="remember-check">
                                            <input type="checkbox" className='block-remember' />
                                            <p>I like your company</p>
                                            <span className="checkmark" />
                                        </label>
                                    </div>

                                    <div
                                        className='form-button'
                                        onClick={this.handleSend}
                                    >
                                        Send
                                </div>
                                </div>
                            </form>
                            <div className='form-address'>
                                <p>
                                    69/A, Some Street Name  <br />
                                    Your City, code 01234  <br />
                                    Country Name
                                </p>

                                <p>
                                    +880 123 456 78 98 <br />
                                    +860 987 648 74 95
                                </p>
                                <p>
                                    company@mail.com <br />
                                    sales@mail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </LeafletMap>
            </Fragment>
        );
    }
}
export default Map