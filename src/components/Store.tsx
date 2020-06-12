import React, { Component } from "react";
import { Button, Typography } from "@material-ui/core";
import { Shop } from "@material-ui/icons";

export default class StoreComponent extends Component {
	private readonly PLAY_STORE_APP_URL = "https://play.google.com/store/apps/details?id=com.adolphinstudio.lockalize";

	render() {
		return (
			<div id="main">
				<div className="main">
					<div className="teaser">
						<Typography component="h2">
							Lockalize App available at:
						</Typography>
						<Button
							onClick={ () => { window.open(this.PLAY_STORE_APP_URL, "_blank") } }
							size="large"
							startIcon={ <Shop /> }>
							 Play Store
						</Button>
					</div>
				</div>
			</div>
		);
	}
}
