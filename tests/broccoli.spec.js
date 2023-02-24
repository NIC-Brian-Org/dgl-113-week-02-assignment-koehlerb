import path from 'path';

describe('index.html', () => {
  beforeAll(async () => {
    const URL = `file:///${path.resolve(__dirname, '../docs/index.html')}`;
    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto(URL);
  });

  it('add broccoli', async () => {
    await page.click('#emptybutton');
    await page.click('#broccolibutton');

    await page.waitForSelector('#cart');
    const element = await page.$('#cart');
    const value = await page.evaluate(el => el.innerText, element);
    expect(value).toEqual('broccoli');
  });
});
