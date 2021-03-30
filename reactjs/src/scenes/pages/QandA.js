import React, { Component } from 'react'
import Navbar from '../Navbar'
import Carousel from '../../scenes/components/Carousel'
import PageBanner from '../../scenes/components/PageBanner';
import Footer from '../components/Footer'


class QandA extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Carousel />
                <div className="content">
                    <marquee className="marquee-details"><br></br>Join us on our afterdark/nightlife telegram group for singapore <span className="marquee-color">(t.me/sgafterdark)</span>, china/hk <span className="marquee-color">(t.me/cnhkafterdark)</span>, thailand <span className="marquee-color">(t.me/thaiafterdark)</span>, malaysia <span className="marquee-color">(t.me/myafterdark)</span>, vietnam <span className="marquee-color">(t.me/vietafterdark)</span></marquee>

                    <PageBanner />
                    
                    <Footer />
                </div>
            </>
        )
    }
}

export default QandA
