import axe from 'axe-core';
import puppeteer from 'puppeteer';

async function runTest() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Inject axe-core into the page
    await page.evaluateOnNewDocument(axe.source);

    // Navigate to the page
    await page.goto(process.env.PREVIEW_URL, { waitUntil: 'networkidle0' });

    // Run the accessibility test
    const results = await page.evaluate(() => {
        return new Promise((resolve) => {
            axe.run(document, {
                resultTypes: ['violations'],
                rules: {
                    'color-contrast': { enabled: true },
                    'document-title': { enabled: true },
                    'html-has-lang': { enabled: true },
                    'image-alt': { enabled: true },
                    'link-name': { enabled: true },
                    'meta-viewport': { enabled: true }
                }
            }, resolve);
        });
    });

    await browser.close();

    if (results.violations.length > 0) {
        console.error('Accessibility violations found:', JSON.stringify(results.violations, null, 2));
        process.exit(1);
    } else {
        console.log('No accessibility violations found!');
    }
}

runTest().catch(error => {
    console.error('Test failed:', error);
    process.exit(1);
}); 