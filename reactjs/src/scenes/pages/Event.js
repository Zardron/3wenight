import React, { Component } from 'react'
import Navbar from '../Navbar'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import MusicPlayer from '../MusicPlayer'
import BannerCarousel from '../components/BannerCarousel'




class Event extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          detailss: '',
        };
      }

    componentWillMount() {
		console.log('this.props', this.props)
		if (this.props.location.state && this.props.location.state.slug) {
			const slug = this.props.location.state.slug;
            const apiUrl = 'http://localhost:8000/api/auth/get-event/'+slug;
            fetch(apiUrl)
            .then(res => res.json())
            .then(
                (result) => {
                this.setState({
                    detailss: result

                });
                },
                (error) => {
                this.setState({ error });
                }
            )
		}else{
            this.props.history.push("/404");
        }
	}

    render() {
        let details = this.state.detailss;
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
                    <div class="grid-item2">
                        <BannerCarousel />
                    </div>
                </div>

                <div className="events-container" style={{marginTop: "2%"}}>
                    <div className="box">
                        <img src={"/"+details.event_src} className="event-img-size"></img>                        
                            <div className="detail-box">
                                <div className="type">
                                    <div className="event-titles">
                                        <p style={{marginBottom: "0px"}}>{details.event_title}</p>
                                        <label style={{marginBottom: "0px !important", fontSize: "14px", paddingRight: "20px"}}><i className="fas fa-calendar-alt" style={{color: "#0fc"}}></i> {details.event_day}</label>
                                        <label style={{marginBottom: "0px !important", fontSize: "14px", paddingRight: "20px"}}><i className="far fa-clock" style={{color: "#0fc", fontSize: "14px"}}></i>{details.event_time}</label>
                                        <label style={{marginBottom: "0px !important", fontSize: "14px", paddingRight: "20px"}}><i className="fal fa-map-marker-alt" style={{color: "#0fc", fontSize: "14px"}}></i> {details.country} <i class={'flag flag-'+details.country_code}></i></label>
                                    </div>
                                    <span className="event-detailss">{details.event_details}</span>
                                </div>
                        </div>
                    </div>
                </div>          
            <Footer />
            </div>
            </>
          );
            
    }
}

export default Event