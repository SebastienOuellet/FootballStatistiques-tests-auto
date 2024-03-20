import { test, expect } from '@playwright/test';
import { base } from '../../commands/base';
import {waitForAngular} from "../../commands/waitForAngular";
import {login} from "../../commands/login";

test('test', async ({ page }) => {
  await page.goto(base.url);
  await waitForAngular(page)

  if (await page.locator('app-unauthenticated').isVisible()) {
    await login(page)
  }

  await page.getByTestId('demoGame').click();
  await page.getByTestId('homeKickoff').click();
  await page.getByTestId('kicker-player-12').click();
  await page.getByTestId('returner-player-53').click();
  // await page.getByTestId('returner-player-53').click();
  await page.getByTestId('finishTagging').click();


  // Run touchdown
  await page.getByTestId('run').click();
  await page.getByTestId('rusher-player-54').click();
  await page.getByTestId('touchdown').click();
  await page.getByTestId('finishTagging').click();
  // extraPt
  await page.getByTestId('extraPt').click();
  await page.getByTestId('kicker-player-62').click();
  await page.getByTestId('good').click();
  await page.getByTestId('finishTagging').click();

  await page.getByTestId('openGamePlayList').click();
});
