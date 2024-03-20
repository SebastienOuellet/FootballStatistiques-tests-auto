import {test, expect, Page} from '@playwright/test';
import { base } from '../../commands/base';
import {getDump} from "../../commands/getDump";
import {finishTagging} from "../../commands/finishTagging";
import {savePenalty} from "../../commands/savePenalty";

let page: Page

test.describe('Run', () => {
  test.beforeEach(async ({browser}) => {
    page = await browser.newPage();

    await page.goto(base.url);

    await page.getByText('Demo Game').click();
    await page.getByTestId('homeReceiveKickoff').click();
    await page.getByTestId('kicker-player-62').click();
    await page.getByTestId('returner-player-3').click();
    await page.getByTestId('hashL').click();

    await finishTagging(page);
  })

  test.afterEach(async () => {
    await page.close();
  });

  // Run
  test('Simple', async () => {
    await page.getByTestId('run').click();
    await page.getByTestId('rusher-player-3').click();
    await page.getByTestId('tackler-player-57').click();
    await page.getByTestId('tackler-player-58').click();
    await page.getByTestId('selectGain').getByTestId('wheelEdit').click();
    await page.getByTestId('wheelBtn7').click();
    await page.getByTestId('wheelOk').click();
    await finishTagging(page);
  })

  test.describe('Hash', () => {
    test('Run devrait présélectionner hashL', async () => {
      await page.getByTestId('run').click();
      await page.getByTestId('rusher-player-3').click();
      await page.getByTestId('tackler-player-57').click();
      await page.getByTestId('tackler-player-58').click();
      await page.getByTestId('selectGain').getByTestId('wheelEdit').click();
      await page.getByTestId('wheelBtn2').click();
      await page.getByTestId('wheelOk').click();

      await finishTagging(page);
      await page.getByTestId('dump').click();
      await page.getByTestId('openGamePlayList').click();

      const dump = await getDump(page)
      expect(dump[1]).toMatchObject({
        playType: "Run",
        result: "Rush",
        gnLs: 2,

        rusher: 3,
        oppTackler1: 57,
        oppTackler2: 58,

        odk: "O",
        hash: "L",
        down: 1,
        distance: 10,
        yardLine: "-25",

        _status: "Completed",
      })
    })

    test('hashR', async () => {
      await page.getByTestId('run').click();
      await page.getByTestId('rusher-player-3').click();
      await page.getByTestId('tackler-player-57').click();
      await page.getByTestId('selectGain').getByTestId('wheelEdit').click();
      await page.getByTestId('wheelBtn1').click();
      await page.getByTestId('wheelBtnPlusMoins').click();
      await page.getByTestId('wheelOk').click();
      await page.getByTestId('hashR').click();

      await finishTagging(page);
      await page.getByTestId('dump').click();
      await page.getByTestId('openGamePlayList').click();

      const dump = await getDump(page)
      expect(dump[1]).toMatchObject({
        playType: "Run",
        result: "Rush",
        gnLs: -1,

        rusher: 3,
        oppTackler1: 57,

        odk: "O",
        hash: "R",
        down: 1,
        distance: 10,
        yardLine: "-25",

        _status: "Completed",
      })
    })

    test('hashM', async () => {
      await page.getByTestId('run').click();
      await page.getByTestId('rusher-player-3').click();
      await page.getByTestId('tackler-player-57').click();
      await page.getByTestId('selectGain').getByTestId('wheelEdit').click();
      await page.getByTestId('wheelBtn1').click();
      await page.getByTestId('wheelBtnPlusMoins').click();
      await page.getByTestId('wheelOk').click();
      await page.getByTestId('hashM').click();

      await finishTagging(page);
      await page.getByTestId('dump').click();
      await page.getByTestId('openGamePlayList').click();

      const dump = await getDump(page)
      expect(dump[1]).toMatchObject({
        playType: "Run",
        result: "Rush",
        gnLs: -1,

        rusher: 3,
        oppTackler1: 57,

        odk: "O",
        hash: "M",
        down: 1,
        distance: 10,
        yardLine: "-25",

        _status: "Completed",
      })
    })
  })

  test.describe('Penalty', () => {
    test('penaltyForAway repeatLastDown yard5', async () => {
      await page.getByTestId('run').click();
      await page.getByTestId('rusher-player-3').click();
      await page.getByTestId('penalty').click();
      await page.getByTestId('penaltyForAway').click();
      await page.getByTestId('yard5').click();
      await page.getByTestId('repeatLastDown').click();
      await savePenalty(page);

      await page.getByTestId('dump').click();
      await page.getByTestId('openGamePlayList').click();

      const dump = await getDump(page)
      expect(dump[1]).toMatchObject({
        playType: "Run",
        result: "Penalty",
        penTeam: 'away',
        penYards: 5,
        gnLs: 5,

        odk: "O",
        hash: "L",
        down: 1,
        distance: 10,
        yardLine: "-25",

        _status: "Completed",
      })

      expect(dump[2]).toMatchObject({
        down: 1,
        distance: 5,
        yardLine: "-30",
      })
    })
  })
});
