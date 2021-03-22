import React, { Component } from 'react';
import Routes from './routes';

export default class App extends Component {
  constructor(props) {
        super(props)
        this.state = { loading: true }
    }

    render() {
        return (
                <Routes />
        );
    }
}
