import React, { Component } from 'react'
import '../../assets/components/EventCarousel.css'
import Slider from "react-slick";

class ChinaMobileView extends Component {

    constructor(props) {
        super(props);
        this.state = {
          events: [
            {src: './event/1.png', title: 'MANHATTAN', day: '7', date: '', time: '11:00PM - 3:00AM', place: 'Beijing, China', details: 'Beer Belly is a funky beer bar in Thonglor, located at 72 Courtyard. The bar boasts an extensive beer collection with beers from all over the world. Their 20 taps serve everything from common brands...'},
            {src: './event/2.png', title: 'ATLAS', day: '13', date: '', time: '11:00PM - 3:00AM', place: 'Beijing, China', details: 'Beer Belly is a funky beer bar in Thonglor, located at 72 Courtyard. The bar boasts an extensive beer collection with beers from all over the world. Their 20 taps serve everything from common brands...'},
            {src: './event/3.png', title: 'ASTOR BAR', day: '16', date: '', time: '11:00PM - 3:00AM', place: 'Beijing, China', details: 'Beer Belly is a funky beer bar in Thonglor, located at 72 Courtyard. The bar boasts an extensive beer collection with beers from all over the world. Their 20 taps serve everything from common brands...'},
            {src: './event/4.png', title: 'MANHATTAN', day: '18', date: '', time: '11:00PM - 3:00AM', place: 'Beijing, China', details: 'Beer Belly is a funky beer bar in Thonglor, located at 72 Courtyard. The bar boasts an extensive beer collection with beers from all over the world. Their 20 taps serve everything from common brands...'},
            {src: './event/5.png', title: 'ATLAS', day: '19', date: '', time: '11:00PM - 3:00AM', place: 'Beijing, China', details: 'Beer Belly is a funky beer bar in Thonglor, located at 72 Courtyard. The bar boasts an extensive beer collection with beers from all over the world. Their 20 taps serve everything from common brands...'},
            {src: './event/6.png', title: 'ASTOR BAR', day: '23', date: '', time: '11:00PM - 3:00AM', place: 'Beijing, China', details: 'Beer Belly is a funky beer bar in Thonglor, located at 72 Courtyard. The bar boasts an extensive beer collection with beers from all over the world. Their 20 taps serve everything from common brands...'},
            {src: './event/7.png', title: 'MANHATTAN', day: '26', date: '', time: '11:00PM - 3:00AM', place: 'Beijing, China', details: 'Beer Belly is a funky beer bar in Thonglor, located at 72 Courtyard. The bar boasts an extensive beer collection with beers from all over the world. Their 20 taps serve everything from common brands...'},
            {src: './event/8.png', title: 'ATLAS', day: '27', date: '', time: '11:00PM - 3:00AM', place: 'Beijing, China', details: 'Beer Belly is a funky beer bar in Thonglor, located at 72 Courtyard. The bar boasts an extensive beer collection with beers from all over the world. Their 20 taps serve everything from common brands...'},
            {src: './event/9.png', title: 'ASTOR BAR', day: '29', date: '', time: '11:00PM - 3:00AM', place: 'Beijing, China', details: 'Beer Belly is a funky beer bar in Thonglor, located at 72 Courtyard. The bar boasts an extensive beer collection with beers from all over the world. Their 20 taps serve everything from common brands...'},
          ],

          banner: [
            {src: './banner/1.gif'},
            {src: './banner/2.gif'},
            {src: './banner/3.jpg'},
            {src: './banner/4.gif'},
            {src: './banner/5.gif'},
            {src: './banner/6.gif'},
            {src: './banner/7.gif'},
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
            breakpoint: 1250,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
            },
            {
            breakpoint: 700,
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
            {this.state.banner.map(banner => (
                <div>
                    <img src={banner.src}  style={{width: '80%', marginLeft: '30px', marginRight: '30px'}}></img>
                </div>
            ))}
        </Slider>
        
        </div>

        <div className="event-container-carousel">
        <p className="event-title">EVENTS FOR THE MONTH OF APRIL</p>
        <Slider {...settings} arrows={false}>
            {this.state.events.map(details => (
            
                <div className="spacing">
                        <div className="box">
                            <div className="slide-img">
                                <img alt="1" src={details.src} />
                                <div className="overlay">
                                    <a href="#" className="buy-btn">Read More</a>	
                                </div>
                            </div>
                                <div className="detail-box">
                                    <div className="type">
                                    <div className="event-tag">
                                        <img src="./tag.png" className="tag-size"></img>
                                        <p className="tag-details">
                                            <span className="event-date"><span className="event-date-details">{details.day}</span></span>
                                            <span className="event-time"><i className="fal fa-clock fa-color"></i> <span className="time-details">{details.time}</span></span>
                                            <span className="event-place"><i className="fal fa-map-marker-alt fa-color"></i> <span className="time-details">&nbsp;{details.place}</span></span>
                                        </p>
                                    </div>
                                    <a href="#" >{details.title}</a>
                                    <span className="event-details">{details.details}</span>
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

export default ChinaMobileView
