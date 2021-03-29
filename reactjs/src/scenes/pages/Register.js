import React, { Component } from 'react'
import Navbar from '../Navbar'
import Footer from '../components/Footer'
import '../../assets/components/Register.css'
import MusicPlayer from '../MusicPlayer';
import BannerCarousel from '../components/BannerCarousel';
import {InputLabel, FormControl, FilledInput, Button, IconButton, InputAdornment } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import axios from 'axios';
import cookie from 'js-cookie';
import { connect } from 'react-redux';

class Register extends Component {

    constructor(props){
        super(props);

        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            username: "",
            password: "",
            cpassword: "",
            errors: {},
            submitted: false,
            showPassword: false,
        }

        this.handleClickShowPassword = this.handleClickShowPassword.bind(this)
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const data = {firstname: this.state.firstname,lastname: this.state.lastname,email: this.state.email,username: this.state.username, password: this.state.password
        };

        axios
        .post("http://localhost:8000/api/auth/register", data)
        .then(res => {
            cookie.set("token", res.data.access_token);
            this.props.setLogin(res.data.user);
            this.props.history.push("/singapore");
        })
        .catch(e => this.setState({errors: e.response.data}));

        this.setState({submitted: true});
    };

    handleChange = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        })

    }

    handleClickShowPassword() {
        this.setState({ showPassword: !this.state.showPassword })
    }

    render() {
        const { firstname, lastname, email, username, password, cpassword, submitted } = this.state;
        const error = this.state.errors
        return (
            <>
            <div className="register-content">
                <Navbar />

                <form className="register-container" onSubmit={this.handleSubmit}>

                    <div className="register-label-position">
                        <div className="spacing"></div>
                        <span className="register-label">REGISTER</span>
                        {error.errors ? <p className="MuiInputBase-input-error">{error.errors}</p> : ""}
                        <div className="spacing"></div>
                        <FormControl style={{width: '80%'}} variant="filled" error={(submitted && !firstname)}>
                        <InputLabel htmlFor="filled-adornment-firstname" className={submitted && !firstname ? 'MuiInputBase-input-error' : 'MuiInputBase-input'}>{(submitted && !firstname ? 'Firstname is required' : 'Firstname')}</InputLabel>
                        <FilledInput
                            id="filled-adornment-firstname"
                            name="firstname"
                            variant="filled"
                            color="secondary"
                            onChange={this.handleChange}
                            value={this.firstname}
                        />
                        </FormControl>

                        <div className="reg-spacing"></div>

                        <FormControl style={{width: '80%'}} variant="filled" error={submitted && !lastname}>
                        <InputLabel htmlFor="filled-adornment-lastname" className={submitted && !lastname ? "MuiInputBase-input-error" : "MuiInputBase-input"}>{submitted && !lastname ? "Lastname is required" : "Lastname"}</InputLabel>
                        <FilledInput
                            id="filled-adornment-lastname"
                            name="lastname"
                            variant="filled"
                            color="secondary"
                            onChange={this.handleChange}
                            value={this.lastname}
                        />
                        </FormControl>

                        <div className="reg-spacing"></div>

                        <FormControl style={{width: '80%'}} variant="filled" error={submitted && !email}>
                        <InputLabel htmlFor="filled-adornment-email" className={submitted && !email ? "MuiInputBase-input-error" : "MuiInputBase-input"}>{submitted && !email ? "Email is required" : "Email"}</InputLabel>
                        <FilledInput
                            id="filled-adornment-email"
                            name="email"
                            variant="filled"
                            color="secondary"
                            onChange={this.handleChange}
                            value={this.email}
                        />
                        </FormControl>

                        <div className="reg-spacing"></div>

                        <FormControl style={{width: '80%'}} variant="filled" error={submitted && !username}>
                        <InputLabel htmlFor="filled-adornment-username" className={submitted && !username ? "MuiInputBase-input-error" : "MuiInputBase-input"}>{submitted && !username ? "Username is required" : "Username"}</InputLabel>
                        <FilledInput
                            id="filled-adornment-username"
                            name="username"
                            variant="filled"
                            color="secondary"
                            onChange={this.handleChange}
                            value={this.username}
                        />
                        </FormControl>

                        <div className="reg-spacing"></div>

                        <FormControl style={{width: '80%'}} variant="filled" error={submitted && !password}>
                        <InputLabel htmlFor="filled-adornment-password" className={submitted && !password ? "MuiInputBase-input-error" : "MuiInputBase-input"}>{submitted && !password ? "Password is required" : "Password"}</InputLabel>
                        <FilledInput
                            id="filled-adornment-password"
                            name="password"
                            variant="filled"
                            type={this.state.showPassword ? 'text' : 'password'}
                            color="secondary"
                            onChange={this.handleChange}
                            value={this.password}
                            endAdornment={
                                <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={this.handleClickShowPassword}
                                >
                                    {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                                </InputAdornment>
                            }
                        />
                        </FormControl>

                        <div className="reg-spacing"></div>

                        <FormControl style={{width: '80%'}} error={submitted && !cpassword} variant="filled">
                        <InputLabel htmlFor="filled-adornment-cpassword" className={submitted && !cpassword ? "MuiInputBase-input-error" : "MuiInputBase-input" }>{submitted && !cpassword ? 'Confirm password is required' : 'Confirm password'}</InputLabel>
                        <FilledInput
                            id="filled-adornment-cpassword"
                            name="cpassword"
                            variant="filled"
                            type={this.state.showPassword ? 'text' : 'password'}
                            color="secondary"
                            onChange={this.handleChange}
                            value={this.cpassword}
                            endAdornment={
                                <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={this.handleClickShowPassword}
                                >
                                    {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                                </InputAdornment>
                            }
                        />
                        </FormControl>

                        <div className="spacing"></div>
                        <div className="spacing"></div>
                        <Button variant="contained" color="primary" type="submit" className="button-size">
                        <span className="button-label">REGISTER</span>
                        </Button>

                    </div>

                </form>

                <img src="Untitled.png" alt="3webg" className="register-banner-size"></img>

                <marquee className="marquee-details"><br></br>Join us on our afterdark/nightlife telegram group for singapore <span className="marquee-color">(t.me/sgafterdark)</span>, china/hk <span className="marquee-color">(t.me/cnhkafterdark)</span>, thailand <span className="marquee-color">(t.me/thaiafterdark)</span>, malaysia <span className="marquee-color">(t.me/myafterdark)</span>, vietnam <span className="marquee-color">(t.me/vietafterdark)</span></marquee>
                <div className="grid-container">
                    <div class="grid-item">
                        <MusicPlayer />
                    </div>
                    <div class="grid-item2">
                        <BannerCarousel />
                    </div>
                </div>

                <Footer />
            </div>
            </>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
      setLogin: user => dispatch({ type: "SET_LOGIN", payload: user })
    };
  };
  export default connect(
    null,
    mapDispatchToProps
  )(Register);