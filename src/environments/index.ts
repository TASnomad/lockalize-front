import baseEnv, { IEnv } from "./base";
import productionEnv from "./production";
import testEnv from "./test";
import stagingEnv from "./staging";

export * from "./base";
export * from "./production";
export * from "./staging";
export * from "./test";

const getEnvConfig = (): IEnv => {
	const env = process.env.REACT_APP_STAGE as string;

	switch (env) {
		case "development":
			return baseEnv();
		case "production":
			return productionEnv();
		case "test":
			return testEnv;
		case "staging":
			return stagingEnv();
		default:
			return productionEnv();
	}
};

export default getEnvConfig;
