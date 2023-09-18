import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:4200/');

  // Kick off
  await page.getByTestId('demoGame').click();
  await page.getByTestId('homeKickoff').click();
  await page.getByTestId('kicker-player-5').click();
  await page.getByTestId('returner-player-6').click();
  await page.getByTestId('tackler-player-17').click();
  await page.getByTestId('tackler-player-19').click();
  await page.getByTestId('caughtOn').getByTestId('wheelEdit').click();
  await page.getByTestId('wheelBtn1').click();
  await page.getByTestId('wheelBtn6').click();
  await page.getByTestId('wheelOk').click();
  await page.getByTestId('returnedTo').getByTestId('wheelEdit').click();
  await page.getByTestId('wheelBtn3').click();
  await page.getByTestId('wheelBtn7').click();
  await page.getByTestId('wheelOk').click();
  await page.getByTestId('finishTagging').click();


  // Run
  await page.getByTestId('run').click();
  await page.getByTestId('rusher-player-5').click();
  await page.getByTestId('tackler-player-17').click();
  await page.getByTestId('tackler-player-27').click();
  await page.getByTestId('selectGain').getByTestId('wheelEdit').click();
  await page.getByTestId('wheelBtn7').click();
  await page.getByTestId('wheelOk').click();
  await page.getByTestId('hashL').click();
  await page.getByTestId('finishTagging').click();

  // Run devrait présélectionner hashL
  await page.getByTestId('run').click();
  await page.getByTestId('rusher-player-4').click();
  await page.getByTestId('tackler-player-17').click();
  await page.getByTestId('tackler-player-19').click();
  await page.getByTestId('selectGain').getByTestId('wheelEdit').click();
  await page.getByTestId('wheelBtn2').click();
  await page.getByTestId('wheelOk').click();
  await page.getByTestId('finishTagging').click();

  // Run
  await page.getByTestId('run').click();
  await page.getByTestId('rusher-player-8').click();
  await page.getByTestId('tackler-player-27').click();
  await page.getByTestId('selectGain').getByTestId('wheelEdit').click();
  await page.getByTestId('wheelBtn1').click();
  await page.getByTestId('wheelBtnPlusMoins').click();
  await page.getByTestId('wheelOk').click();
  await page.getByTestId('hashR').click();
  await page.getByTestId('finishTagging').click();

  // Penalty penaltyForAway repeatLastDown yard5
  await page.getByTestId('run').click();
  await page.getByTestId('rusher-player-4').click();
  await page.getByTestId('penalty').click();
  await page.getByTestId('penaltyForAway').click();
  await page.getByTestId('yard5').click();
  await page.getByTestId('repeatLastDown').click();
  await page.getByTestId('savePenalty').click();

  // Penalty penaltyForHome repeatLastDown yard5
  await page.getByTestId('run').click();
  await page.getByTestId('rusher-player-4').click();
  await page.getByTestId('penalty').click();
  await page.getByTestId('penaltyForHome').click();
  await page.getByTestId('repeatLastDown').click();
  await page.getByTestId('yard5').click();
  await page.getByTestId('savePenalty').click();

  // Penalty penaltyForHome firstDown yard10
  await page.getByTestId('run').click();
  await page.getByTestId('rusher-player-4').click();
  await page.getByTestId('penalty').click();
  await page.getByTestId('firstDown').click();
  await page.getByTestId('yard10').click();
  await page.getByTestId('savePenalty').click();

  // Penalty loosDown firstDown yard15
  await page.getByTestId('run').click();
  await page.getByTestId('rusher-player-4').click();
  await page.getByTestId('penalty').click();
  await page.getByTestId('loosDown').click();
  await page.getByTestId('yard15').click();
  await page.getByTestId('savePenalty').click();

  // Bogue SF?!
  await page.getByTestId('openGamePlayList').click();

});
