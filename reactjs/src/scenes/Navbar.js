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
        }

        this.handleMenu = this.handleMenu.bind(this)
    }

    handleMenu() {

       this.setState({ classChange: !this.state.classChange })
    }

    handleLogout = (event) => {
        event.preventDefault()

        cookie.remove("token");
        this.props.logout();
    }

    render() {
        return (
            <>
            <nav className='navbar'>
                <NavLink  to="/" className="navbar-logo">
                        <img src="3wenight2.png" className="logo-size" alt="3webg"></img>
                </NavLink >

                {/* DESKTOP VIEW */}
                <div className='menu-icon' onClick={this.handleMenu}>
                <i className={this.state.classChange ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={this.state.classChange ? 'nav-menu active' :  'nav-menu'}>
                <li className='nav-item'><NavLink exact activeClassName="navbar__link--active"  to='/' className='nav-links links links--elara'>HOME</NavLink ></li>
                <li className='nav-item'><NavLink activeClassName="navbar__link--active"  to='/event' className='nav-links links links--elara'>EVENT</NavLink ></li>
                <li className='nav-item'><NavLink  activeClassName="navbar__link--active" to='/QandA' className='nav-links links links--elara'>Q & A</NavLink ></li>
                <li className='nav-item'><NavLink activeClassName="navbar__link--active" to='/blog' className='nav-links links links--elara'>BLOG</NavLink ></li>
                <li className='nav-item'><NavLink activeClassName="navbar__link--active" to='/contact' className='nav-links links links--elara'>CONTACT</NavLink ></li>
                {
                    !this.props.loggedIn ? 
                    (
                    <Fragment>
                        <li className='li-height'><NavLink  to='/login' className='btn-login'>LOGIN</NavLink ></li>
                        <li className='li-height'><NavLink  to='/register' className='btn-register'>REGISTER</NavLink ></li>
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

                <NavLink  to='/singapore'><img src="1.png" className="flag1"  alt="sg"></img></NavLink >
                <NavLink  to='/malaysia'><img src="2.png" className="flag2"  alt="my"></img></NavLink >
                <NavLink  to='/china'><img src="3.png" className="flag3"  alt="ch"></img></NavLink >
                <NavLink  to='/vietnam'><img src="4.png" className="flag4"  alt="vt"></img></NavLink >
                <NavLink  to='/thailand'><img src="5.png" className="flag5"  alt="th"></img></NavLink >
            </nav>
            {/* <DeCarousel /> */}
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
      loggedIn: state.auth.loggedIn,
      firstname: state.auth.user.firstname
    };
};

const mapDispatchToProps = dispatch => {
    return {
      logout: () => dispatch({type:'SET_LOGOUT'})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)