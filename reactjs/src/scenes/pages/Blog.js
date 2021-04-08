import React, { Component } from 'react'
import Navbar from '../Navbar'
import Carousel from '../../scenes/components/Carousel'
import BannerCarousel from '../../scenes/components/BannerCarousel';
import Footer from '../components/Footer'
import Slider from "react-slick";


class Blog extends Component {

    constructor(props) {
        super(props);
        this.state = {
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
                <Navbar />
                <Carousel />
                <div className="content">
                    <marquee className="marquee-details"><br></br>Join us on our afterdark/nightlife telegram group for singapore <span className="marquee-color">(t.me/sgafterdark)</span>, china/hk <span className="marquee-color">(t.me/cnhkafterdark)</span>, thailand <span className="marquee-color">(t.me/thaiafterdark)</span>, malaysia <span className="marquee-color">(t.me/myafterdark)</span>, vietnam <span className="marquee-color">(t.me/vietafterdark)</span></marquee>

                    <div className="eventDesktopView">
                        <BannerCarousel />
                    </div>

                    <div className="mobileView">
                    <Slider {...settings} arrows={false}>
                        {this.state.banner.map(banner => (
                            <div>
                                <img src={banner.src}  style={{width: '80%', marginLeft: '30px', marginRight: '30px'}}></img>
                            </div>
                        ))}
                    </Slider>
                    
                    </div>
                    
                    <Footer />
                </div>
            </>
        )
    }
}

export default Blog
