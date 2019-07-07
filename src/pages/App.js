import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./landing";


export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="*" component={Landing} />
                </Switch>
            </BrowserRouter>
        );
    }
}