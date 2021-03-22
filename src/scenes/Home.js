import React, { Component } from 'react'
import Navbar from './Navbar'
import '../assets/components/Home.css'

class Home extends Component {
    
    render() { 
        return (  
            <>
            <div>
            <Navbar />
            <img src="3wenight_bg.png" className="bg-size"></img>
            {/* <p className="welcome"><span className="text">WELCOME TO 3WE NIGHT</span></p>
            <p className="welcome2"><span className="text2">We try to provide best entertainment leisure for everyone and introducing the best night life activities for public in those related countries</span></p>
            <p className="welcome3"><span className="text2">Browse through some of the best nightlife activities on our website and find your dream clubbing places</span></p> */}
            </div>
            </>
        );
    }
}
 
export default Home;