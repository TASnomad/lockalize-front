import { Grid, Typography } from "@material-ui/core";
import React, { Component } from "react";

import Logo from "../assets/logo.svg";
import "../styles/home.css";

export interface HomepageProps {}

export default class Homepage extends Component<HomepageProps> {
	render() {
		return (
			<Grid
				container
				alignItems="center"
				direction="column"
				justify="center">
					<div id="main">
						<div className="main">
							<img src={ Logo } alt="Lockalize"/>
							<div className="teaser">
								<Typography component="h1">Lockalize</Typography>
							</div>
							<Typography component="h3">
								We're coming soon!!
							</Typography>
						</div>
					</div>
			</Grid>
		);
	}
}
