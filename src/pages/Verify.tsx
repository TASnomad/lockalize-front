import { Grid } from "@material-ui/core";
import React, { Component } from "react";

import getEnvConfig, { IEnv } from "../environments";
import { Success, Failure, Loader } from "../components/Verifies";

export interface VerifypageProps {
	match: {
		params: { token: string }
	}
}

interface VerifypageState {
	code: number,
	error?: string,
	isLoading: boolean,
	success: boolean,
}

export default class Verifypage extends Component<VerifypageProps, VerifypageState> {

	private apiConfig: IEnv;
	private token: string;

	constructor(props: VerifypageProps) {
		super(props);
		this.token = this.props.match.params.token;
		this.apiConfig = getEnvConfig();
		this.state = {
			code: -1,
			isLoading: true,
			success: false,
		};
	}

	async componentDidMount() {
		try {
			const res = await fetch(`${this.apiConfig.apiBaseUrl}/verify/${this.token}`);
			const code = res.status;
			let success = false;
			let error:string|undefined

			if (code === 200) {
				success = true;
				setTimeout(() => {
					// @ts-ignore
					this.props.history.push("/app");
				}, 5000);
			} else if (code >= 400 ) {
				error = "This email can't be validated!";
			}
			this.setState({ success, error, code, isLoading: false });
		} catch (err) {
			this.setState({
				isLoading: false,
				error: err.message || err,
			});
		}
	}

	render() {
		let toRender;

		if (this.state.isLoading) {
			toRender = <Loader />
		} else {
			toRender = this.state.success ? <Success /> : <Failure message={ this.state.error || "Unknown error" } />
		}

		return (
			<Grid
				container
				alignItems="center"
				direction="column"
				justify="center">
					{ toRender }
			</Grid>
		);
	}
}
