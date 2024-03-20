import {Page} from "@playwright/test";
import {waitForAngular} from "./waitForAngular";

type ResumeOption = {
  team?: 'home' | 'away';
  quarter?: 1 | 2 | 3 | 4 | 5;
  hash?: 'L' | 'M' | 'R';
  down?: 1 | 2 | 3 | 4;
  distance?: number;
  yardLine?: number;
};

export async function resume (page: Page, options: ResumeOption) {
  await page.getByTestId('resume').click()
  await waitForAngular(page)

  if (options.team) {
    const possession = (options.team === 'home') ? 'possessionForHome' : 'possessionForHome'
    await page.getByTestId(possession).click()
  }
  if (options.quarter) {
    await page.getByTestId('quarter' + options.quarter).click()
  }
  if (options.hash) {
    await page.getByTestId('hash' + options.hash).click()
  }
  if (options.down) {
    await page.getByTestId('down' + options.down).click()
  }
  if (options.distance) {
    await setWheelValue(page, 'distance', options.distance);
  }
  if (options.yardLine) {
    await setWheelValue(page, 'spotTheBall', options.yardLine);
  }

  await page.getByTestId('finishResume').click()
  await waitForAngular(page)
}

async function setWheelValue(page: Page, wheelDataTestId: string, value: number) {
  const wheel = page.getByTestId(wheelDataTestId)

  await wheel.getByTestId('wheelEdit').click()
  await waitForAngular(page)

  const wheelDialog = page.locator('app-wheel-selector-set-value-dialog')
  await wheelDialog.getByTestId('value').pressSequentially(value.toString())

  await wheelDialog.getByTestId('wheelOk').click()
  await waitForAngular(page)
}
