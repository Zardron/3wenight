import React, { Component } from 'react'
import '../../assets/components/EventCarousel.css'
import Slider from "react-slick";

class EventCarousel extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
          error: null,
          details: []
          
        };
      }

    componentWillMount() {
        const apiUrl = 'http://localhost:8000/api/auth/event';
        fetch(apiUrl)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                details: result
              });

              console.log(this.state.result);
            },
            (error) => {
              this.setState({ error });
            }
          )
      }

    render() {
        const settings = {
            infinite: true,
            slidesToShow: 3,
            dots: true,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 4000,
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

    const { error, details} = this.state;

      return ( 

        <>
        <div className="event-container-carousel">
        <Slider {...settings} arrows={true}>
            {this.state.details.map(details => (
            
                <div className="spacing">
                        <div className="box">
                            <div className="slide-img">
                                <img alt="1" src={details.event_src} />
                                <div className="overlay">
                                    <a href="#" className="buy-btn">Read More</a>	
                                </div>
                            </div>
                                <div className="detail-box">
                                    <div className="type">
                                    <div className="event-tag">
                                        <img src="./tag.png" className="tag-size"></img>
                                        <p className="tag-details">
                                            <span className="event-date"><span className="event-date-details">{details.event_day}</span></span>
                                            <span className="event-time"><i className="fal fa-clock fa-color"></i> <span className="time-details">{details.event_time}</span></span>
                                            <span className="event-place"><i className="fal fa-map-marker-alt fa-color"></i> <span className="time-details">&nbsp;{details.event_place}</span></span>
                                        </p>
                                    </div>
                                    <a href="" className="event-titles" id={details.event_title}>{details.event_title}</a>
                                    <span className="event-details">{details.event_details}</span>
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

export default EventCarousel