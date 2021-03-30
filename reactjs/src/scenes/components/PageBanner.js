import React, { Component } from 'react'
import '../../assets/components/PageBanner.css'

class PageBanner extends Component {
    render() {
        return (
            <>
            <div className="page-grid-container">
                <div class="PageBanner">
                    <img src="banner/1.gif" className="BannerSize"/>
                    <img src="banner/2.gif" className="BannerSize"/>
                    <img src="banner/3.jpg" className="BannerSize"/>
                    <img src="banner/4.gif" className="BannerSize"/>
                    <img src="banner/5.gif" className="BannerSize"/>
                    <img src="banner/6.gif" className="BannerSize"/>
                    <img src="banner/7.gif" className="BannerSize"/>
                </div>
            </div>
            </>
        )
    }
}

export default PageBanner
