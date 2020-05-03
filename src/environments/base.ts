export interface IEnv {
	apiBaseUrl: string
	development: boolean
	production: boolean
	staging: boolean
	tests?: ITestEnv
};

export interface ITestEnv {
	badVerificationToken: string
	verificationToken: string
}

const baseEnv = (): IEnv => ({
	apiBaseUrl: "https://api-staging.lockalize.com",
	development: true,
	production: false,
	staging: false,
});

export default baseEnv;
