import {test, expect, Page} from '@playwright/test';

test('Grasset_PlaylistData_2023-06-08', async ({ page }) => {
  await page.goto('http://staging.sportsstatistiques.techqueb.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/StatsFootball/);
  await page.click('[data-testid="game-list"] .demo');

  // 1 - KickOff
  await page.getByTestId('homeKickoff').click();
  await page.click('app-select-kicker [data-testid="player-7"]');
  await page.click('app-select-returner [data-testid="player-13"]');
  await setWheelValue(page, '[data-testid="caughtOn"]', '16'); // 49
  await setWheelValue(page, '[data-testid="returnedTo"]', '31'); // 15
  await page.click('[data-testid="hashR"]');

  // FIXME bug si penalty
  // await page.click('[data-testid="penalty"]');
  // await page.click('[data-testid="firstDown"]');
  // await setWheelValue(page, '[data-testid="penaltySpot"]', '21');
  // await page.click('[data-testid="save"]');

  await page.click('[data-testid="finishTagging"]');
  // Patch
  await page.click('[data-testid="resume"]');
  await setWheelValue(page, 'app-dialog-resume-game [data-testid="spotTheBall"]', '-21'); // 49
  await page.click('[data-testid="finishResume"]');


  // 2 - Pass complete
  await page.click('[data-testid="completePass"]')
  await page.click('app-select-passer [data-testid="player-3"]')
  await page.click('app-select-receiver [data-testid="player-21"]')
  await setWheelValue(page, '[data-testid="gain"]', '19')
  await page.click('[data-testid="hashR"]')
  await page.click('[data-testid="finishTagging"]')

  // 3 - Run Rush
  await page.click('[data-testid="run"]')
  await page.click('app-select-rusher [data-testid="player-8"]')
  await setWheelValue(page, '[data-testid="gain"]', '2')
  await page.click('[data-testid="hashL"]')
  await page.click('[data-testid="finishTagging"]')

  // 4 - Pass complete
  await page.click('[data-testid="completePass"]')
  await page.click('app-select-passer [data-testid="player-3"]')
  await page.click('app-select-receiver [data-testid="player-21"]')
  await setWheelValue(page, '[data-testid="gain"]', '9')
  await page.click('[data-testid="hashL"]')
  await page.click('[data-testid="finishTagging"]')

  // 5 - Pass complete
  await page.click('[data-testid="completePass"]')
  await page.click('app-select-passer [data-testid="player-3"]')
  await page.click('app-select-receiver [data-testid="player-21"]')
  await setWheelValue(page, '[data-testid="gain"]', '2')
  await page.click('[data-testid="hashL"]')
  await page.click('[data-testid="finishTagging"]')

  // 6 - Run Rush
  await page.click('[data-testid="run"]')
  await page.click('app-select-rusher [data-testid="player-8"]')
  await setWheelValue(page, '[data-testid="gain"]', '4')
  await page.click('[data-testid="hashR"]')
  await page.click('[data-testid="finishTagging"]')

  // 7 - Pass complete
  await page.click('[data-testid="completePass"]')
  await page.click('app-select-passer [data-testid="player-3"]')
  await page.click('app-select-receiver [data-testid="player-21"]')
  await setWheelValue(page, '[data-testid="gain"]', '13')
  await page.click('[data-testid="hashL"]')
  await page.click('[data-testid="finishTagging"]')


  await page.getByText('edit_note').click()
});


test('get started link', async ({ page }) => {
  // await page.goto('https://playwright.dev/');
  //
  // // Click the get started link.
  // await page.getByRole('link', { name: 'Get started' }).click();
  //
  // // Expects page to have a heading with the name of Installation.
  // await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


async function setWheelValue(page, wheelEl, value: String) {
  await page.dblclick(`${wheelEl} .picker-handle-layer .picker-middle`);
  await page.getByTestId('btnEffacer').click()
  await page.type('app-wheel-selector-set-value-dialog', value);
  await page.click('app-wheel-selector-set-value-dialog [data-testid="save"]');
}

async function changeWheel(page, wheelEl, modificator) {
  let clickSection = modificator < 0 ? '.picker-bottom' : '.picker-top';
  if (modificator < 0) modificator *= -1;
  for (let i = 0; i < modificator; i++) {
    await page.click(`${wheelEl} ${clickSection}`);
  }
}
