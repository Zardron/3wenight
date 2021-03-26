import React, { Component } from 'react'
import '../../assets/components/EventCarousel.css'
import Slider from "react-slick";

export default class EventCarousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
          events: [
            {src: './event/1.png', title: 'BANGKOK BEAM', day: '23', date: '', time: '11:00PM - 3:00AM', place: 'Kovan, Singapore', details: 'Beer Belly is a funky beer bar in Thonglor, located at 72 Courtyard. The bar boasts an extensive beer collection with beers from all over the world. Their 20 taps serve everything from common brands...'},
            {src: './event/2.png', title: 'BANGKOK OCTAVE ROOFTOP LOUNGE & BAR', day: '17', date: '', time: '09:00PM - 12:00AM', place: 'Kuala Lumpur, Malaysia', details: 'The core intent is to help people find freedom through phenomenal music experience. Expect precise music policy, ear-shift sound system, and brain-mess visuals. The idea is to tastefully combine the ...'},
            {src: './event/3.png', title: 'BANGKOK-BEER BELLY', day: '16', date: '', time: '08:00PM - 11:00PM', place: 'Beijing, China', details: 'With plenty of seating on each level and unobstructed views of Bangkok’s skyline, Octave Rooftop Lounge and Bar is one of the best rooftop bars in Sukhumvit, if not the whole city. There are three ...'},
            {src: './event/4.png', title: 'BANGKOK BEAM', day: '11', date: '', time: '08:00PM - 11:00PM', place: 'Hanoi, Vietnam', details: 'Beer Belly is a funky beer bar in Thonglor, located at 72 Courtyard. The bar boasts an extensive beer collection with beers from all over the world. Their 20 taps serve everything from common brands...'},
            {src: './event/5.png', title: 'BANGKOK OCTAVE ROOFTOP LOUNGE & BAR', day: '07', date: '', time: '11:00PM - 3:00AM', place: 'Bangkok, Thailand', details: 'The core intent is to help people find freedom through phenomenal music experience. Expect precise music policy, ear-shift sound system, and brain-mess visuals. The idea is to tastefully combine the ...'},
            {src: './event/6.png', title: 'BANGKOK-BEER BELLY', day: '28', date: '', time: '07:00PM - 10:00PM', place: 'Kovan, Singapore', details: 'With plenty of seating on each level and unobstructed views of Bangkok’s skyline, Octave Rooftop Lounge and Bar is one of the best rooftop bars in Sukhumvit, if not the whole city. There are three ...'},
            {src: './event/7.png', title: 'BANGKOK BEAM', day: '13', date: '', time: '09:00PM - 12:00AM', place: 'Kuala Lumpur, Malaysia', details: 'Beer Belly is a funky beer bar in Thonglor, located at 72 Courtyard. The bar boasts an extensive beer collection with beers from all over the world. Their 20 taps serve everything from common brands...'},
            {src: './event/8.png', title: 'BANGKOK OCTAVE ROOFTOP LOUNGE & BAR', day: '21', date: '', time: '11:00PM - 3:00AM', place: 'Beijing, China', details: 'The core intent is to help people find freedom through phenomenal music experience. Expect precise music policy, ear-shift sound system, and brain-mess visuals. The idea is to tastefully combine the ...'},
            {src: './event/9.png', title: 'BANGKOK-BEER BELLY', day: '22', date: '', time: '10:00PM - 3:00AM', place: 'Hanoi, Vietnam', details: 'With plenty of seating on each level and unobstructed views of Bangkok’s skyline, Octave Rooftop Lounge and Bar is one of the best rooftop bars in Sukhumvit, if not the whole city. There are three ...'},
            {src: './event/10.png', title: 'BANGKOK BEAM', day: '03', date: '', time: '09:00PM - 12:00AM', place: 'Bangkok, Thailand', details: 'Beer Belly is a funky beer bar in Thonglor, located at 72 Courtyard. The bar boasts an extensive beer collection with beers from all over the world. Their 20 taps serve everything from common brands...'},
            {src: './event/11.png', title: 'BANGKOK OCTAVE ROOFTOP LOUNGE & BAR', day: '29', date: '', time: '07:00PM - 10:00PM', place: 'Kovan, Singapore', details: 'The core intent is to help people find freedom through phenomenal music experience. Expect precise music policy, ear-shift sound system, and brain-mess visuals. The idea is to tastefully combine the ...'},
            {src: './event/12.png', title: 'BANGKOK-BEER BELLY', day: '16', date: '', time: '07:00PM - 10:00PM', place: 'Kuala Lumpur, Malaysia', details: 'With plenty of seating on each level and unobstructed views of Bangkok’s skyline, Octave Rooftop Lounge and Bar is one of the best rooftop bars in Sukhumvit, if not the whole city. There are three ...'},
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
