import {
	// Button,
	Grid,
	Typography,
} from "@material-ui/core";
// import { Shop } from "@material-ui/icons";
import React, { Component } from "react";

import Logo from "../assets/logo.svg";
import "../styles/home.css";

export interface HomepageProps {}

export default class Homepage extends Component<HomepageProps> {
	private readonly PLAY_STORE_APP_URL = "https://play.google.com/store/apps/details?id=com.adolphinstudio.lockalize";

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
							{/* <Button id="android"
								onClick={ () => { window.open(this.PLAY_STORE_APP_URL, "_blank") } }
								size="large"
								startIcon={ <Shop /> }>
									Play Store
							</Button> */}
						</div>
					</div>
			</Grid>
		);
	}
}
