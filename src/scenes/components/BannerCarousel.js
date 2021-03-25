import React from 'react'
import "react-multi-carousel/lib/styles.css";
import Carousels from "./BannerCarouselController"
import '../../assets/components/BannerCarousel.css'



function BannerCarousel() {
    return (
        <>
        <div style={{  marginLeft: 'auto', marginRight: 'auto' }}>
            <Carousels
                show={5}
            >
                <div>
                    <div className="banner-div">
                        <img src="./banner/1.gif" alt="placeholder" className="banner-sizes" />
                    </div>
                </div>
                <div>
                    <div className="banner-div">
                        <img src="./banner/2.gif" alt="placeholder" className="banner-sizes" />
                    </div>
                </div>
                <div>
                    <div className="banner-div">
                        <img src="./banner/6.gif" alt="placeholder" className="banner-sizes" />
                    </div>
                </div>
                <div>
                    <div className="banner-div">
                        <img src="./banner/4.gif" alt="placeholder" className="banner-sizes" />
                    </div>
                </div>
                <div>
                    <div className="banner-div">
                        <img src="./banner/5.gif" alt="placeholder" className="banner-sizes" />
                    </div>
                </div>
                <div>
                    <div className="banner-div">
                        <img src="./banner/7.gif" alt="placeholder" className="banner-sizes" />
                    </div>
                </div>
                <div>
                    <div className="banner-div">
                        <img src="./banner/3.jpg" alt="placeholder" className="banner-sizes" />
                    </div>
                </div>
            </Carousels>

        </div>
        </>
    )
}

export default BannerCarousel
