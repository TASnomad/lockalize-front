import { IEnv } from "./base";

const stagingEnv = (): IEnv => ({
	apiBaseUrl: "https://api-staging.lockalize.com",
	development: false,
	production: false,
	staging: true,
});

export default stagingEnv;
