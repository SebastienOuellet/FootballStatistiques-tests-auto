import {waitForAngular} from "./waitForAngular";

export async function savePenalty(page) {
  await page.getByTestId('savePenalty').click();
  await waitForAngular(page)
}
