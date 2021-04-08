import React, { Component, Fragment } from 'react'
import Navbar from '../Navbar'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import MusicPlayer from '../MusicPlayer'
import BannerCarousel from '../components/BannerCarousel'
import {Link} from 'react-router-dom'
import {
    FacebookShareButton,
    TelegramShareButton,
    TwitterShareButton,
    FacebookIcon,
    TelegramIcon,
    TwitterIcon,
  } from "react-share";
import { connect } from 'react-redux';
import cookie from 'js-cookie';





class Event extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          detailss: '',
          commentCount: '',
          comment_details: [],
        };
      }

    componentWillMount() {
		console.log('this.props', this.props)
		if (this.props.location.state && this.props.location.state.slug) {
			const slug = this.props.location.state.slug;
            const apiUrl = 'http://localhost:8000/api/auth/get-event/'+slug;
            const apiUrl2 = 'http://localhost:8000/api/auth/get-comment/'+slug;
            const apiUrl3 = 'http://localhost:8000/api/auth/get-comment-count/'+slug;

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

            fetch(apiUrl2)
            .then(res => res.json())
            .then(
                (result) => {
                this.setState({
                    comment_details: result
                });
                },
                (error) => {
                this.setState({ error });
                }
            )

            fetch(apiUrl3)
            .then(res => res.json())
            .then(
                (result) => {
                this.setState({
                    commentCount: result
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
                        <img src={details.event_src} className="event-img-size"></img>                        
                            <div className="detail-box">
                                <div className="type">
                                    <div className="event-titles">
                                        <p style={{marginBottom: "0px"}}>{details.event_title}</p>
                                        {/* <label style={{marginBottom: "0px !important", fontSize: "14px", paddingRight: "20px"}}><i className="fas fa-calendar-alt" style={{color: "#0fc"}}></i> {details.event_day}</label> */}
                                        <label style={{marginBottom: "0px !important", fontSize: "14px", paddingRight: "20px"}}><i className="far fa-clock" style={{color: "#0fc", fontSize: "14px"}}></i>{details.event_time}</label>
                                        <label style={{marginBottom: "0px !important", fontSize: "14px", paddingRight: "20px"}}><i className="fal fa-map-marker-alt" style={{color: "#0fc", fontSize: "14px"}}></i> {details.country} <i class={'flag flag-'+details.country_code}></i></label>
                                    </div>
                                    <span className="event-detailss">{details.event_details}</span>
                                    <div style={{display: "inline-block", verticalAlign: "middle", paddingTop: "20px"}}>
                                    <label style={{fontSize: "22px"}}>Share it on -</label>

                                    <FacebookShareButton style={{paddingLeft: "7px"}} url="https://www.facebook.com/3WE-Afterdark-105772774651041">
                                    <FacebookIcon size={32} style={{paddingBottom: "3px"}} round={true} />
                                    </FacebookShareButton>

                                    <TelegramShareButton style={{paddingLeft: "7px"}} url="https://t.me/sgafterdark">
                                    <TelegramIcon size={32} style={{paddingBottom: "3px"}} round={true} />
                                    </TelegramShareButton>

                                    <TwitterShareButton style={{paddingLeft: "7px"}} url={window.location.href}>
                                    <TwitterIcon size={32} style={{paddingBottom: "3px"}} round={true} />
                                    </TwitterShareButton>

                                    </div>
                                    
                                    <section class="content-item" id="comments">

                                                    {
                                                        this.state.commentCount == 0 ? 
                                                        (

                                                            <Fragment>
                                                                <center>
                                                                    <i class="fas fa-comments" style={{fontSize: "32px", color: "#0fc"}}></i>
                                                                    <span className="comment-label">No Comments Yet!</span>
                                                                    <span style={{textAlign: "center", fontSize: "14px", paddingTop: "4px"}}>Leave A Comment...Your data will be safe!</span>
                                                                </center>

                                                                {
                                                                    !this.props.loggedIn ? 
                                                                    (
                                                                        <Fragment>
                                                                            <center>
                                                                                <div className="rock_heading_div">
                                                                                    <span className="leave-comment-label">Leave a Comment</span>
                                                                                    <p className="leave-comment">X</p>
                                                                                </div>
                                                                                <label style={{textAlign: "center", fontSize: "13px", paddingTop: "4px"}}>You must be <Link to="/login" className="logged-in">logged in</Link> to post a comment.</label>
                                                                            </center>
                                                                        </Fragment>
                                                                    )
                                                                    :
                                                                    (
                                                                        <div className="comment-area-spacing">
                                                                            <textarea rows="5" className="comment-area" id="comment" name="comment" placeholder="Your Comment" spellcheck="false"></textarea>

                                                                            <input className="post-comment" value="Post Comment"></input>
                                                                        </div>
                                                                        
                                                                    )
                                                                }   
                                                            </Fragment>
                                                        )
                                                        :
                                                        (
                                                            <Fragment>
                                                            
                                                            {
                                                                this.props.loggedIn ?
                                                                <Fragment>
                                                                    <div className="comment-area-spacing">
                                                                        <textarea rows="5" className="comment-area" id="comment" name="comment" placeholder="Your Comment" spellcheck="false"></textarea>

                                                                        <input className="post-comment" value="Post Comment"></input>
                                                                    </div>
                                                                </Fragment>
                                                                :
                                                                !this.props.loggedIn ? 
                                                                    (
                                                                        <Fragment>
                                                                            <center>
                                                                                <div className="rock_heading_div">
                                                                                    <span className="leave-comment-label">Leave a Comment</span>
                                                                                    <p className="leave-comment">X</p>
                                                                                </div>
                                                                                <label style={{textAlign: "center", fontSize: "13px", paddingTop: "4px"}}>You must be <Link to="/login" className="logged-in">logged in</Link> to post a comment.</label>
                                                                            </center>
                                                                        </Fragment>
                                                                    )
                                                                    :
                                                                    (
                                                                        <div className="comment-area-spacing">
                                                                            <textarea rows="5" className="comment-area" id="comment" name="comment" placeholder="Your Comment" spellcheck="false"></textarea>

                                                                            <input className="post-comment" value="Post Comment"></input>
                                                                        </div>
                                                                        
                                                                    )
                                                            }
                                                                    <h3>{this.state.commentCount} Comments</h3>
                                                            {this.state.comment_details.map(comment_det => {
                                                                return(
                                                                <>
                                                    
                                                                    <div className="media">
                                                                        <a className="pull-left" href="#"><img className="media-object" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS88rI7RXVX2mJ4tuynlW20f-wsl9lzNKhCHg&usqp=CAU" alt="" /></a>
                                                                        <div className="media-body">
                                                                            <h4 className="media-heading" style={{color: "#74FFD5"}}>{comment_det.name}</h4>
                                                                            <p style={{fontStyle: "italic"}}>{comment_det.message}</p>
                                                                            <ul className="list-unstyled list-inline media-detail pull-left">
                                                                                <label className="date-like"><i className="fa fa-calendar date-like"></i> {comment_det.message_at}</label>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </>
                                                                )
                                                            })}
                                                            </Fragment>
                                                        )
                                                    }
                                                    
                                                    
                                                    
                                                
                                    </section>
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

const mapStateToProps = state => {
    return {
      loggedIn: state.auth.loggedIn,
      id: state.auth.user.id
    };
};

export default connect(mapStateToProps)(Event)