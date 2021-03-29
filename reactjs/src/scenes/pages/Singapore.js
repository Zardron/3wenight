import React, { Component } from 'react'
import Navbar from '../Navbar'
import { connect } from "react-redux";
import cookies from "js-cookie";

class Singapore extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <img src="./country/singapore.png" style={{width: '100%'}}></img>
            </div>
        )
    }
}

export default Singapore
