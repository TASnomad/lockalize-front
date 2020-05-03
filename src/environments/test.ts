import { IEnv, ITestEnv } from "./base";
import stagingEnv from "./staging";


const tests: ITestEnv = {
	badVerificationToken: "nope",
	verificationToken: "98c85d44cb9a57028bca78d03d682eb8f7c738eb56d49a4b37b95364d07cb8af3f30561f9e0fa87f0f3440bf41c1a176d5543ed84dcd995d5ec515b5"
}

const testEnv: IEnv = Object.assign({}, { tests } as IEnv, stagingEnv);

export default testEnv;
