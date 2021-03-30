import React, { Component } from 'react'
import Navbar from '../Navbar'
import PageBanner from '../components/PageBanner';
import Footer from '../components/Footer'

class Thailand extends Component {
    render() {
        return (
            <>
                <div className="page-content">
                <Navbar />
                <img src="./country/thailand.png" className="img-size"></img>
                <marquee className="marquee-details"><br></br>Join us on our afterdark/nightlife telegram group for singapore <span className="marquee-color">(t.me/sgafterdark)</span>, china/hk <span className="marquee-color">(t.me/cnhkafterdark)</span>, thailand <span className="marquee-color">(t.me/thaiafterdark)</span>, malaysia <span className="marquee-color">(t.me/myafterdark)</span>, vietnam <span className="marquee-color">(t.me/vietafterdark)</span></marquee>
                
               
                <PageBanner />
                
                <Footer />
                </div>
            </>
        )
    }
}

export default Thailand
