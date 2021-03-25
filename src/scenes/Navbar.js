import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../src/assets/css/Navbar.css'
import DeCarousel from '../../src/scenes/components/Carousel'

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
                        <img src="3wenight2.png" className="logo-size" alt="3webg"></img>
                </Link>

                {/* DESKTOP VIEW */}
                <div className='menu-icon' onClick={this.handleMenu}>
                <i className={this.state.classChange ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={this.state.classChange ? 'nav-menu active' :  'nav-menu'}>
                <li className='nav-item'><Link to='/' className='nav-links'>HOME</Link></li>
                <li className='nav-item'><Link to='/event' className='nav-links'>EVENT</Link></li>
                <li className='nav-item'><Link to='/QandA' className='nav-links'>Q & A</Link></li>
                <li className='nav-item'><Link to='/blog' className='nav-links'>BLOG</Link></li>
                <li className='nav-item'><Link to='/contact' className='nav-links'>CONTACT</Link></li>
                <li className='li-height'><Link to='/login' className='btn-login'>LOGIN</Link></li>
                <li className='li-height'><Link to='/register' className='btn-register'>REGISTER</Link></li>
                </ul>

                {/* MOBILE VIEW */}

                <Link to='/singapore'><img src="1.png" className="flag1"  alt="sg"></img></Link>
                <Link to='/malaysia'><img src="2.png" className="flag2"  alt="my"></img></Link>
                <Link to='/china'><img src="3.png" className="flag3"  alt="ch"></img></Link>
                <Link to='/vietnam'><img src="4.png" className="flag4"  alt="vt"></img></Link>
                <Link to='/thailand'><img src="5.png" className="flag5"  alt="th"></img></Link>
            </nav>
            {/* <DeCarousel /> */}
            </>
        )
    }
}
