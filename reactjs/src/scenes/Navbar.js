import React, { Component, Fragment } from 'react'
import { NavLink  } from 'react-router-dom'
import '../../src/assets/css/Navbar.css'
import { connect } from 'react-redux';
import cookie from 'js-cookie';

class Navbar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            classChange: false,
            FAChangeClass: false,
        }

        this.handleMenu = this.handleMenu.bind(this)
        this.changeClass = this.changeClass.bind(this)
    }

    handleMenu() {

       this.setState({ classChange: !this.state.classChange })
    }

    handleLogout = (event) => {
        event.preventDefault()

        cookie.remove("token");
        this.props.logout();
    }

    changeClass() {
        this.setState({ FAChangeClass: !this.state.FAChangeClass })
    }

    render() {
        return (
            <>
            <nav className='navbar'>
                <NavLink  to="/" className="navbar-logo">
                        <img src="/3wenight2.png" className="logo-size" alt="3webg"></img>
                </NavLink >

                <div className="countryMobile">
                <i onClick={this.changeClass} className={this.state.FAChangeClass ? "fal fa-chevron-up faPosition": "fal fa-chevron-down faPosition"}></i>
                <ul className={this.state.FAChangeClass ? 'nav-menu active' :  'nav-menu'}>
                <li className='nav-item'><NavLink exact activeClassName="navbar__link--active"  to='/singapore' className='nav-links links links--elara'><img src="/1.png" alt="sg"></img></NavLink ></li>
                <li className='nav-item'><NavLink activeClassName="navbar__link--active"  to='/malaysia' className='nav-links links links--elara'><img src="/2.png" alt="my"></img></NavLink ></li>
                <li className='nav-item'><NavLink activeClassName="navbar__link--active" to='/china' className='nav-links links links--elara'><img src="/3.png" alt="ch"></img></NavLink ></li>
                <li className='nav-item'><NavLink activeClassName="navbar__link--active" to='/vietnam' className='nav-links links links--elara'><img src="/4.png" alt="vt"></img></NavLink ></li>
                <li className='nav-item'><NavLink activeClassName="navbar__link--active" to='/thailand' className='nav-links links links--elara'><img src="/5.png" alt="th"></img></NavLink ></li>
                </ul>
                </div>
                

                {/* DESKTOP VIEW */}
                <div className='menu-icon' onClick={this.handleMenu}>
                <i className={this.state.classChange ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={this.state.classChange ? 'nav-menu active' :  'nav-menu'}>
                <li className='nav-item'><NavLink exact activeClassName="navbar__link--active"  to='/' className='nav-links links links--elara'>HOME</NavLink ></li>
                <li className='nav-item dropdown'>
                    <a to='#' className='nav-links links links--elara'>EVENT</a >
                    <div class="dropdown-content">
                        <li className='nav-items'><NavLink  to='/singapore' className='nav-links links links--elara'><img src="/singapore.png" alt="sg"/> SINGAPORE</NavLink ></li>
                        <li className='nav-items'><NavLink  to='/malaysia' className='nav-links links links--elara'><img src="/malaysia.png" alt="sg"/> MALAYSIA</NavLink ></li>
                        <li className='nav-items'><NavLink  to='/china' className='nav-links links links--elara'><img src="/china.png" alt="sg"/> CHINA</NavLink ></li>
                        <li className='nav-items'><NavLink  to='/vietnam' className='nav-links links links--elara'><img src="/vietnam.png" alt="sg"/> VIETNAM</NavLink ></li>
                        <li className='nav-items'><NavLink  to='/thailand' className='nav-links links links--elara'><img src="/thailand.png" alt="sg"/> THAILAND</NavLink ></li>
                    </div>
                </li>
                <li className='nav-item'><NavLink  activeClassName="navbar__link--active" to='/QandA' className='nav-links links links--elara'>Q & A</NavLink ></li>
                <li className='nav-item'><NavLink activeClassName="navbar__link--active" to='/blog' className='nav-links links links--elara'>BLOG</NavLink ></li>
                <li className='nav-item'><NavLink activeClassName="navbar__link--active" to='/contact' className='nav-links links links--elara'>CONTACT</NavLink ></li>
                {
                    !this.props.loggedIn ? 
                    (
                    <Fragment>
                        <li className='li-height'><NavLink  to='/login' className='btn-login'><img src="/login.png"></img></NavLink ></li>
                        <li className='li-height'><NavLink  to='/register' className='btn-register'><img src="/register.png"></img></NavLink ></li>
                    </Fragment>
                    )
                    :
                    <Fragment>
                        <li className='li-height'><NavLink  to='/login' className='btn-logins'>WELCOME: {this.props.firstname}</NavLink ></li>
                        <li className='li-height'><NavLink  to='/logout' className='btn-register' onClick={this.handleLogout}>Logout</NavLink ></li>
                    </Fragment>
                }
                </ul>

                {/* MOBILE VIEW */}

                <div className="desktop">
                    <NavLink to='/singapore'><img src="/1.png" className="flag1"  alt="sg"></img></NavLink >
                    <NavLink to='/malaysia'><img src="/2.png" className="flag2"  alt="my"></img></NavLink >
                    <NavLink to='/china'><img src="/3.png" className="flag3"  alt="ch"></img></NavLink >
                    <NavLink to='/vietnam'><img src="/4.png" className="flag4"  alt="vt"></img></NavLink >
                    <NavLink to='/thailand'><img src="/5.png" className="flag5"  alt="th"></img></NavLink >
                </div>
                
            </nav>
            {/* <DeCarousel /> */}
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
      loggedIn: state.auth.loggedIn,
      firstname: state.auth.user.username
    };
};

const mapDispatchToProps = dispatch => {
    return {
      logout: () => dispatch({type:'SET_LOGOUT'})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)