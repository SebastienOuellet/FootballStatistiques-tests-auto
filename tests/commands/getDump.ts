import {Page} from "@playwright/test";

export async function getDump(page: Page) {
  return await page.evaluate(() => {
    const dumpStr = window.localStorage.getItem('dump') || '';
    const dump = JSON.parse(dumpStr);
    // console.log('dump', dump);
    return dump;
  });
}
