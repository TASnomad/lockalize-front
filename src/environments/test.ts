import { IEnv, ITestEnv } from "./base";
import stagingEnv from "./staging";
import * as crypto from "crypto";


const tests: ITestEnv = {
	badVerificationToken: crypto.randomBytes(60).toString("hex"),
	verificationToken: crypto.randomBytes(60).toString("hex"),
}

const testEnv: IEnv = Object.assign({}, { tests } as IEnv, stagingEnv);

export default testEnv;
