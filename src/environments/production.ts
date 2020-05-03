import { IEnv } from "./base";

const productionEnv = (): IEnv => ({
	apiBaseUrl: "https://api.lockalize.com",
	development: false,
	production: true,
	staging: false,
});

export default productionEnv;
