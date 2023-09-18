import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.getByTestId('demoGame').click();
  await page.getByTestId('homeKickoff').click();
  await page.getByTestId('kicker-player-5').click();
  await page.getByTestId('returner-player-5').click();
  await page.getByTestId('finishTagging').click();

  // Run Fumble
  await page.getByTestId('run').click();
  await page.getByTestId('rusher-player-3').click();
  await page.getByTestId('fumble').click();
  await page.getByTestId('recoveredByHome').click();
  await page.getByTestId('forceFumble-player-16').click();
  await page.getByTestId('fumbleRecovered-player-20').click();
  await page.getByTestId('finishTagging').click();


  await page.getByTestId('openGamePlayList').click();
});
