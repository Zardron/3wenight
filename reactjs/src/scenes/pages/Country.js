import React, { Component } from 'react'
import Navbar from '../Navbar'
import Carousel from '../components/Carousel'
import MusicPlayer from '../MusicPlayer';
import BannerCarousel from '../components/BannerCarousel'
import EventCarousel from '../components/EventCarousel'
import Footer from '../components/Footer'
import { NavLink  } from 'react-router-dom'
import '../../assets/components/EventCarousel.css'
import Slider from "react-slick";
import { Link } from "react-router-dom"


class Country extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
          error: null,
          detailss: [],
          country: "",
        };
      }

    componentDidMount() {
        const apiUrl = 'http://localhost:8000/api/auth/get-country-event/'+this.props.location.state.country;
            fetch(apiUrl)
            .then(res => res.json())
            .then(
                (result) => {
                this.setState({
                    detailss: result
                });
                },
                (error) => {
                this.setState({ error });
                }
            )
    }

      componentWillReceiveProps(nextProps) {
        console.log('this.props', nextProps)
		if (this.props.location.state !== nextProps.location.state.country) {
			const country = nextProps.location.state.country;
            console.log(nextProps.location.state.country);
            const apiUrl = 'http://localhost:8000/api/auth/get-country-event/'+country;
            console.log(apiUrl);
            fetch(apiUrl)
            .then(res => res.json())
            .then(
                (result) => {
                this.setState({
                    detailss: result
                });
                },
                (error) => {
                this.setState({ error });
                }
            )
		}
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
        return (  
            
            <>
            <Navbar />
            <Carousel />
            <div className="content">
                <marquee className="marquee-details"><br></br>Join us on our afterdark/nightlife telegram group for singapore <span className="marquee-color">(t.me/sgafterdark)</span>, china/hk <span className="marquee-color">(t.me/cnhkafterdark)</span>, thailand <span className="marquee-color">(t.me/thaiafterdark)</span>, malaysia <span className="marquee-color">(t.me/myafterdark)</span>, vietnam <span className="marquee-color">(t.me/vietafterdark)</span></marquee>
                <div className="grid-container">
                    <div class="grid-item">
                        <MusicPlayer />
                    </div>
                    <div class="grid-item2">
                        <BannerCarousel />
                    </div>
                </div>

                <div className="event-container">
                    <p className="event-title">EVENT OF THE MONTH</p>

                    <div className="country-title">
                        <NavLink activeClassName="navbar_link--active"  to={{ pathname: "/country/singapore", state: { country: 'Singapore' } }} className="linkss linkss--elara">SINGAPORE <img src="/singapore.png" style={{height: "30px", paddingBottom: "4px"}} /></NavLink> 
                        <span className="menu-spacing">|</span> 
                        <NavLink activeClassName="navbar_link--active"  to={{ pathname: "/country/malaysia", state: { country: 'Malaysia' } }} className="linkss linkss--elara">MALAYSIA <img src="/malaysia.png" style={{height: "30px", paddingBottom: "4px"}} /></NavLink> 
                        <span className="menu-spacing">|</span> 
                        <NavLink activeClassName="navbar_link--active"  to={{ pathname: "/country/china", state: { country: 'China' } }} className="linkss linkss--elara">CHINA <img src="/china.png" style={{height: "30px", paddingBottom: "4px"}} /></NavLink> 
                        <span className="menu-spacing">|</span> 
                        <NavLink activeClassName="navbar_link--active"  to={{ pathname: "/country/vietnam", state: { country: 'Vietnam' } }} className="linkss linkss--elara">VIETNAM <img src="/vietnam.png" style={{height: "30px", paddingBottom: "4px"}} /></NavLink> 
                        <span className="menu-spacing">|</span> 
                        <NavLink activeClassName="navbar_link--active"  to={{ pathname: "/country/thailand", state: { country: 'Thailand' } }} className="linkss linkss--elara">THAILAND <img src="/thailand.png" style={{height: "30px", paddingBottom: "4px"}} /></NavLink>
                        </div> 
                </div>
                <div className="event-container-carousel">
            <Slider {...settings} arrows={true}>
            {this.state.detailss.map(details => { 
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
                                        <Link className="read-more" exact to={{ pathname: "/event/"+ slug, state: { slug } }}><i class="fas fa-long-arrow-right aw"></i> 0 Comment</Link>
                                      </div>
                                    </div>

                                    <div className="mobile-view-event">
                                        <Link className="read-more" exact to={{ pathname: "/event/"+ slug, state: { slug } }}><i class="fas fa-long-arrow-right aw"></i> Press for More</Link>

                                        <Link className="read-more" exact to={{ pathname: "/event/"+ slug, state: { slug } }}><i class="fas fa-long-arrow-right aw"></i> 0 Comment</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>


                )})}
                </Slider>
        
        </div>

                <Footer />
            </div>
            
            </>
        );
    }
}
 
export default Country;