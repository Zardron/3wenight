import React, { Component } from 'react'
import Navbar from '../Navbar'
import PageBanner from '../components/PageBanner';
import Footer from '../components/Footer'
import '../../assets/pages/CountryPages.css';
import { Grid, Paper } from '@material-ui/core';
import ChinaMobileView from '../components/ChinaMobileView'

class China extends Component {

    constructor(props) {
        super(props);
        this.state = {
          events: [
            {src: 'https://www.youtube.com/embed/mm3HmwDIixI', title: 'Anyone visited her stall?', day: '7', date: '', time: '11:00PM - 3:00AM', place: 'Kuala Lumpur, Malaysia', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
            {src: 'https://www.youtube.com/embed/QL9i4T4rQ0A', title: 'Mint Club', day: '13', date: '', time: '11:00PM - 3:00AM', place: 'Kuala Lumpur, Malaysia', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
            {src: 'https://www.youtube.com/embed/zSOlZG6Q8cI', title: "Sir Elley's Rooftop Bar", day: '16', date: '', time: '11:00PM - 3:00AM', place: 'Kuala Lumpur, Malaysia', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
            {src: 'https://www.youtube.com/embed/lBllDJXbmIw', title: 'Muse Club Fun Night', day: '18', date: '', time: '11:00PM - 3:00AM', place: 'Kuala Lumpur, Malaysia', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
            {src: 'https://www.youtube.com/embed/I3ltUEDiz1A', title: 'Muse Club', day: '19', date: '', time: '11:00PM - 3:00AM', place: 'Kuala Lumpur, Malaysia', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
            {src: 'https://www.youtube.com/embed/Tu3a-HswxWE', title: 'China Dance Sexy Girl', day: '23', date: '', time: '11:00PM - 3:00AM', place: 'Kuala Lumpur, Malaysia', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
            {src: 'https://www.youtube.com/embed/cNE1WS2oLBA', title: 'Shenzhen Louhu Arena Club', day: '26', date: '', time: '11:00PM - 3:00AM', place: 'Kuala Lumpur, Malaysia', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
          ]
        };
    }
    
      
    render() {

        return (
            <>
            
                <div className="page-content">
                <Navbar />
                <img src="./country/chinahk.png" className="img-size"></img>
                <img src="./country/chinahk.gif" className="img-size-position"></img>
                <marquee className="marquee-details"><br></br>Join us on our afterdark/nightlife telegram groKuala Lumpur, Malaysia <span className="marquee-color">(t.me/sgafterdark)</span>, china/hk <span className="marquee-color">(t.me/cnhkafterdark)</span>, thailand <span className="marquee-color">(t.me/thaiafterdark)</span>, malaysia <span className="marquee-color">(t.me/myafterdark)</span>, vietnam <span className="marquee-color">(t.me/vietafterdark)</span></marquee>
                
                <div className="desktopViews">
                    <PageBanner />
                </div>

                <div className="country-page-container">
                    <div className="desktopView">
                    <center>
                    <p className="event-title">EVENTS FOR THE MONTH OF APRIL</p>
                    </center>
                    <Grid container spacing={1}>
                        <Grid container item xs={12} spacing={3}>
                            {this.state.events.map(details => (
                            <Grid item xs={4}>
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
                            </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    </div>
                </div>
                

                <div className="EventMobileView">
                    <ChinaMobileView />
                </div>
                
                <Footer />
                </div>
            </>
        )
    }
}

export default China
