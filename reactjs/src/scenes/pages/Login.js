import React, { Component } from 'react'
import Navbar from '../Navbar'
import Footer from '../components/Footer'
import '../../assets/components/Login.css'
import MusicPlayer from '../MusicPlayer';
import BannerCarousel from '../components/BannerCarousel';
import {InputLabel, FormControl, FilledInput, Button, IconButton, InputAdornment } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

export default class Login extends Component {

    constructor(props){
        super(props)

        this.state = {
            username: '',
            password: '',
            submitted: false,
            showPassword: false,
        }

        this.handleClickShowPassword = this.handleClickShowPassword.bind(this)
    }

    HandleChange = (event) => {
            
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    handleClickShowPassword() {
       this.setState({ showPassword: !this.state.showPassword })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({ submitted: true });
       
    }


    render() {
        const { username, password, submitted } = this.state;
        return (
            <>
            <div className="page-content">
                <Navbar />

                <div className="login-border">
                <form className="login-container" onClick={this.handleSubmit}>
                <div className="login-label-position">
                    <div className="spacing"></div>
                    <div className="spacing"></div>
                    <span className="login-label">LOGIN</span>

                    <div className="spacing"></div>
                    <div className="username-position">
                    <FormControl style={{width: '80%'}} error={submitted && !password} variant="filled">
                    <InputLabel htmlFor="filled-adornment-username" className={submitted && !username ? 'MuiInputBase-input-error' : 'MuiInputBase-input'}>{submitted && !username ? 'Username is required' : 'Username'}</InputLabel>
                    <FilledInput
                        id="filled-adornment-username"
                        name="username"
                        onChange={this.HandleChange}
                        value={this.username}
                        id="filled-secondary"
                        label="Filled secondary"
                        variant="filled"
                        color="secondary"
                    />
                    </FormControl>
                    </div>
                    <div className="spacing"></div>
                    <div className="password-position">
                    <FormControl style={{width: '80%'}} error={submitted && !password} variant="filled">
                    <InputLabel htmlFor="filled-adornment-password" className={submitted && !password ? 'MuiInputBase-input-error' : 'MuiInputBase-input'}>{submitted && !password ? 'Password is required' : 'Password'}</InputLabel>
                    <FilledInput
                        id="filled-adornment-password"
                        name="password"
                        type={this.state.showPassword ? 'text' : 'password'}
                        onChange={this.HandleChange}
                        value={this.password}
                        id="filled-secondary"
                        label="Filled secondary"
                        variant="filled"
                        color="secondary"
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
                    </div>
                    <div className="spacing-button"></div>
                    <Button variant="contained" color="primary" type="submit" className="button-size">
                    <span className="button-label">LOGIN</span>
                    </Button>
                </div>


                </form>
                </div>

                <img src="Untitled.png" alt="3webg" className="page-banner-size"></img>

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
