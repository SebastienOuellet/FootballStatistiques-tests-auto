import {test, expect, Page} from '@playwright/test';

test('Quart 1', async ({ page }) => {
  await page.goto('http://localhost:4200/');

  await expect(page).toHaveTitle(/FootballStats/);

  await page.getByTestId('demoGame').click();

  await page.getByTestId('homeKickoff').click();
  await page.getByTestId('kicker-player-12').click();
  await page.getByTestId('returner-player-53').click();
  await page.getByTestId('caughtOn').getByTestId('wheelEdit').click();
  await page.getByTestId('wheelBtn5').click();
  await page.getByTestId('wheelOk').click();
  await page.getByTestId('returnedTo').getByTestId('wheelEdit').click();
  await page.getByTestId('wheelBtn3').click();
  await page.getByTestId('wheelBtn4').click();
  await page.getByTestId('wheelOk').click();
  await page.getByTestId('hashR').click();
  await page.getByTestId('finishTagging').click();

  await page.getByTestId('completePass').click();
  await page.getByTestId('passer-player-51').click();
  await page.getByTestId('receiver-player-53').click();
  await page.getByTestId('tackler-player-7').click();
  await page.getByTestId('selectSpot').getByTestId('wheelEdit').click();
  await page.getByTestId('wheelBtnPlusMoins').click();
  await page.getByTestId('wheelBtn3').click();
  await page.getByTestId('wheelBtn9').click();
  await page.getByTestId('wheelOk').click();
  await page.getByTestId('hashL').click();
  await page.getByTestId('finishTagging').click();

  await page.getByTestId('run').click();
  await page.getByTestId('rusher-player-53').click();
  await page.getByTestId('tackler-player-7').click();
  await page.getByTestId('selectGain').getByTestId('wheelEdit').click();
  await page.getByTestId('wheelBtn2').click();
  await page.getByTestId('wheelOk').click();
  await page.getByTestId('hashM').click();
  await page.getByTestId('finishTagging').click();

  await page.getByTestId('run').click();
  await page.getByTestId('rusher-player-53').click();
  await page.getByTestId('tackler-player-7').click();
  await page.getByTestId('selectGain').getByTestId('wheelEdit').click();
  await page.getByTestId('wheelBtnPlusMoins').click();
  await page.getByTestId('wheelBtn1').click();
  await page.getByTestId('wheelOk').click();
  await page.getByTestId('hashR').click();
  await page.getByTestId('finishTagging').click();

  await page.getByTestId('punt').click();
  await page.getByTestId('kicker-player-62').click();
  await page.getByTestId('returner-player-3').click();
  await page.getByTestId('caughtOn').getByTestId('wheelEdit').click();
  await page.getByTestId('wheelBtn3').click();
  await page.getByTestId('wheelBtn5').click();
  await page.getByTestId('wheelOk').click();
  await page.getByTestId('touchdown').click();
  await page.getByTestId('finishTagging').click();

  await page.getByTestId('extraPt').click();
  await page.getByTestId('kicker-player-12').click();
  await page.getByTestId('good').click();
  await page.getByTestId('finishTagging').click();

  // Kick off
  await page.getByTestId('wheelEdit').click();
  await page.getByTestId('wheelBtn5').click();
  await page.getByTestId('wheelBtn0').click();
  await page.getByTestId('wheelBtnPlusMoins').click();
  await page.getByTestId('wheelOk').click();
  await page.getByTestId('homeKickoff').click();
  await page.getByTestId('kicker-player-12').click();
  await page.getByTestId('returner-player-54').click();
  await page.getByTestId('caughtOn').getByTestId('wheelEdit').click();
  await page.getByTestId('wheelBtn1').click();
  await page.getByTestId('wheelOk').click();
  await page.getByTestId('returnedTo').getByTestId('wheelEdit').click();
  await page.getByTestId('wheelBtn1').click();
  await page.getByTestId('wheelBtn9').click();
  await page.getByTestId('wheelOk').click();
  await page.getByTestId('tackler-player-2').click();
  await page.getByTestId('finishTagging').click();

  await page.getByTestId('run').click();
  await page.getByTestId('rusher-player-53').click();
  await page.getByTestId('tackler-player-9').click();
  await page.getByTestId('selectGain').getByTestId('wheelEdit').click();
  await page.getByTestId('wheelBtn2').click();
  await page.getByTestId('wheelOk').click();
  await page.getByTestId('finishTagging').click();

  await page.getByTestId('qBSack').click();
  await page.getByTestId('tackler-player-10').click();
  await page.getByTestId('tackler-player-11').click();
  await page.locator('app-select-gain').getByTestId('selectGain').getByTestId('wheelEdit').click();
  await page.getByTestId('wheelBtnPlusMoins').click();
  await page.getByTestId('wheelBtn1').click();
  await page.getByTestId('wheelBtn3').click();
  await page.getByTestId('wheelOk').click();
  await page.getByTestId('finishTagging').click();

  await page.getByTestId('preSnapPenalty').click();
  await page.getByTestId('penaltyForAway').click();
  await page.getByTestId('repeatLastDown').click();
  await page.getByTestId('yard5').click();
  await page.getByTestId('savePenalty').click();

  // Escargot  3 / 26 / -3
  // 14:51

  await page.getByText('edit_note').click()
  await page.getByText('edit_note').click()
});

async function setWheelValue(page, wheelEl, value: String) {
  await page.dblclick(`${wheelEl} .picker-handle-layer .picker-middle`);
  await page.getByTestId('wheelBtnEffacer').click()
  await page.fill('app-wheel-selector-set-value-dialog', value);
  await page.click('app-wheel-selector-set-value-dialog [data-testid="save"]');
  await page.getByTestId('wheelOk').click()
}

async function changeWheel(page, wheelEl, modificator) {
  let clickSection = modificator < 0 ? '.picker-bottom' : '.picker-top';
  if (modificator < 0) modificator *= -1;
  for (let i = 0; i < modificator; i++) {
    await page.click(`${wheelEl} ${clickSection}`);
  }
}
