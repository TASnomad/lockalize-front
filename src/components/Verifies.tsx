import { CircularProgress, Typography } from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
import WarningIcon from "@material-ui/icons/Warning";
import React, { Component } from "react";

import "../styles/home.css";

interface FailureProps {
	message: string
}

export class Success extends Component {
	render() {
		return (
			<div id="main">
				<div className="main">
					<div className="teaser">
						<DoneIcon />
						<Typography component="h3">
							Your Lockalize account is now verified!
						</Typography>
						<Typography>
							You will be redirected to the app in 5 seconds
						</Typography>
					</div>
				</div>
			</div>
		);
	}
}

export class Failure extends Component<FailureProps> {
	render() {
		return (
			<div id="main">
				<div className="main">
					<div className="teaser">
						<WarningIcon />
						<Typography component="h3">
							Oops, something went wrong...
						</Typography>
						<Typography>
							{ this.props.message }
							<br />
							Try again later
						</Typography>
					</div>
				</div>
			</div>
		);
	}
}

export class Loader extends Component {
	render() {
		return (
			<div id="main">
				<div className="main">
					<div className="teaser">
						<CircularProgress />
					</div>
				</div>
			</div>
		);
	}
}
