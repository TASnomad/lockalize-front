import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import NotFoundPage from "./pages/NotFound";
import VerifyPage from "./pages/Verify"

import EmptyComponent from "./components/Empty";
import Footer from "./components/Footer";


export default class App extends Component {
	render() {
		return (
			<>
				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={ HomePage } />
						<Route path="/verify/:token" component={ VerifyPage } />
						<Route path="/app" component={ EmptyComponent }></Route>
						<Route component={ NotFoundPage } />
					</Switch>
				</BrowserRouter>
				<Footer />
			</>
		);
	}
};
