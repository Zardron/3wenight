import React, { Component } from 'react'
import '../../assets/components/Footer.css'

class Footer extends Component {
    render() {
        return (
            <>
            <div className="footer">
                <div className="container">
                    <div className="row padding">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                        </div>  

                        <div className="col-lg-6 col-md-8 col-sm-12 col-lg-offset-0 col-md-offset-2 col-sm-offset-0">
                        <span className="span1">Stay Connected With Us</span>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12">
                        </div>
                    </div>
                    <div className="row padding">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                        </div>  

                        <div className="col-lg-6 col-md-8 col-sm-12 col-lg-offset-0 col-md-offset-2 col-sm-offset-0">
                            <span className="span2"><a target="_blank" href="https://www.facebook.com/groups/sgafterdark/"><img src="fb.png" className="social-size"></img></a></span>
                            <span className="span2"><a target="_blank" href="https://t.me/sgafterdark"><img src="telegram.png" className="social-size"></img></a></span>
                            <span className="span2"><a target="_blank" href="https://www.youtube.com/channel/UCZAx4wAe3j7LX6_ys_iFTeA"><img src="youtube.png" className="social-size"></img></a></span>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12">
                        </div>
                    </div>
                    <div className="row padding">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                        </div>  

                        <div className="col-lg-6 col-md-8 col-sm-12 col-lg-offset-0 col-md-offset-2 col-sm-offset-0 alignment">
                            <span className="span1">© 2021 3WENIGHT All Rights Reserved</span>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12">
                        </div>
                    </div>
                </div>
                {/* <div className="footer-details">
                    
                    <span className="span2"><a href="#"><img src="fb.png" className="social-size"></img></a></span>
                    <span className="span2"><a href="#"><img src="telegram.png" className="social-size"></img></a></span>
                    <span className="span2"><a href="#"><img src="youtube.png" className="social-size"></img></a></span>
                    <span className="span1">© 2021 3WENIGHT All Rights Reserved</span>
                </div> */}
            </div>

            </>
        )
    }
}

export default Footer
