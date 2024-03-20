import { test, expect, Page } from '@playwright/test';
import { base } from '../../commands/base';
import { wait } from '../../commands/wait';
import {getDump} from "../../commands/getDump";
import {waitForAngular} from "../../commands/waitForAngular";
import {login} from "../../commands/login";

test.use({
  viewport: {
    height: 720,
    width: 1080
  }
});

let page: Page

test.describe('Complete pass', () => {
  test.beforeEach(async ({browser}) => {
    page = await browser.newPage();

    await page.goto(base.url);
    await waitForAngular(page)

    if (await page.locator('app-unauthenticated').isVisible()) {
      await login(page)
    }

    await page.getByText('Demo Game').click();
    await page.getByTestId('homeReceiveKickoff').click();
    await page.getByTestId('kicker-player-62').click();
    await page.getByTestId('returner-player-3').click();
    await page.getByTestId('finishTagging').click();
  })

  test.afterEach(async () => {
    await page.close();
  });

  test('Simple', async () => {
    await page.getByTestId('completePass').click();
    await page.getByTestId('passer-player-1').click();
    await page.getByTestId('receiver-player-3').click();
    await page.getByTestId('tackler-player-57').click();
    await page.getByTestId('tackler-player-58').click();
    await page.getByTestId('selectGain').getByTestId('wheelEdit').click();
    await page.getByTestId('wheelBtn9').click();
    await page.getByTestId('wheelOk').click();

    await wait(100)
    await page.getByTestId('finishTagging').click();
    await page.getByTestId('dump').click();
    await page.getByTestId('openGamePlayList').click();

    const dump = await getDump(page)
    // console.log('dump', dump)
    expect(dump[1]).toMatchObject({
      playType: "Pass",
      result: "Complete",
      gnLs: 9,

      passer: 1,
      receiver: 3,
      oppTackler1: 57,
      oppTackler2: 58,

      odk: "O",
      hash: "M",
      down: 1,
      distance: 10,
      yardLine: "-25",

      _status: "Completed",

      // gamePlayNumber: 2,
      // qtr: 1,
    })

    expect(dump[2]).toMatchObject({
      hash: "M",

      gnLs: 0,

      down: 2,
      distance: 1,
      yardLine: "-34",

      _status: "Pending",
    })
  })

  test('HashL + safety', async () => {
    await page.getByTestId('completePass').click();
    await page.getByTestId('passer-player-1').click();
    await page.getByTestId('receiver-player-3').click();
    await page.getByTestId('tackler-player-57').click();
    await page.getByTestId('tackler-player-58').click();
    await page.getByTestId('hashL').click();
    await page.getByTestId('safety').click();

    await wait(100)
    await page.getByTestId('finishTagging').click();
    await page.getByTestId('dump').click();
    await page.getByTestId('openGamePlayList').click();

    const dump = await getDump(page)
    expect(dump[1]).toMatchObject({
      playType: "Pass",
      result: "Safety",

      passer: 1,
      receiver: 3,
      oppTackler1: 57,
      oppTackler2: 58,

      hash: "L",

      gnLs: -25,

      odk: "O", // ?
      down: 1,
      distance: 10,
      yardLine: "-25",

      _status: "Completed",

      // gamePlayNumber: 2,
      // qtr: 1,
    })

    expect(dump[2]).toMatchObject({
      hash: "L",

      gnLs: 0,

      odk: "D",
      down: 1,
      distance: 10,
      yardLine: "-35",

      _status: "Pending",
    })
  })

  test('hashR + touchdown', async () => {
    await page.getByTestId('completePass').click();
    await page.getByTestId('passer-player-1').click();
    await page.getByTestId('receiver-player-3').click();
    await page.getByTestId('tackler-player-57').click();
    await page.getByTestId('hashR').click();
    await page.getByTestId('touchdown').click();

    await wait(100)
    await page.getByTestId('finishTagging').click();
    await page.getByTestId('dump').click();

    const dump = await getDump(page)
    expect(dump[1]).toMatchObject({
      playType: "Pass",
      result: "Complete, TD",

      passer: 1,
      receiver: 3,
      oppTackler1: 57,

      hash: "R",

      gnLs: 85,

      odk: "O",
      down: 1,
      distance: 10,
      yardLine: "-25",

      _status: "Completed",

      // gamePlayNumber: 2,
      // qtr: 1,
    })

    await page.getByTestId('extraPt').click();
    await page.getByTestId('kicker-player-12').click();
    await page.getByTestId('good').click();

    await wait(100)
    await page.getByTestId('finishTagging').click();
    await page.getByTestId('openGamePlayList').click();
    await page.getByTestId('dump').click();

    // const dump2 = await getDump()
    // expect(dump2[1]).toMatchObject({
    //   playType: "Pass",
    //   result: "Safety",

    //   oppPasser: 51,
    //   oppReceiver: 53,
    //   tackler1: 7,
    //   tackler2: 8,

    //   hash: "L",

    //   gnLs: -25,

    //   odk: "D",
    //   down: 1,
    //   distance: 10,
    //   yardLine: "-25",

    //   _status: "Completed",

    //   // gamePlayNumber: 2,
    //   // qtr: 1,
    // })

    // expect(dump2[2]).toMatchObject({
    //   hash: "L",

    //   gnLs: 0,

    //   odk: "O",
    //   down: 1,
    //   distance: 10,
    //   yardLine: "-35",

    //   _status: "Pending",
    // })
  })

  test.skip('test', async () => {
    await page.getByTestId('homeKickoff').click();
    await page.getByTestId('kicker-player-12').click();
    await page.getByTestId('tackler-player-1').click();
    await page.getByTestId('returner-player-53').click();
    await page.getByTestId('finishTagging').click();
    await page.getByTestId('openGamePlayList').click();
    await page.getByTestId('dump').click();
  });
});
