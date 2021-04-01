import React, { Component } from 'react'
import Navbar from '../Navbar'
import PageBanner from '../components/PageBanner';
import Footer from '../components/Footer'
import '../../assets/pages/CountryPages.css';
import { Grid, Paper } from '@material-ui/core';
import VietnamMobileView from '../components/VietnamMobileView'

class Vietnam extends Component {

    constructor(props) {
        super(props);
        this.state = {
          events: [
            {src: './event/1.png', title: 'MANHATTAN', day: '7', date: '', time: '11:00PM - 3:00AM', place: 'Hanoi, Vietnam', details: 'Beer Belly is a funky beer bar in Thonglor, located at 72 Courtyard. The bar boasts an extensive beer collection with beers from all over the world. Their 20 taps serve everything from common brands...'},
            {src: './event/2.png', title: 'ATLAS', day: '13', date: '', time: '11:00PM - 3:00AM', place: 'Hanoi, Vietnam', details: 'Beer Belly is a funky beer bar in Thonglor, located at 72 Courtyard. The bar boasts an extensive beer collection with beers from all over the world. Their 20 taps serve everything from common brands...'},
            {src: './event/3.png', title: 'ASTOR BAR', day: '16', date: '', time: '11:00PM - 3:00AM', place: 'Hanoi, Vietnam', details: 'Beer Belly is a funky beer bar in Thonglor, located at 72 Courtyard. The bar boasts an extensive beer collection with beers from all over the world. Their 20 taps serve everything from common brands...'},
            {src: './event/4.png', title: 'MANHATTAN', day: '18', date: '', time: '11:00PM - 3:00AM', place: 'Hanoi, Vietnam', details: 'Beer Belly is a funky beer bar in Thonglor, located at 72 Courtyard. The bar boasts an extensive beer collection with beers from all over the world. Their 20 taps serve everything from common brands...'},
            {src: './event/5.png', title: 'ATLAS', day: '19', date: '', time: '11:00PM - 3:00AM', place: 'Hanoi, Vietnam', details: 'Beer Belly is a funky beer bar in Thonglor, located at 72 Courtyard. The bar boasts an extensive beer collection with beers from all over the world. Their 20 taps serve everything from common brands...'},
            {src: './event/6.png', title: 'ASTOR BAR', day: '23', date: '', time: '11:00PM - 3:00AM', place: 'Hanoi, Vietnam', details: 'Beer Belly is a funky beer bar in Thonglor, located at 72 Courtyard. The bar boasts an extensive beer collection with beers from all over the world. Their 20 taps serve everything from common brands...'},
            {src: './event/7.png', title: 'MANHATTAN', day: '26', date: '', time: '11:00PM - 3:00AM', place: 'Hanoi, Vietnam', details: 'Beer Belly is a funky beer bar in Thonglor, located at 72 Courtyard. The bar boasts an extensive beer collection with beers from all over the world. Their 20 taps serve everything from common brands...'},
            {src: './event/8.png', title: 'ATLAS', day: '27', date: '', time: '11:00PM - 3:00AM', place: 'Hanoi, Vietnam', details: 'Beer Belly is a funky beer bar in Thonglor, located at 72 Courtyard. The bar boasts an extensive beer collection with beers from all over the world. Their 20 taps serve everything from common brands...'},
            {src: './event/9.png', title: 'ASTOR BAR', day: '29', date: '', time: '11:00PM - 3:00AM', place: 'Hanoi, Vietnam', details: 'Beer Belly is a funky beer bar in Thonglor, located at 72 Courtyard. The bar boasts an extensive beer collection with beers from all over the world. Their 20 taps serve everything from common brands...'},
          ]
        };
    }
    
      
    render() {

        return (
            <>
            
                <div className="page-content">
                <Navbar />
                <img src="./country/vietnam.png" className="img-size"></img>
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
                            </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    </div>
                </div>
                

                <div className="EventMobileView">
                    <VietnamMobileView />
                </div>
                
                <Footer />
                </div>
            </>
        )
    }
}

export default Vietnam
