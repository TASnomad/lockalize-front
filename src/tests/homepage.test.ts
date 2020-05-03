import puppeteer, { Browser, Page } from "puppeteer";

import testEnv from "../environments/test";

describe("Homepage test", () => {
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

	test("Homepage is loaded", async () => {

		await page.goto("http://localhost:3000/");
		await page.waitForSelector("div.teaser");

		await browser.close();
	}, 60000);
});


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
		await page.goto(`http://localhost:3000/verify/${testEnv.tests?.badVerificationToken}`);
		const x = await page.waitForResponse((r) => r.url().indexOf("/verify") > -1);
		const errText = await page.evaluate(() => document.querySelector(".teaser h3")?.textContent);

		expect(x.status()).toEqual(400);
		expect(errText).toBeDefined()
		expect(errText).toMatch("Oops")
	}, 60000);

	test("Verify page with an invalid token", async () => {
		await page.goto(`http://localhost:3000/verify/${testEnv.tests?.verificationToken}`);
		const x = await page.waitForResponse((r) => r.url().indexOf("/verify") > -1);
		const errText = await page.evaluate(() => document.querySelector(".teaser h3")?.textContent);

		expect(x.status()).toEqual(200);
		expect(errText).toBeDefined()
		expect(errText).toMatch("verified")
	}, 60000);
});
