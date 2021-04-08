import React, { Component } from 'react'
import Navbar from '../Navbar'
import BannerCarousel from '../components/BannerCarousel';
import Footer from '../components/Footer'
import '../../assets/pages/CountryPages.css';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom'
import VietnamMobileView from '../components/VietnamMobileView'

class Vietnam extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: "",
            events: [],
            filter_event: "",
            allActive: true,
        };
    }

    componentWillMount() {
        const apiUrl = 'http://localhost:8000/api/auth/get-country-event/Vietnam';
        fetch(apiUrl)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                events: result
              });
            },
            (error) => {
              this.setState({ error });
            }
        )
    }

    filterEvents = (e) => {
        e.preventDefault();
        this.setState({filter_event: e.target.id});
        const filter_event = e.target.id;
        let country = "Vietnam";
        const apiUrl = 'http://localhost:8000/api/auth/filter-country-event/'+filter_event+"/"+country;
        fetch(apiUrl)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                events: result
              });
            },
            (error) => {
              this.setState({ error });
            }
        )
        if(filter_event === "Bar"){
            this.setState({barActive: true,allActive: false, clubActive: false, nightclubActive: false, pubActive: false});
        }else if(filter_event === "Club"){
            this.setState({clubActive: true,allActive: false, barActive: false, nightclubActive: false, pubActive: false});
        }else if(filter_event === "Nightclub"){
            this.setState({nightclubActive: true,allActive: false, barActive: false, clubActive: false, pubActive: false});
        }else if(filter_event === "Pub"){
            this.setState({pubActive: true,allActive: false, barActive: false, clubActive: false, nightclubActive: false});
        }
    }

    setDefault = () => {
        const apiUrl = 'http://localhost:8000/api/auth/get-country-event/Vietnam';
        fetch(apiUrl)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                events: result
              });
            },
            (error) => {
              this.setState({ error });
            }
        )
        this.setState({allActive: true,pubActive: false, barActive: false, clubActive: false, nightclubActive: false});
    }
    
    
    handleChange = (e) => {
        e.preventDefault();
        this.setState({search: e.target.value});
    }
      
    render() {
        const {search} = this.state;

        const filteredEvent = (search == '') ? this.state.events 
                                             : this.state.events.filter(detailss =>  
                                               detailss.event_title.toLowerCase().indexOf(search.toLowerCase()) !== -1 );
        return (
            <>

                <div className="page-content">
                <Navbar />
                {/* <img src="./country/singapore.gif" className="img-size-position"></img> */}
                <img src="./country/vietnam.png" className="img-size"></img>
                
                <marquee className="marquee-details"><br></br>Join us on our afterdark/nightlife telegram group for singapore <span className="marquee-color">(t.me/sgafterdark)</span>, china/hk <span className="marquee-color">(t.me/cnhkafterdark)</span>, thailand <span className="marquee-color">(t.me/thaiafterdark)</span>, malaysia <span className="marquee-color">(t.me/myafterdark)</span>, vietnam <span className="marquee-color">(t.me/vietafterdark)</span></marquee>
                

                <div className="eventDesktopView">
                    <BannerCarousel />
                </div>

                <div className="country-page-container">
                    <div className="desktopView">
                    <center>
                    <p className="event-title">VIETNAM <img src="/Vietnam.png" style={{height: "45px", paddingBottom: "5px"}} /></p>
                    </center>
                    
                    <div class="topnav ">
                        <Link onClick={this.setDefault} className={this.state.allActive ? "active" : ""} id={""} style={{borderRight: "1px solid white"}}>ALL</Link>
                        <Link onClick={this.filterEvents} className={this.state.barActive ? "active" : ""} id={"Bar"} style={{borderRight: "1px solid white"}}>BAR</Link>
                        <Link onClick={this.filterEvents} className={this.state.clubActive ? "active" : ""} id={"Club"} style={{borderRight: "1px solid white"}}>CLUB</Link>
                        <Link onClick={this.filterEvents} className={this.state.nightclubActive ? "active" : ""} id={"Nightclub"} style={{borderRight: "1px solid white"}}>NIGHTCLUB</Link>
                        <Link onClick={this.filterEvents} className={this.state.pubActive ? "active" : ""} id={"Pub"} >PUB</Link>
                        <div class="search-container">
                            <input type="text" placeholder="Search.." name="search" onChange={this.handleChange}/>
                            <button type="submit"><i class="fa fa-search"></i></button>
                        </div>
                    </div>
                    <Grid container spacing={1}>
                        <Grid container item xs={12} spacing={5}>
                            {filteredEvent.map(details => 
                            (
                            <Grid item xs={4}>
                                    <div className="box">
                            <div className="slide-img">
                                <img alt="1" src={details.event_src} />
                                <div className="overlay">
                                    <Link to={{ pathname: "/event/"+ details.slug, state: { slug: details.slug } }} className="buy-btn">Read More </Link>
                                </div>
                            </div>
                                <div className="detail-box">
                                    <div className="type">
                                    {/* <div className="event-tag">
                                        <img src="./tag.png" className="tag-size"></img>
                                        <p className="tag-details">
                                            <span className="event-date"><span className="event-date-details">{details.event_day}</span></span>
                                            <span className="event-time"><i className="fal fa-clock fa-color"></i> <span className="time-details">{details.event_time}</span></span>
                                            <span className="event-place"><i className="fal fa-map-marker-alt fa-color"></i> <span className="time-details">&nbsp;{details.event_place}</span></span>
                                        </p>
                                    </div> */}
                                    <div className="event-titles">
                                        <Link to={{ pathname: "/event/"+ details.slug, state: { slug: details.slug } }}>{details.event_title}</Link>
                                        <br></br>
                                        {/* <label style={{marginBottom: "0px !important", fontSize: "14px", paddingRight: "20px"}}><i className="fas fa-calendar-alt" style={{color: "#0fc"}}></i> {details.event_day}</label> */}
                                        <label style={{marginBottom: "0px !important", fontSize: "14px", paddingRight: "20px"}}><i className="far fa-clock" style={{color: "#0fc", fontSize: "14px"}}></i>{details.event_time}</label>
                                        <label style={{marginBottom: "0px !important", fontSize: "14px", paddingRight: "20px"}}><i className="fal fa-map-marker-alt" style={{color: "#0fc", fontSize: "14px"}}></i> {details.country} <i class={'flag flag-'+details.country_code}></i></label>
                                    </div>
                                    <span className="event-details">{details.event_details}</span>

                                    <div className="row desktop-view-event">
                                      <div className="col-6">
                                        <Link className="read-more" exact to={{ pathname: "/event/"+ details.slug, state: { slug: details.slug } }}><i class="fas fa-long-arrow-right aw"></i> Read More</Link>
                                      </div>

                                      <div className="col-6">
                                        <Link className="read-more" exact to={{ pathname: "/event/"+ details.slug, state: { slug: details.slug } }}><i class="fas fa-long-arrow-right aw"></i> 0 Comment</Link>
                                      </div>
                                    </div>

                                    <div className="mobile-view-event">
                                        <Link className="read-more" to={{ pathname: "/event/"+ details.slug, state: { slug: details.slug } }}><i class="fas fa-long-arrow-right aw"></i> Press for More</Link>

                                        <Link className="read-more" to={{ pathname: "/event/"+ details.slug, state: { slug: details.slug } }}><i class="fas fa-long-arrow-right aw"></i> 0 Comment</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                            </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    </div>
                </div>
                

                <div className="EventMobileView">
                    <VietnamMobileView />
                </div>
                
                <Footer />
                </div>
            </>
        )
    }
}

export default Vietnam
