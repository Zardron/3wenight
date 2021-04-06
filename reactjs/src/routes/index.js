import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from '../scenes/Home';
import Event from '../../src/scenes/pages/Event';
import Country from '../../src/scenes/pages/Country';
import QandA from '../../src/scenes/pages/QandA';
import Blog from '../../src/scenes/pages/Blog';
import Contact from '../../src/scenes/pages/Contact';
import Login from '../../src/scenes/pages/Login';
import Register from '../../src/scenes/pages/Register';
import Singapore from '../../src/scenes/pages/Singapore';
import Malaysia from '../../src/scenes/pages/Malaysia';
import China from '../scenes/pages/China';
import Vietnam from '../scenes/pages/Vietnam';
import Thailand from '../../src/scenes/pages/Thailand';
import GuestRoute from '../scenes/components/GuestRoute';
import AuthRoute from '../scenes/components/AuthRoute';
import ErrorPage from '../scenes/components/ErrorPage';


class Router extends Component {
	render() {
		return (
			<BrowserRouter>
				<Route exact path="/" component={Home} />
				<Route path="/event" component={Event} />
				<Route path="/country" component={Country} />
				<Route path="/QandA" component={QandA} />
				<Route path="/blog" component={Blog} />
				<Route path="/contact" component={Contact} />
				<GuestRoute path="/login" component={Login} />
				<GuestRoute path="/register" component={Register} />
				<Route path="/singapore" component={Singapore} />
				<Route path="/malaysia" component={Malaysia} />
				<Route path="/china" component={China} />
				<Route path="/vietnam" component={Vietnam} />
				<Route path="/thailand" component={Thailand} />
				<Route path="/404" component={ErrorPage} />
			</BrowserRouter>
		)
	}
}

export default Router