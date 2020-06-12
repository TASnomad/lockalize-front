import puppeteer, { Browser, Page } from "puppeteer";

describe("Homepage test", () => {
	let browser: Browser;
	let page: Page;

	beforeAll(async () => {
		browser = await puppeteer.launch({
			headless: !!process.env.CI,
			args: [ "--no-sandbox", "--disable-setuid-sandbox" ],
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
		// await page.waitForSelector("button#android");

		await browser.close();
	}, 60000);
});
