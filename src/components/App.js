import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from '../containers/Header';
import Home from '../containers/Home';
import Signup from '../containers/Signup';
import Login from '../containers/Login';
import Favorites from '../containers/Favorites';

export default class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<div className="container">
					<Route exact path="/" component={Home} />
					<Route path="/signup" component={Signup} />
					<Route path="/login" component={Login} />
					<Route path="/favorites" component={Favorites} />
				</div>
			</div>
		);
	}
}
