import {test, expect, Page} from '@playwright/test';
import {wait} from './commands/wait';
import {base} from "./commands/base";

test('test', async ({page}) => {
  await page.goto(base.url);
  await page.waitForLoadState('networkidle')

  await page.getByTestId('demoGame').click();

  await wait(2000);


  await page.waitForLoadState('networkidle')
  // await page.mouse.move(0, 0);
  // await mouse.wheel(deltaX, deltaY);

  await page.waitForTimeout(1000)

  // await scroll(page, -40)
  await scroll(page, 64)

  await page.waitForTimeout(2000)

  // await page.getByTestId('spotTheBall')
  // .getByTitle('Dblclick to edit (enter)')
  // .mouse.wheel(0, 20);
});

async function scroll(page: Page, change: number) {
  const SCROLL_UNIT = 132
  const scrollY = change * SCROLL_UNIT
  const spotTheBall = page.getByTestId('spotTheBall')

  await test.step('scrollWheel', async () => {
    await spotTheBall.locator('[data-type="middle"]').hover()
    // await page.locator('#item-to-be-dragged').hover();
    // await page.mouse.down();
    // await page.locator('#item-to-drop-at').hover();
    // await page.mouse.up();

    // await page.mouse.move(100, 100);
    console.log(scrollY)
    // await page.mouse.wheel(0, -6880); // 45 à 52 (142.8)

    const nb = (change < 0) ? change * -1 : change;
    const scrollOffset = (change < 0) ? SCROLL_UNIT * -1 : SCROLL_UNIT;

    for (let index = 0; index < nb; index++) {
      await page.mouse.wheel(0, scrollOffset)
      // await wait(1)
    }
    // await page.mouse.wheel(0, scrollY)
    // await page.mouse.wheel(0, 6700)
  }, { box: true })
}
