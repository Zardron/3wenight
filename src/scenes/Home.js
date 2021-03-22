import React, { Component } from 'react'
import Navbar from './Navbar'
import '../assets/components/Home.css'
import Carousel from '../../src/scenes/components/Carousel'
import MusicPlayer from './MusicPlayer';


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
                </div>
            </div>
            
            </>
        );
    }
}
 
export default Home;