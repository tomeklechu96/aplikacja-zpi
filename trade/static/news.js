const puppeteer = require('puppeteer');

async function scrapeProduct(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    
    const [el] = await page.$x('//*[@id="landingImage"]');
    const src = await el.getProperty('src')
    const srcTxt = await src.jsonValue();

    const [el2] = await page.$x('//*[@id="productTitle"]');
    const txt = await el2.getProperty('textContent')
    const rawTxt = await txt.jsonValue();

    const [el3] = await page.$x('//*[@id="priceblock_dealprice"]');
    const price = await el3.getProperty('textContent')
    const priceTxt = await price.jsonValue();

    console.log({srcTxt, rawTxt, priceTxt});

    browser.close()
}

scrapeProduct('https://www.amazon.de/ASUS-Computer-Screenpad-UX434FLC-A5179T-i7-10510U/dp/B083SXFQC4?ref_=Oct_DLandingS_D_c57e9629_61&smid=A3JWKAKR8XB7XF');