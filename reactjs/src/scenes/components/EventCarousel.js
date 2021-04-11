import React, { Component } from 'react'
import '../../assets/components/EventCarousel.css'
import Slider from "react-slick";
import { Link } from "react-router-dom"


class EventCarousel extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
          error: null,
          details: [],
          country: ''
        };
      }

    componentWillMount() {
        fetch("http://localhost:8000/api/auth/event")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                details: result
              });
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
            {this.state.details.map(details => { 
              const {slug} = details 
              return (
            
                <div className="spacing">
                        <div className="box">
                            <div className="slide-img">
                                <img alt="1" src={details.event_src} />
                                <div className="overlay">
                                    <Link exact to={{ pathname: "/event/"+ slug, state: { slug } }} className="buy-btn">Read More </Link>
                                </div>
                            </div>
                                <div className="detail-box">
                                    <div className="type">
                                      
                                    {/* <div className="event-tag">
                                        <img src="./tag.png" className="tag-size"></img>
                                        <p className="tag-details">
                                            <span className="event-date"><span className="event-date-details">{details.event_day}</span></span>
                                            <span className="event-time"><i className="fal fa-clock fa-color"></i> <span className="time-details">{details.event_time}</span></span>
                                            <span className="event-place"><i className="fal fa-map-marker-alt fa-color"></i> <span className="time-details">&nbsp;{details.event_place}</span></span>
                                        </p>
                                    </div> */}
                                    <div className="event-titles">
                                        <Link exact to={{ pathname: "/event/"+ slug, state: { slug } }}>{details.event_title}</Link>
                                        <br></br>
                                        {/* <label style={{marginBottom: "0px !important", fontSize: "14px", paddingRight: "20px"}}><i className="fas fa-calendar-alt" style={{color: "#0fc"}}></i> {details.event_day}</label> */}
                                        <label style={{marginBottom: "0px !important", fontSize: "14px", paddingRight: "20px"}}><i className="far fa-clock" style={{color: "#0fc", fontSize: "14px"}}></i>{details.event_time}</label>
                                        <label style={{marginBottom: "0px !important", fontSize: "14px", paddingRight: "20px"}}><i className="fal fa-map-marker-alt" style={{color: "#0fc", fontSize: "14px"}}></i> {details.country} <i class={'flag flag-'+details.country_code}></i></label>
                                    </div>
                                    <span className="event-details">{details.event_details}</span>

                                    <div className="row desktop-view-event">
                                      <div className="col-6">
                                        <Link className="read-more" exact to={{ pathname: "/event/"+ slug, state: { slug } }}><i class="fas fa-long-arrow-right aw"></i> Read More</Link>
                                      </div>

                                      <div className="col-6">
                                        <Link className="read-more" exact to={{ pathname: "/event/"+ slug, state: { slug } }}><i class="fas fa-long-arrow-right aw"></i> Comment</Link>
                                      </div>
                                    </div>

                                    <div className="mobile-view-event">
                                        <Link className="read-more" exact to={{ pathname: "/event/"+ slug, state: { slug } }}><i class="fas fa-long-arrow-right aw"></i> Press for More</Link>

                                        <Link className="read-more" exact to={{ pathname: "/event/"+ slug, state: { slug } }}><i class="fas fa-long-arrow-right aw"></i> Comment</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>


            )})}
        </Slider>
        
        </div>
        </>
      );
        
    }
}

export default EventCarousel