import {waitForAngular} from "./waitForAngular";

export async function finishTagging(page) {
  await waitForAngular(page)
  await page.getByTestId('finishTagging').click();
  await waitForAngular(page)
}
