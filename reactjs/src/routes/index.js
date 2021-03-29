import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from '../scenes/Home';
import Event from '../../src/scenes/pages/Event';
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


class Router extends Component {
	render() {
		return (
			<BrowserRouter>
				<Route exact path="/" component={Home} />
				<Route exact path="/event" component={Event} />
				<Route exact path="/QandA" component={QandA} />
				<Route exact path="/blog" component={Blog} />
				<Route exact path="/contact" component={Contact} />
				<GuestRoute exact path="/login" component={Login} />
				<GuestRoute exact path="/register" component={Register} />
				<AuthRoute exact path="/singapore" component={Singapore} />
				<AuthRoute exact path="/malaysia" component={Malaysia} />
				<AuthRoute exact path="/china" component={China} />
				<AuthRoute exact path="/vietnam" component={Vietnam} />
				<AuthRoute exact path="/thailand" component={Thailand} />
			</BrowserRouter>
		)
	}
}

export default Router