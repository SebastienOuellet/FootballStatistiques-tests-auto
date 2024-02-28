import {test, expect} from '@playwright/test';

test('Run', async ({page}) => {
  await page.goto('http://staging.sportsstatistiques.techqueb.com/');

  // Kick off
  await test.step('Kick off', async () => {
    await page.getByTestId('demoGame').click();
    await page.getByTestId('homeKickoff').click();
    await page.getByTestId('kicker-player-12').click();
    await page.getByTestId('returner-player-53').click();
    await page.getByTestId('tackler-player-1').click();
    await page.getByTestId('tackler-player-2').click();
    await page.getByTestId('caughtOn').getByTestId('wheelEdit').click();
    await page.getByTestId('wheelBtn1').click();
    await page.getByTestId('wheelBtn6').click();
    await page.getByTestId('wheelOk').click();
    await page.getByTestId('returnedTo').getByTestId('wheelEdit').click();
    await page.getByTestId('wheelBtn3').click();
    await page.getByTestId('wheelBtn7').click();
    await page.getByTestId('wheelOk').click();
    await page.getByTestId('finishTagging').click();
  })


  // Run
  await test.step('Run', async () => {
    await page.getByTestId('run').click();
    await page.getByTestId('rusher-player-53').click();
    await page.getByTestId('tackler-player-7').click();
    await page.getByTestId('tackler-player-8').click();
    await page.getByTestId('selectGain').getByTestId('wheelEdit').click();
    await page.getByTestId('wheelBtn7').click();
    await page.getByTestId('wheelOk').click();
    await page.getByTestId('hashL').click();
    await page.getByTestId('finishTagging').click();
  })

  // Run devrait présélectionner hashL
  await test.step('Run devrait présélectionner hashL', async () => {
    await page.getByTestId('run').click();
    await page.getByTestId('rusher-player-53').click();
    await page.getByTestId('tackler-player-7').click();
    await page.getByTestId('tackler-player-8').click();
    await page.getByTestId('selectGain').getByTestId('wheelEdit').click();
    await page.getByTestId('wheelBtn2').click();
    await page.getByTestId('wheelOk').click();
    await page.getByTestId('finishTagging').click();
  })

  // Run
  await test.step('Run', async () => {
    await page.getByTestId('run').click();
    await page.getByTestId('rusher-player-53').click();
    await page.getByTestId('tackler-player-7').click();
    await page.getByTestId('selectGain').getByTestId('wheelEdit').click();
    await page.getByTestId('wheelBtn1').click();
    await page.getByTestId('wheelBtnPlusMoins').click();
    await page.getByTestId('wheelOk').click();
    await page.getByTestId('hashR').click();
    await page.getByTestId('finishTagging').click();
  })

  // Penalty penaltyForAway repeatLastDown yard5
  await test.step('Penalty penaltyForAway repeatLastDown yard5', async () => {
    await page.getByTestId('run').click();
    await page.getByTestId('rusher-player-53').click();
    await page.getByTestId('penalty').click();
    await page.getByTestId('penaltyForAway').click();
    await page.getByTestId('yard5').click();
    await page.getByTestId('repeatLastDown').click();
    await page.getByTestId('savePenalty').click();
  })

  // Penalty penaltyForHome repeatLastDown yard5
  await test.step('Penalty penaltyForHome repeatLastDown yard5', async () => {
    await page.getByTestId('run').click();
    await page.getByTestId('rusher-player-53').click();
    await page.getByTestId('penalty').click();
    await page.getByTestId('penaltyForHome').click();
    await page.getByTestId('repeatLastDown').click();
    await page.getByTestId('yard5').click();
    await page.getByTestId('savePenalty').click();
  })

  // Penalty penaltyForHome firstDown yard10
  await test.step('Penalty penaltyForHome firstDown yard10', async () => {
    await page.getByTestId('run').click();
    await page.getByTestId('rusher-player-53').click();
    await page.getByTestId('penalty').click();
    await page.getByTestId('firstDown').click();
    await page.getByTestId('yard10').click();
    await page.getByTestId('savePenalty').click();
  })

  // Penalty loosDown firstDown yard15
  await test.step('Penalty loosDown firstDown yard15', async () => {
    await page.getByTestId('run').click();
    await page.getByTestId('rusher-player-53').click();
    await page.getByTestId('penalty').click();
    await page.getByTestId('loosDown').click();
    await page.getByTestId('yard15').click();
    await page.getByTestId('savePenalty').click();
  })

  // Bogue SF?!
  await test.step('openGamePlayList', async () => {
    await page.getByTestId('openGamePlayList').click();
  })

});
