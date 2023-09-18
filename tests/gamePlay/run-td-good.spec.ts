import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('http://localhost:4200/');
  await page.getByTestId('demoGame').click();
  await page.getByTestId('homeKickoff').click();
  await page.getByTestId('kicker-player-5').click();
  await page.getByTestId('returner-player-5').click();
  await page.getByTestId('returner-player-5').click();
  await page.getByTestId('finishTagging').click();


  // Run touchdown
  await page.getByTestId('run').click();
  await page.getByTestId('rusher-player-3').click();
  await page.getByTestId('touchdown').click();
  await page.getByTestId('finishTagging').click();
  // extraPt
  await page.getByTestId('extraPt').click();
  await page.getByTestId('kicker-player-5').click();
  await page.getByTestId('good').click();
  await page.getByTestId('finishTagging').click();

  await page.getByTestId('openGamePlayList').click();
});
