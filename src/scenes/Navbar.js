import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../src/assets/css/Navbar.css'

export default class Navbar extends Component {

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

    render() {
        return (
            <>
            <nav className='navbar'>
                <Link to="/" className="navbar-logo">
                        <img src="3wenight2.png" className="logo-size"></img>
                </Link>
                <div className='menu-icon' onClick={this.handleMenu}>
                <i className={this.state.classChange ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={this.state.classChange ? 'nav-menu active' :  'nav-menu'}>
                <li className='nav-item'><Link to='/news' className='nav-links'>HOME</Link></li>
                <li className='nav-item'><Link to='/games' className='nav-links'>EVENT</Link></li>
                <li className='nav-item'><Link to='/liveStream' className='nav-links'>Q & A</Link></li>
                <li className='nav-item'><Link to='/forum' className='nav-links'>BLOG</Link></li>
                <li className='nav-item'><Link to='/schedule' className='nav-links'>CONTACT</Link></li>
                <li className='li-height'><Link to='/schedule' className='btn-login'>LOGIN</Link></li>
                <li className='li-height'><Link to='/schedule' className='btn-register'>REGISTER</Link></li>
                </ul>

                <Link to='/singapore'><img src="1.png" className="flag1"></img></Link>
                <Link to='/malaysia'><img src="2.png" className="flag2"></img></Link>
                <Link to='/china'><img src="3.png" className="flag3"></img></Link>
                <Link to='/vietnam'><img src="4.png" className="flag4"></img></Link>
                <Link to='/thailand'><img src="5.png" className="flag5"></img></Link>
            </nav>
            </>
        )
    }
}