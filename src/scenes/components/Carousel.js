import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Carousel.css'

class DeCarousel extends Component {
    render() {
        return (
          <div class="carousel">
            <Carousel autoPlay infiniteLoop>
                <div className="height">
                    <img src="3wenight_bg.png" className="bg-size"/>
                    <p className="legend">WELCOME</p>
                </div>
                <div className="height">
                    <img src="3wenight_bg.png" className="bg-size"/>
                    <p className="legend">WEa 1</p>
                </div>
                <div className="height">
                    <img src="3wenight_bg.png" className="bg-size"/>
                    <p className="legend">Legend 1</p>
                </div>
            </Carousel>
          </div>
        )
    }
}

export default DeCarousel
