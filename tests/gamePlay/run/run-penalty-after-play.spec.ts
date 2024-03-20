import { test, expect } from '@playwright/test';
import { base } from '../../commands/base';

test('test', async ({ page }) => {
  await page.goto(base.url);
  await page.getByTestId('demoGame').click();
  await page.getByTestId('homeKickoff').click();
  await page.getByTestId('kicker-player-12').click();
  await page.getByTestId('returner-player-53').click();
  await page.getByTestId('finishTagging').click();

  // Run Penalty after play
  await page.getByTestId('run').click();
  await page.getByTestId('rusher-player-54').click();
  await page.getByTestId('penaltyAfterPlay').click();
  await page.getByTestId('repeatLastDown').click();
  await page.getByTestId('yard5').click();
  await page.getByTestId('savePenalty').click();
  await page.getByTestId('finishTagging').click();

  await page.getByTestId('openGamePlayList').click();
});
