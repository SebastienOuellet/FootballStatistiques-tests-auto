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
  await page.getByTestId('noGood').click();
  await page.getByTestId('finishTagging').click();

  await page.getByTestId('openGamePlayList').click();

  await page.getByTestId('dump').click();

  const dump = await page.evaluate(() => window.localStorage.getItem('dump'));
  let gamePlayList = JSON.parse(dump);
  console.log(gamePlayList)
  expect(gamePlayList).toEqual([
    {
      _status: 'Completed',
      gamePlayNumber: 1,
      odk: 'K',
      down: 0,
      distance: 0,
      hash: 'M',
      gnLs: 0,
      yardLine: '-45',
      qtr: 1,
      playType: 'KO',
      kicker: 12,
      oppReturner: 53,
      result: 'Return',
      kickYards: 50,
      returnYards: 10
    },
    {
      _status: 'Completed',
      odk: 'D',
      gamePlayNumber: 2,
      gnLs: 85,
      down: 1,
      hash: 'M',
      yardLine: '-25',
      debug: 'createNextGamelay()',
      qtr: 1,
      distance: 10,
      playType: 'Run',
      oppRusher: 54,
      result: 'Rush, TD'
    },
    {
      _status: 'Completed',
      odk: 'K',
      gamePlayNumber: 3,
      gnLs: 0,
      down: 0,
      hash: 'M',
      yardLine: '5',
      debug: 'createNextGamelay()',
      qtr: 1,
      distance: 5,
      playType: 'Extra Pt. Block',
      result: 'No Good',
      oppKicker: 62
    },
    {
      _status: 'Pending',
      odk: 'K',
      gamePlayNumber: 4,
      gnLs: 0,
      down: 0,
      hash: 'M',
      yardLine: '-45',
      debug: 'createNextGamelay()',
      qtr: 1,
      distance: 0,
      playType: 'KO REC'
    }
  ])
});
