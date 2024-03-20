import {Page} from "@playwright/test";

/**
 * Instruct to wait until Angular has finished rendering and has no outstanding $http
 * or $timeout calls before continuing.
 *
 * https://playwright.dev/docs/protractor#polyfilling-waitforangular
 * https://github.com/microsoft/playwright/issues/8433
 *
 * Voir aussi waitForAnimationEnd
 * https://github.com/microsoft/playwright/issues/15660
 *
 * @param page
 */
export async function waitForAngular(page: Page) {
  await page.evaluate(async () => {
    // @ts-expect-error
    if (window.getAllAngularTestabilities) {
      // @ts-expect-error
      await Promise.all(window.getAllAngularTestabilities().map(whenStable));
      // @ts-expect-error
      async function whenStable(testability) {
        return new Promise(res => testability.whenStable(res));
      }
    }
  });
}
