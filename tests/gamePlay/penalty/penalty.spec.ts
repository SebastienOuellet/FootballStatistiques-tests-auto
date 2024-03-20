import {test, expect, Page} from '@playwright/test';
import { base } from '../../commands/base';
import {getDump} from "../../commands/getDump";
import {savePenalty} from "../../commands/savePenalty";
import {finishTagging} from "../../commands/finishTagging";
import {resume} from "../../commands/resume";
import {waitForAngular} from "../../commands/waitForAngular";
import {login} from "../../commands/login";

let page: Page

test.describe('Penalty', () => {
  test.beforeEach(async ({browser}) => {
    page = await browser.newPage();

    await page.goto(base.url);
    await waitForAngular(page)

    if (await page.locator('app-unauthenticated').isVisible()) {
      await login(page)
    }

    await page.screenshot({ animations: 'disabled' });

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

  test('penaltyForHome repeatLastDown yard5', async () => {
    await page.getByTestId('run').click();
    await page.getByTestId('rusher-player-3').click();
    await page.getByTestId('penalty').click();
    await page.getByTestId('penaltyForHome').click();
    await page.getByTestId('repeatLastDown').click();
    await page.getByTestId('yard5').click();
    await savePenalty(page);

    await page.getByTestId('dump').click();
    await page.getByTestId('openGamePlayList').click();

    const dump = await getDump(page)
    expect(dump[1]).toMatchObject({
      playType: "Run",
      result: "Penalty",
      penTeam: 'home',
      penYards: -5,
      gnLs: -5,

      odk: "O",
      hash: "L",
      down: 1,
      distance: 10,
      yardLine: "-25",

      _status: "Completed",
    })

    expect(dump[2]).toMatchObject({
      down: 1,
      distance: 15,
      yardLine: "-20",
    })
  })

  test('penaltyForHome firstDown yard10', async () => {
    await page.getByTestId('run').click();
    await page.getByTestId('rusher-player-3').click();
    await page.getByTestId('penalty').click();
    await page.getByTestId('firstDown').click();
    await page.getByTestId('yard10').click();
    await savePenalty(page);

    await page.getByTestId('dump').click();
    await page.getByTestId('openGamePlayList').click();

    const dump = await getDump(page)
    expect(dump[1]).toMatchObject({
      playType: "Run",
      result: "Penalty",
      penTeam: 'home',
      penYards: -10,
      gnLs: -10,

      odk: "O",
      hash: "L",
      down: 1,
      distance: 10,
      yardLine: "-25",

      _status: "Completed",
    })

    expect(dump[2]).toMatchObject({
      down: 1,
      distance: 10,
      yardLine: "-15",
    })
  })

  test('loosDown firstDown yard15', async () => {
    await page.getByTestId('run').click();
    await page.getByTestId('rusher-player-3').click();
    await page.getByTestId('penalty').click();
    await page.getByTestId('loosDown').click();
    await page.getByTestId('yard15').click();
    await savePenalty(page);

    await page.getByTestId('dump').click();
    await page.getByTestId('openGamePlayList').click();

    const dump = await getDump(page)
    expect(dump[1]).toMatchObject({
      playType: "Run",
      result: "Penalty",
      penTeam: 'home',
      penYards: -15,
      gnLs: -15,

      odk: "O",
      hash: "L",
      down: 1,
      distance: 10,
      yardLine: "-25",

      _status: "Completed",
    })

    expect(dump[2]).toMatchObject({
      down: 2,
      distance: 25,
      yardLine: "", // FIXME à valider
    })
  })

  test.describe('Half the distance', () => {
    test.fail('Home -5, penaltyForHome => ?', async () => {
      await resume(page, {
        team: 'home',
        yardLine: -2,
      })

      await page.getByTestId('run').click();
      await page.getByTestId('penalty').click();
      await page.getByTestId('penaltyForHome').click(); //  penaltyForAway
      await page.getByTestId('halfTheDistance').click();
      await savePenalty(page);

      await page.getByTestId('dump').click();
      const dump = await getDump(page)
      expect(dump[1]).toMatchObject({
        result: "Penalty",
        penTeam: 'home',
        penYards: -1,
        gnLs: -1,

        odk: "O",
        down: 1,
        distance: 10,
        yardLine: "-1",
      })
    })

    // FIXME # à corriger
    test.fail('Home -2, penaltyForHome => -1', async () => {
      await resume(page, {
        team: 'home',
        yardLine: -2,
      })

      await page.getByTestId('run').click();
      await page.getByTestId('penalty').click();
      await page.getByTestId('penaltyForHome').click(); //  penaltyForAway
      await page.getByTestId('halfTheDistance').click();
      await savePenalty(page);

      await page.getByTestId('dump').click();
      const dump = await getDump(page)
      expect(dump[1]).toMatchObject({
        result: "Penalty",
        penTeam: 'home',
        penYards: -1,
        gnLs: -1,

        odk: "O",
        down: 1,
        distance: 10,
        yardLine: "-1",
      })
    })

    test.fail('Home -1, penaltyForHome => ?', async () => {
      await resume(page, {
        team: 'home',
        yardLine: -2,
      })

      await page.getByTestId('run').click();
      await page.getByTestId('penalty').click();
      await page.getByTestId('penaltyForHome').click(); //  penaltyForAway
      await page.getByTestId('halfTheDistance').click();
      await savePenalty(page);

      await page.getByTestId('dump').click();
      const dump = await getDump(page)
      expect(dump[1]).toMatchObject({
        result: "Penalty",
        penTeam: 'home',
        penYards: -1,
        gnLs: -1,

        odk: "O",
        down: 1,
        distance: 10,
        yardLine: "-1",
      })
    })

    // FIXME # à corriger
    test('Home 5, penaltyForAway => 3', async () => {
      await resume(page, {
        team: 'home',
        yardLine: 5,
        down: 3,
        distance: 14
      })

      await page.getByTestId('run').click();
      await page.getByTestId('penalty').click();
      await page.getByTestId('penaltyForAway').click(); //  penaltyForAway
      await page.getByTestId('halfTheDistance').click();
      await savePenalty(page);

      await page.getByTestId('dump').click();
      const dump = await getDump(page)
      expect(dump[1]).toMatchObject({
        result: "Penalty",
        penTeam: 'away',
        penYards: 3,
        gnLs: 3,

        odk: "O",
        down: 3,
        distance: 14,
        yardLine: "5", // ??
      })
    })

    test('Home 2, penaltyForAway => 1', async () => {
      await resume(page, {
        team: 'home',
        yardLine: 2,
        down: 3,
        distance: 14
      })

      await page.getByTestId('run').click();
      await page.getByTestId('penalty').click();
      await page.getByTestId('penaltyForAway').click(); //  penaltyForAway
      await page.getByTestId('halfTheDistance').click();
      await savePenalty(page);

      await page.getByTestId('dump').click();
      const dump = await getDump(page)
      expect(dump[1]).toMatchObject({
        result: "Penalty",
        penTeam: 'away',
        penYards: 1,
        gnLs: 1,

        odk: "O",
        down: 3,
        distance: 14,
        yardLine: "2", // ??
      })
    })

    test.fail('Home 1, penaltyForAway => 1 + first down', async () => {
      await resume(page, {
        team: 'home',
        yardLine: 1,
        down: 3,
        distance: 14
      })

      await page.getByTestId('run').click();
      await page.getByTestId('penalty').click();
      await page.getByTestId('penaltyForAway').click(); //  penaltyForAway
      await page.getByTestId('halfTheDistance').click();
      await savePenalty(page);

      await page.getByTestId('dump').click();
      const dump = await getDump(page)
      expect(dump[1]).toMatchObject({
        result: "Penalty",
        penTeam: 'away',
        penYards: 0, // FIXME ??
        gnLs: 0,  // FIXME ??

        odk: "O",
        down: 3,
        distance: 14,
        yardLine: "1",  // FIXME ??
      })

      expect(dump[2]).toMatchObject({
        odk: "O",
        down: 1,
        distance: 10,
        yardLine: "1",  // FIXME ??
      })
    })
  })
});
