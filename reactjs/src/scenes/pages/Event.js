import React, { Component, Fragment } from 'react'
import Navbar from '../Navbar'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import MusicPlayer from '../MusicPlayer'
import BannerCarousel from '../components/BannerCarousel'
import { SolarSystemLoading   } from 'react-loadingg';
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
import axios from 'axios'
import {loadSingleDataUser} from '../store/Actions/EventActions'
import {loadAllComments, loadCommentCount} from '../store/Actions/CommentActions'
import Moment from 'react-moment';
import 'moment-timezone';
import store from '../store/index'

class Event extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          event_src: '',
          event_title: '',
          country_code: '',
          event_time: '',
          country: '',
          event_details: '',
          commentCount: "",
          comment: '',
          username: this.props.username,
          comment_details: [],
          is_fetching: true,
        };
      }

    componentWillMount = () =>{
        const slug  = this.props.location.state.slug;
        this.props.loadSingleDataUser(slug);
        this.props.loadAllComments(slug);
        this.props.loadCommentCount(slug);
        this.setState({ is_fetching: false });
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }



    handleSubmit = (e) => {
        e.preventDefault();
        
        const data = {name: this.state.username, comment: this.state.comment, slug: this.props.location.state.slug};

        axios
        .post("http://localhost:8000/api/auth/comment-event/", data)
        .then(res => {
            const slug  = this.props.location.state.slug;
            this.props.loadAllComments(slug);
            this.props.loadCommentCount(slug);
            
            e.target.reset();

        })
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

                    {
                        this.props.is_fetching ?
                        (
                            <div style={{marginTop: "40%"}}>
                                <SolarSystemLoading />
                            </div>
                        )
                        :
                        <Fragment>
                        <div className="box">
                            <img src={this.props.loadSingleEvent.event_src} className="event-img-size"></img>                        
                                <div className="detail-box">
                                    <div className="type">
                                        <div className="event-titles">
                                            <p style={{marginBottom: "0px"}}>{this.props.loadSingleEvent.event_title}</p>
                                            {/* <label style={{marginBottom: "0px !important", fontSize: "14px", paddingRight: "20px"}}><i className="fas fa-calendar-alt" style={{color: "#0fc"}}></i> {details.event_day}</label> */}
                                            <label style={{marginBottom: "0px !important", fontSize: "14px", paddingRight: "20px"}}><i className="far fa-clock" style={{color: "#0fc", fontSize: "14px"}}></i>{this.props.loadSingleEvent.event_time}</label>
                                            <label style={{marginBottom: "0px !important", fontSize: "14px", paddingRight: "20px"}}><i className="fal fa-map-marker-alt" style={{color: "#0fc", fontSize: "14px"}}></i> {this.props.loadSingleEvent.country} <i class={'flag flag-'+this.props.loadSingleEvent.country_code}></i></label>
                                        </div>
                                        <span className="event-detailss">{this.props.loadSingleEvent.event_details}</span>
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
                                                            this.props.commentCount == 0 ? 
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
                                                                            <form onSubmit={this.handleSubmit} >
                                                                                <textarea rows="5" className="comment-area" name="comment" onChange={this.handleChange} value={this.comment} placeholder="Your Comment" spellcheck="false"></textarea>
                                                                                <input type="submit" className="post-comment" value="Post Comment"></input>
                                                                            </form>
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
                                                                            <form onSubmit={this.handleSubmit}>
                                                                                <textarea rows="5" className="comment-area" name="comment" onChange={this.handleChange} value={this.comment} placeholder="Your Comment" spellcheck="false"></textarea>
                                                                                <input type="submit" className="post-comment" value="Post Comment"></input>
                                                                            </form>
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
                                                                            <form onSubmit={this.handleSubmit}>
                                                                                <textarea rows="5" className="comment-area" name="comment" onChange={this.handleChange} value={this.comment} placeholder="Your Comment" spellcheck="false"></textarea>
                                                                                <input type="submit" className="post-comment" value="Post Comment"></input>
                                                                            </form>
                                                                            </div>
                                                                            
                                                                        )
                                                                }
                                                                        <h3>{this.props.commentCount} Comments</h3>
                                                                {this.props.loadComment.map(comment_det => {
                                                                    return(
                                                                    <>
                                                        
                                                                        <div className="media">
                                                                            <a className="pull-left" href="#"><img className="media-object" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS88rI7RXVX2mJ4tuynlW20f-wsl9lzNKhCHg&usqp=CAU" alt="" /></a>
                                                                            <div className="media-body">
                                                                                <h4 className="media-heading" style={{color: "#0fc"}}>{comment_det.name}</h4>
                                                                                <p style={{fontStyle: "italic"}}>{comment_det.message}</p>
                                                                                <ul className="list-unstyled list-inline media-detail pull-left">
                                                                                    <span className="date-like"><i class="fas fa-history date-like"></i><Moment fromNow className="date-like">{comment_det.created_at}</Moment></span>
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
                        </Fragment>
                    }
                    
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
      id: state.auth.user.id,
      username: state.auth.user.username,
      loadSingleEvent: state.event.loadSingleEvent,
      loadComment: state.comment.loadComment,
      is_fetching: state.event.is_fetching,
      commentCount: state.comment.commentCount
    };
};

const mapDispatchToProps = (dispatch) =>{
    return{
        loadSingleDataUser: (slug) => dispatch(loadSingleDataUser(slug)),
        loadAllComments: (slug) => dispatch(loadAllComments(slug)),
        loadCommentCount: (slug) => dispatch(loadCommentCount(slug)),
    }   
}

export default connect(mapStateToProps,mapDispatchToProps)(Event)
