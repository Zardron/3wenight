import React, { Component } from 'react'
import Navbar from './Navbar'
import '../assets/components/Home.css'
import Carousel from '../../src/scenes/components/Carousel'
import MusicPlayer from './MusicPlayer';
import BannerCarousel from '../../src/scenes/components/BannerCarousel'
import EventCarousel from '../../src/scenes/components/EventCarousel'
import Footer from '../../src/scenes/components/Footer'
import { NavLink  } from 'react-router-dom'


class Home extends Component {
    render() { 
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
                        <NavLink activeClassName="navbar_link--active" to={{ pathname: "/country/singapore", state: { country: 'Singapore' } }} className="linkss linkss--elara">SINGAPORE <img src="/singapore.png" style={{height: "30px", paddingBottom: "4px"}} /></NavLink> 
                        <span className="menu-spacing">|</span> 
                        <NavLink activeClassName="navbar_link--active" to={{ pathname: "/country/malaysia", state: { country: 'Malaysia' } }} className="linkss linkss--elara">MALAYSIA <img src="/malaysia.png" style={{height: "30px", paddingBottom: "4px"}} /></NavLink> 
                        <span className="menu-spacing">|</span> 
                        <NavLink activeClassName="navbar_link--active" to={{ pathname: "/country/china", state: { country: 'China' } }} className="linkss linkss--elara">CHINA <img src="/china.png" style={{height: "30px", paddingBottom: "4px"}} /></NavLink> 
                        <span className="menu-spacing">|</span> 
                        <NavLink activeClassName="navbar_link--active" to={{ pathname: "/country/vietnam", state: { country: 'Vietnam' } }} className="linkss linkss--elara">VIETNAM <img src="/vietnam.png" style={{height: "30px", paddingBottom: "4px"}} /></NavLink> 
                        <span className="menu-spacing">|</span> 
                        <NavLink activeClassName="navbar_link--active" to={{ pathname: "/country/thailand", state: { country: 'Thailand' } }} className="linkss linkss--elara">THAILAND <img src="/thailand.png" style={{height: "30px", paddingBottom: "4px"}} /></NavLink>
                        </div> 
                </div>
                <EventCarousel />

                <Footer />
            </div>
            
            </>
        );
    }
}
 
export default Home;