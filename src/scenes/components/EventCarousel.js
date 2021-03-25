import React, { Component } from 'react'
import '../../assets/components/EventCarousel.css'
import Slider from "react-slick";

export default class EventCarousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
          events: [
            {src: './event/1.png'},
            {src: './event/2.png'},
            {src: './event/3.png'},
            {src: './event/4.png'},
            {src: './event/5.png'},
            {src: './event/6.png'},
            {src: './event/7.png'},
            {src: './event/8.png'},
            {src: './event/9.png'},
            {src: './event/10.png'},
            {src: './event/11.png'},
            {src: './event/12.png'},
          ]
        };
      }

    render() {
        const settings = {
            infinite: true,
            slidesToShow: 3,
            
            autoplay: true,
            speed: 3000,
            autoplaySpeed: 4000,
            prevArrow: false,
            nextArrow: false,
            cssEase: "linear",
            responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
    };

      return ( 

        <>
        <div className="event-container-carousel">
        <Slider {...settings} arrows={false}>
            {this.state.events.map(src => (
            
                <div className="spacing">
                        <div className="box">
                            <div className="slide-img">
                                <img alt="1" src={src.src} />
                                <div className="overlay">
                                    <a href="#" className="buy-btn">Read More</a>	
                                </div>
                            </div>
                                <div className="detail-box">
                                    <div className="type">
                                    <a href="#">Rabbed Cardigan</a>
                                    <span className="event-details">The core intent is to help people find freedom through phenomenal music experience. Expect precise music policy, ear-shift sound system, and brain-mess visuals. The idea is to tastefully combine the ...</span>
                                </div>
                            </div>
                        </div>
                </div>
            ))}
        </Slider>
        
        </div>
        </>
      );
        
    }
}
