import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.getByTestId('demoGame').click();
  await page.getByTestId('homeKickoff').click();
  await page.getByTestId('kicker-player-5').click();
  await page.getByTestId('finishTagging').click();

  // Run SF
  await page.getByTestId('run').click();
  await page.getByTestId('rusher-player-3').click();
  await page.getByTestId('safety').click();
  await page.getByTestId('finishTagging').click();


  await page.getByTestId('openGamePlayList').click();
});
