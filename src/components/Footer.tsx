import React, { Component } from "react";
import { version } from "../../package.json";

import "../styles/common.css";
import { HeartIcon } from "./HeartIcon";
import { Typography } from "@material-ui/core";

export interface FooterProps {};

export default class Footer extends Component<FooterProps> {
	render() {
		return (
			<footer className="footer">
				<Typography variant="subtitle2" gutterBottom>
					Lockalize v{ version } &copy;{ (new Date()).getFullYear() }
					<br />
					Made with <HeartIcon /> in Paris
				</Typography>
			</footer>
		);
	}
}
