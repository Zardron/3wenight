import React, { Component } from 'react'
import '../../assets/pages/ErrorPage.css'
import { Link } from 'react-router-dom'

export default class ErrorPage extends Component {
    render() {
        return (
            <>
            <div class="page-wrap d-flex flex-row align-items-center">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-12 text-center">
                        <div class="glitch" data-text="404">
                            <span class="glitch__color glitch__color--red">404</span>
                            <span class="glitch__color glitch__color--blue">404</span>
                            <span class="glitch__color glitch__color--green">404</span>
                            <span class="glitch__main">404</span>
                            <span class="glitch__line glitch__line--first"></span>
                            <span class="glitch__line glitch__line--second"></span>
                        </div>

                        <div class="glitch" data-text="PAGE NOT FOUND">
                            <span class="glitch__color glitch__color--red">PAGE NOT FOUND</span>
                            <span class="glitch__color glitch__color--blue">PAGE NOT FOUND</span>
                            <span class="glitch__color glitch__color--green">PAGE NOT FOUND</span>
                            <span class="glitch__main">PAGE NOT FOUND</span>
                            <span class="glitch__line glitch__line--first"></span>
                            <span class="glitch__line glitch__line--second"></span>
                            
                        </div>
                        
                        </div>

                        <div class="stars">
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                        <div class="stars__star"></div>
                    </div>
                    </div>
                    <br></br>
                    <Link to="/" className="btn btn-link" style={{cursor: "pointer", position: "absolute", left: "0", right: "0", textDecoration: "none"}}><i class="fas fa-arrow-left"></i> Back to Home</Link>
                </div>
            </div>
            </>
        )
    }
}
