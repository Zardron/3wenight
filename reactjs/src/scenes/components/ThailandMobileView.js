import React, { Component } from 'react'
import '../../assets/components/EventCarousel.css'
import Slider from "react-slick";

class ThailandMobileView extends Component {

    constructor(props) {
        super(props);
        this.state = {
          events: [
            {src: 'https://www.youtube.com/embed/mm3HmwDIixI', title: 'Anyone visited her stall?', day: '7', date: '', time: '11:00PM - 3:00AM', place: 'Kuala Lumpur, Malaysia', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
            {src: 'https://www.youtube.com/embed/wcPCmO63ayU', title: 'Diva Disco', day: '13', date: '', time: '11:00PM - 3:00AM', place: 'Kuala Lumpur, Malaysia', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
            {src: 'https://www.youtube.com/embed/ePXMfVsOOPk', title: 'Ipanema Club', day: '16', date: '', time: '11:00PM - 3:00AM', place: 'Kuala Lumpur, Malaysia', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
            {src: 'https://www.youtube.com/embed/Qw-zXQ42_UI', title: '18c Degree Room for Partygoers', day: '18', date: '', time: '11:00PM - 3:00AM', place: 'Kuala Lumpur, Malaysia', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
            {src: 'https://www.youtube.com/embed/c_fhfHHvRwg', title: 'Le noir', day: '19', date: '', time: '11:00PM - 3:00AM', place: 'Kuala Lumpur, Malaysia', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
            {src: 'https://www.youtube.com/embed/BCkNfJxtcvQ', title: 'Altitude Lounge & Bar', day: '23', date: '', time: '11:00PM - 3:00AM', place: 'Kuala Lumpur, Malaysia', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
            {src: 'https://www.youtube.com/embed/BeRQQJRVhL0', title: '1-Altitude Gallery & Bar', day: '26', date: '', time: '11:00PM - 3:00AM', place: 'Kuala Lumpur, Malaysia', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
            {src: 'https://www.youtube.com/embed/ZfZZcfDFqTQ', title: 'Monti Italian Restaurant and Rooftop Bar', day: '27', date: '', time: '11:00PM - 3:00AM', place: 'Kuala Lumpur, Malaysia', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
            {src: 'https://www.youtube.com/embed/sWKhMGK2zrQ', title: 'Ipanema World Music Bar', day: '29', date: '', time: '11:00PM - 3:00AM', place: 'Kuala Lumpur, Malaysia', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
            {src: 'https://www.youtube.com/embed/VwtdLFRZvWw', title: '1 Altitude Bar', day: '29', date: '', time: '11:00PM - 3:00AM', place: 'Kuala Lumpur, Malaysia', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
            {src: 'https://www.youtube.com/embed/uOzZqMYpgRU', title: 'Bar Rouge', day: '29', date: '', time: '11:00PM - 3:00AM', place: 'Kuala Lumpur, Malaysia', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
            {src: 'https://www.youtube.com/embed/5QsOMXqQbLw', title: 'Baliza Marina Square', day: '29', date: '', time: '11:00PM - 3:00AM', place: 'Kuala Lumpur, Malaysia', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
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
                            <iframe width="100%" height="100%" src={details.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                {/* <div className="overlay">
                                    <a href="#" className="buy-btn">Read More</a>	
                                </div> */}
                            </div>
                                <div className="detail-box">
                                    <div className="type">
                                    {/* <div className="event-tag">
                                        <img src="./tag.png" className="tag-size"></img>
                                        <p className="tag-details">
                                            <span className="event-date"><span className="event-date-details">{details.day}</span></span>
                                            <span className="event-time"><i className="fal fa-clock fa-color"></i> <span className="time-details">{details.time}</span></span>
                                            <span className="event-place"><i className="fal fa-map-marker-alt fa-color"></i> <span className="time-details">&nbsp;{details.place}</span></span>
                                        </p>
                                    </div> */}
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

export default ThailandMobileView
