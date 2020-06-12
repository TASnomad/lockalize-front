import puppeteer, { Browser, Page } from "puppeteer";
import { Mockiavelli } from "mockiavelli";

import testEnv from "../environments/test";

describe("Verify page tests", () => {
	let browser: Browser;
	let page: Page;

	beforeAll(async () => {
		browser = await puppeteer.launch({
			headless: !!process.env.CI,
		});
		page = await browser.newPage();
	});

	afterAll(async () => {
		await page.close();
		await browser.close();
	});

	test("Verify page with an invalid token", async () => {
		const mockiavelli = await Mockiavelli.setup(page);
		const verifMock = mockiavelli.mock({ method: "GET", url: "https://api-staging.lockalize.com/verify/:token" }, { status: 400, body: {
			statusCode: 400,
			message: "No users found"
		} });

		await page.goto(`http://localhost:3000/verify/${testEnv.tests?.badVerificationToken}`);
		await verifMock.waitForRequest();
		const errText = await page.evaluate(() => document.querySelector(".teaser h3")?.textContent);
		expect(errText).toBeDefined();
		expect(errText).toMatch("Oops");
		await page.close();
	}, 60000);

	test("Verify page with a valid token", async () => {
		page = await browser.newPage();
		const mockiavelli = await Mockiavelli.setup(page);
		const verifMock = mockiavelli.mock({ method: "GET", url: "https://api-staging.lockalize.com/verify/:token" }, { status: 200 });

		await page.goto(`http://localhost:3000/verify/${testEnv.tests?.verificationToken}`);
		await verifMock.waitForRequest();
		const errText = await page.evaluate(() => document.querySelector(".teaser h3")?.textContent);

		expect(errText).toBeDefined();
		expect(errText).toMatch("verified");
		await page.close();
	}, 60000);

	test("Verify page when the account is already validated", async () => {
		page = await browser.newPage();
		const mockiavelli = await Mockiavelli.setup(page);
		const verifMock = mockiavelli.mock({ method: "GET", url: "https://api-staging.lockalize.com/verify/:token" }, { status: 409, body: {
			statusCode: 409,
			message: "Account already verified"
		} });

		await page.goto(`http://localhost:3000/verify/${testEnv.tests?.verificationToken}`);
		await verifMock.waitForRequest();
		const errText = await page.evaluate(() => document.querySelector(".teaser h3")?.textContent);

		expect(errText).toBeDefined();
		expect(errText).toMatch("Oops");
		await page.close();
	}, 60000);
});
