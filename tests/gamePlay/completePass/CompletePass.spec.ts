import { test, expect } from '@playwright/test';

test.use({
  viewport: {
    height: 720,
    width: 1080
  }
});

test('test', async ({ page }) => {
  await page.goto('https://staging.sportsstatistiques.techqueb.com');


  await page.getByText('Demo Game').click();
  await page.getByTestId('homeKickoff').click();
  await page.getByTestId('kicker-player-12').click();
  await page.getByTestId('returner-player-53').click();
  await page.getByTestId('finishTagging').click();

  // Complete pass simple
  await page.getByTestId('completePass').click();
  await page.getByTestId('passer-player-51').click();
  await page.getByTestId('tackler-player-7').click();
  await page.getByTestId('receiver-player-53').click();
  await page.getByTestId('tackler-player-8').click();
  await page.getByTestId('selectGain').getByTestId('wheelEdit').click();
  await page.getByTestId('wheelBtn1').click();
  await page.getByTestId('wheelBtn0').click();
  await page.getByTestId('wheelOk').click();
  await page.getByTestId('finishTagging').click();
  await page.getByTestId('openGamePlayList').click();
  await page.getByTestId('dump').click();

  // Complete pass
  await page.getByTestId('completePass').click();
  await page.getByTestId('passer-player-51').click();
  await page.getByTestId('receiver-player-53').click();
  await page.getByTestId('tackler-player-7').click();
  await page.getByTestId('tackler-player-8').click();
  await page.getByTestId('hashL').click();
  await page.getByTestId('safety').click();
  await page.getByTestId('finishTagging').click();
  await page.getByTestId('openGamePlayList').click();
  await page.getByTestId('dump').click();

  // Complete pass
  await page.getByTestId('completePass').click();
  await page.getByTestId('passer-player-1').click();
  await page.getByTestId('receiver-player-3').click();
  await page.getByTestId('tackler-player-57').click();
  await page.getByTestId('hashR').click();
  await page.getByTestId('touchdown').click();
  await page.getByTestId('finishTagging').click();
  await page.getByTestId('extraPt').click();
  await page.getByTestId('kicker-player-12').click();
  await page.getByTestId('good').click();
  await page.getByTestId('finishTagging').click();
  await page.getByTestId('openGamePlayList').click();
  await page.getByTestId('dump').click();

  await page.getByTestId('homeKickoff').click();
  await page.getByTestId('kicker-player-12').click();
  await page.getByTestId('tackler-player-1').click();
  await page.getByTestId('returner-player-53').click();
  await page.getByTestId('finishTagging').click();
  await page.getByTestId('openGamePlayList').click();
  await page.getByTestId('dump').click();
});
