import axe from 'axe-core';
import puppeteer from 'puppeteer';

async function runTest() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(process.env.PREVIEW_URL);
    const results = await page.evaluate(() => axe.run());
    await browser.close();

    if (results.violations.length > 0) {
        console.error('Accessibility violations found:', results.violations);
        process.exit(1);
    }
}

runTest(); 