import { Grid } from "@material-ui/core";
import React, { Component } from "react";

import "../styles/404.css";

export interface INotFoundPageProps {
	location: {
		hash: string
		pathname: string
		search: string
	}
}

export  default class NotFoundPage extends Component<INotFoundPageProps> {
	render() {
		return (
			<Grid
				container
				alignItems="center"
				direction="column"
				justify="center">
					<div id="notfound">
						<div className="notfound">
							<div className="notfound-404">
								<h1>
									4
									<span>0</span>
									4
								</h1>
							</div>
							<h2>{ this.props.location.pathname } doesn't exist</h2>
						</div>
					</div>
			</Grid>
		);
	}
}
