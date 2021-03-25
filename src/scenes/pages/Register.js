import React, { Component } from 'react'
import Navbar from '../Navbar'
import Footer from '../components/Footer'
import '../../assets/components/Pages.css'
import MusicPlayer from '../MusicPlayer';
import BannerCarousel from '../components/BannerCarousel';

export default class Register extends Component {
    render() {
        return (
            <>
            <div className="page-content">
                <Navbar />
                <img src="Untitled.png" alt="3webg" style={{width: '100%'}}></img>

                <marquee className="marquee-details"><br></br>Join us on our afterdark/nightlife telegram group for singapore <span className="marquee-color">(t.me/sgafterdark)</span>, china/hk <span className="marquee-color">(t.me/cnhkafterdark)</span>, thailand <span className="marquee-color">(t.me/thaiafterdark)</span>, malaysia <span className="marquee-color">(t.me/myafterdark)</span>, vietnam <span className="marquee-color">(t.me/vietafterdark)</span></marquee>
                <div className="grid-container">
                    <div class="grid-item">
                        <MusicPlayer />
                    </div>
                    <div class="grid-item2">
                        <BannerCarousel />
                    </div>
                </div>

                <Footer />
            </div>
            </>
        )
    }
}
