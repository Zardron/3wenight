import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../../assets/components/Carousel.css'

class DeCarousel extends Component {
    render() {
        return (
            <div>
            <img src="Untitled.png" className="banner-size"></img>
            <p className="welcome"><span className="text">WELCOME TO 3WE NIGHT</span></p>
            <p className="welcome2"><span className="text2">We try to provide best entertainment leisure for everyone and introducing the best night life activities for public in those related countries</span></p>
            <p className="welcome3"><span className="text2">Browse through some of the best nightlife activities on our website and find your dream clubbing places</span></p>
            <p className="welcome4"><span className="text3">Join our forum and comment on your best experience nightlife activities you had been to!</span></p>
            <Carousel autoPlay infiniteLoop> 
                    <div className="girl-position">
                        <img src="girl1.png" className="girl-size"/>
                    </div>
                    <div className="girl-position">
                        <img src="girl2.png" className="girl-size"/>
                    </div>
                    <div className="girl-position">
                        <img src="girl3.png" className="girl-size"/>
                    </div>
                    <div className="girl-position">
                        <img src="girl4.png" className="girl-size"/>
                    </div>
            </Carousel>
            </div>
        )
    }
}

export default DeCarousel
