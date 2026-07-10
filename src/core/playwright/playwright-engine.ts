import { chromium } from "@playwright/test";

export class PlaywrightEngine {

    async execute(): Promise<void> {

        console.log("🌐 Launching Chromium...");

        const browser = await chromium.launch({
            headless: false
        });

        const page = await browser.newPage();

        console.log("🌍 Opening Playwright website...");

        await page.goto("https://playwright.dev");

        console.log("📸 Capturing Screenshot...");

        await page.screenshot({
            path: "playwright-report/homepage.png",
            fullPage: true
        });

        console.log("✅ Screenshot saved");

        await browser.close();

        console.log("🛑 Browser Closed");

    }

}