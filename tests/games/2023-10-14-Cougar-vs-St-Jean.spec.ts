import { test, expect } from '@playwright/test';
import {finishTagging} from "../commands/finishTagging";
import {waitForAngular} from "../commands/waitForAngular";
import {login} from "../commands/login";
import {base} from "../commands/base";

async function initGame(page) {
  await page.getByTestId('demoGame').click();
  await page.evaluate(() => {
    // @ts-ignore
    window.chargerDonneesLineup(
      {
        "home": {
          "nom": "Cougar",
          "abrev": "Len",
          "positions": {
            "qb": ["8"],
            "rb": ["8", "21", "34"],
            "wr": ["1", "2", "4", "6", "8", "11", "13", "21", "23", "31", "34", "80", "81", "82", "87", "88"],
            "ol": ["4", "7", "9", "10", "12", "13", "15", "17", "22", "28", "31", "34", "44", "55", "87", "90", "95", "99"],
            "dl": ["4", "7", "9", "10", "12", "13", "15", "17", "22", "28", "31", "34", "44", "55", "87", "90", "95", "99"],
            "lb": ["4", "7", "9", "10", "12", "13", "15", "17", "22", "28", "31", "34", "44", "55", "87", "90", "95", "99"],
            "db": ["4", "7", "9", "10", "12", "13", "15", "17", "22", "28", "31", "34", "44", "55", "87", "90", "95", "99"],
            "k": ["27", "87"]
          }
        }, "away": {
          "nom": "St-Jean", "abrev": "CRC", "positions": {
            "qb": ["1"],
            "rb": ["1", "2", "5", "9", "24", "31", "33"],
            "wr": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99"],
            "ol": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99"],
            "dl": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99"],
            "lb": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99"],
            "db": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99"],
            "k": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99"]
          }
        }
      }
    )
  })
}

test('2023-10-14 Cougar vs St-Jean', async ({ page }) => {
  test.setTimeout(120 * 1000 * 100);

  await page.goto(base.url);
  await waitForAngular(page)

  if (await page.locator('app-unauthenticated').isVisible()) {
    await login(page)
  }

  await initGame(page);

  // #1
  await page.getByTestId('homeReceiveKickoff').click();
  await page.getByTestId('kicker-player-27').click();
  await page.getByTestId('returner-player-34').click();
  await page.getByTestId('tackler-player-40').click();
  await page.getByTestId('caughtOn').getByTestId('wheelEdit').click();
  await page.getByTestId('wheelBtn1').click();
  await page.getByTestId('wheelBtn0').click();
  await wheelOk(page);
  await page.getByTestId('returnedTo').getByTestId('wheelEdit').click();
  await page.getByTestId('wheelBtn3').click();
  await page.getByTestId('wheelBtn1').click();
  await wheelOk(page);
  await page.getByTestId('hashL').click();
  await finishTagging(page)
  // await expect(page.locator('app-last-play-section')).toContainText('Yardline-45')
  await expect(page.locator('app-current-action')).toContainText('-31 Yard Line')

  // #2
  await page.getByTestId('qBSack').click();
  await page.locator('app-select-gain').getByTestId('selectGain').getByTestId('wheelEdit').click();
  await page.getByTestId('wheelBtn1').click();
  await page.getByTestId('wheelBtn5').click();
  await page.getByTestId('wheelBtnPlusMoins').click();
  await wheelOk(page);
  await page.getByTestId('tackler-player-28').click();
  await page.getByTestId('hashR').click();
  await finishTagging(page)
  await expect(page.locator('app-current-action')).toContainText('-16 Yard Line')

  // #3
  await page.getByTestId('completePass').click();
  await page.getByTestId('passer-player-8').click();
  await page.getByTestId('receiver-player-87').click();
  await page.getByTestId('tackler-player-3').click();
  await page.getByTestId('tackler-player-21').click();
  await page.getByTestId('selectGain').getByTestId('wheelEdit').click();
  await page.getByTestId('wheelBtn4').click();
  await wheelOk(page);
  await page.getByTestId('hashL').click();
  await finishTagging(page)
  await expect(page.locator('app-current-action')).toContainText('-20 Yard Line')

  // #4
  await page.getByTestId('interception').click();
  await page.getByTestId('passer-player-8').click();
  await page.getByTestId('interceptor-player-18').click();
  await page.getByTestId('tackler-player-34').click();
  await page.getByTestId('wheelEdit').click();
  await page.getByTestId('wheelBtnPlusMoins').click();
  await page.getByTestId('wheelBtn2').click();
  await page.getByTestId('wheelBtn2').click();
  await wheelOk(page);
  await page.getByTestId('hashM').click();
  await finishTagging(page)
  await expect(page.locator('app-current-action')).toContainText('22 Yard Line')

  // #5
  await page.getByTestId('run').click();
  await page.getByTestId('rusher-player-33').click();
  await page.getByTestId('tackler-player-9').click();
  await page.getByTestId('tackler-player-13').click();
  await page.getByTestId('selectGain').getByTestId('wheelEdit').click();
  await page.getByTestId('wheelBtn2').click();
  await wheelOk(page);
  await finishTagging(page)
  await expect(page.locator('app-current-action')).toContainText('20 Yard Line')

  // #6
  await page.getByTestId('incompletePass').click();
  await page.getByTestId('passer-player-1').click();
  await page.getByTestId('batted-down-player-10').click();
  await finishTagging(page)
  // await expect(page.locator('app-last-play-section')).toContainText('Yardline20')
  await expect(page.locator('app-current-action')).toContainText('20 Yard Line')

  // #7
  await page.getByTestId('interception').click();
  await page.getByTestId('passer-player-1').click();
  // FIXME remplacer data-testid=null par player-other, ajouter des data-testid dans les autres
  await page.getByTestId('interceptor').getByTestId('null').click();
  await page.getByRole('button', { name: '23' }).click();
  await page.getByTestId('tackler-player-2').click();
  await page.getByTestId('tackler-player-61').click();
  // FIXME remplacer par le bon getByTestId
  await page.locator('app-wheel-selector').getByTestId('wheelEdit').click();
  await page.getByTestId('wheelBtn1').click();
  await page.getByTestId('wheelBtn5').click();
  await wheelOk(page);
  await clickWait('penaltyAfterPlay', page);
  await page.getByTestId('penaltyForAway').click();
  await page.getByTestId('repeatLastDown').click();
  await page.getByTestId('yard10').click();
  await savePenalty(page);
  await finishTagging(page)
  await expect(page.locator('app-current-action')).toContainText('-25 Yard Line')

  // #8
  await page.getByTestId('run').click();
  await page.getByTestId('rusher-player-21').click();
  await page.getByTestId('tackler-player-95').click();
  await page.getByTestId('hashL').click();
  await page.getByTestId('selectGain').getByTestId('wheelEdit').click();
  await page.getByTestId('wheelBtn3').click();
  await wheelOk(page);
  await page.getByTestId('hashL').click();
  await finishTagging(page)
  await expect(page.locator('app-current-action')).toContainText('-28 Yard Line')
// -30

  // TODO assertion
  //   créer des data-testid
  await page.getByTestId('openGamePlayList').click();
  await expect(page.locator('tbody')).toContainText('22');
  await page.getByTestId('backEditPlayList').click();

  // #9
  await page.getByTestId('run').click();
  await page.getByTestId('rusher-player-21').click();
  await page.getByTestId('tackler-player-32').click();
  await page.getByTestId('selectGain').getByTestId('wheelEdit').click();
  await page.getByTestId('wheelBtn8').click();
  await wheelOk(page);
  await finishTagging(page)
  await expect(page.locator('app-current-action')).toContainText('-36 Yard Line')

  // #10
  await page.getByTestId('run').click();
  await page.getByTestId('rusher-player-21').click();
  await page.getByTestId('selectGain').getByTestId('wheelEdit').click();
  await page.getByTestId('wheelBtn1').click();
  await wheelOk(page);
  await page.getByTestId('tackler-player-10').click();
  await finishTagging(page)
  await expect(page.locator('app-current-action')).toContainText('-37 Yard Line')

  // #11
  await page.getByTestId('run').click();
  await page.getByTestId('rusher-player-34').click();
  await page.getByTestId('tackler-player-10').click();
  await page.getByTestId('selectGain').getByTestId('wheelEdit').click();
  await page.getByTestId('wheelBtn1').click();
  await page.getByTestId('wheelBtn8').click();
  await wheelOk(page);
  await finishTagging(page)
  await expect(page.locator('app-current-action')).toContainText('55 Yard Line')

  // #12
  await page.getByTestId('run').click();
  await page.getByTestId('rusher-player-34').click();
  await page.getByTestId('selectGain').getByTestId('wheelEdit').click();
  await page.getByTestId('wheelBtn1').dblclick();
  await wheelOk(page);
  await page.getByTestId('tackler-player-18').click();
  await finishTagging(page)
  await expect(page.locator('app-current-action')).toContainText('44 Yard Line')

  // #13
  await page.getByTestId('run').click();
  await page.getByTestId('rusher-player-34').click();
  await page.getByTestId('tackler-player-55').click();
  await page.getByTestId('selectSpot').getByTestId('wheelEdit').click();
  await page.getByTestId('wheelBtn3').click();
  await page.getByTestId('wheelBtn9').click();
  await wheelOk(page);
  await finishTagging(page)
  await expect(page.locator('app-current-action')).toContainText('39 Yard Line')

  // #14
  await page.getByTestId('run').click();
  await page.getByTestId('rusher-player-21').click();
  await page.getByTestId('fumble').click();
  await page.getByTestId('recoveredByAway').click();
  await page.getByTestId('force-fumble-player-47').click();
  await page.getByTestId('fumble-recovered-player-32').click();
  await page.getByTestId('recoveredOn').getByTestId('wheelEdit').click();
  await page.getByTestId('wheelBtnPlusMoins').click();
  await page.getByTestId('wheelBtn3').click();
  await page.getByTestId('wheelBtn2').click();
  await wheelOk(page);
  await page.getByTestId('returnedTo').getByTestId('wheelEdit').click();
  await page.getByTestId('wheelBtnPlusMoins').click(); // getByTestId('wheelBtnPlusMoins') resolved to 2 elements
  await page.getByTestId('wheelBtn3').click();
  await page.getByTestId('wheelBtn2').click();
  await wheelOk(page);
  await page.getByTestId('hashL').click();
  await finishTagging(page)
  await expect(page.locator('app-current-action')).toContainText('-32 Yard Line')

  // #15
  await page.getByTestId('run').click();
  await page.getByTestId('rusher-player-24').click();
  await page.getByTestId('tackler-player-95').click();
  await page.getByTestId('selectSpot').getByTestId('wheelEdit').click();
  await page.getByTestId('wheelBtnPlusMoins').click();
  await page.getByTestId('wheelBtn3').click();
  await page.getByTestId('wheelBtn9').click();
  await wheelOk(page);
  await finishTagging(page)
  await expect(page.locator('app-current-action')).toContainText('-39 Yard Line')

  // #16
  await page.getByTestId('run').click();
  await page.getByTestId('rusher-player-24').click();
  await page.getByTestId('tackler-player-95').click();
  await page.getByTestId('selectGain').getByTestId('wheelEdit').click();
  await page.getByTestId('wheelBtn5').click();
  await wheelOk(page);
  await finishTagging(page)
  await expect(page.locator('app-current-action')).toContainText('-44 Yard Line')

  // #17
  await page.getByTestId('run').click();
  await page.getByTestId('rusher-player-24').click();
  // await page.getByTestId('rusher-player-33').click();
  await page.getByTestId('selectGain').getByTestId('wheelEdit').click();
  await page.getByTestId('wheelBtn4').click();
  await wheelOk(page);
  await finishTagging(page)
  await expect(page.locator('app-current-action')).toContainText('-48 Yard Line')

  // #18
  await page.getByTestId('preSnapPenalty').click();
  await page.getByTestId('repeatLastDown').click();
  await page.getByTestId('wheelEdit').click();
  await page.getByTestId('wheelBtnPlusMoins').click();
  await page.getByTestId('wheelBtn3').click();
  await page.getByTestId('wheelBtn2').click();
  await wheelOk(page);
  await clickWait('savePenalty', page)
  await expect(page.locator('app-current-action')).toContainText('-32 Yard Line')

  // #19
  await page.getByTestId('run').click();
  await page.getByTestId('rusher-player-33').click();
  await page.getByTestId('selectSpot').getByTestId('wheelEdit').click();
  await page.getByTestId('wheelBtn4').click();
  await page.getByTestId('wheelBtn7').click();
  await wheelOk(page);
  await finishTagging(page)
  await expect(page.locator('app-current-action')).toContainText('47 Yard Line')

  // #20
  await page.getByTestId('completePass').click();
  await page.getByTestId('passer-player-1').click();
  await page.getByTestId('receiver-player-19').click();
  await page.getByTestId('tackler-player-10').click();
  await page.getByTestId('tackler-player-9').click();
  await page.getByTestId('selectGain').getByTestId('wheelEdit').click();
  await page.getByTestId('wheelBtn9').click();
  await wheelOk(page);
  await finishTagging(page)
  await expect(page.locator('app-current-action')).toContainText('38 Yard Line')

  // #21 // FIXME qbSack 23? Ou interception 23?
  await page.getByTestId('incompletePass').click();
  await page.getByTestId('passer-player-1').click();
  await page.getByTestId('batted-down-player-55').click();
  await page.getByTestId('hashR').click();
  await finishTagging(page)
  await clickWait('resume', page)
  await page.getByTestId('spotTheBall').getByTestId('wheelEdit').click();
  await page.getByTestId('wheelBtn2').click();
  await page.getByTestId('wheelBtn3').click();
  await wheelOk(page); await waitForAngular(page) // fixme toujours faire
  await clickWait('finishResume', page)
  await expect(page.locator('app-current-action')).toContainText('23 Yard Line')

  // #22
  await page.getByTestId('run').click();
  await page.getByTestId('rusher-player-33').click();
  await page.getByTestId('fumble').click();
  await page.getByTestId('recoveredByHome').click();
  await page.getByTestId('force-fumble-player-22').click();
  await page.getByTestId('fumble-recovered-player-31').click();
  await page.getByTestId('recoveredOn').getByTestId('wheelEdit').click();
  await page.getByTestId('wheelBtn2').click();
  await page.getByTestId('wheelBtn5').click();
  await page.getByTestId('wheelBtnPlusMoins').click();
  await wheelOk(page);
  await page.getByTestId('returnedTo').getByTestId('wheelEdit').click();
  await page.getByTestId('wheelBtn2').click();
  await page.getByTestId('wheelBtn3').click();
  await page.getByTestId('wheelBtnPlusMoins').click();
  await wheelOk(page);
  await page.getByTestId('hashL').click();
  await finishTagging(page)
  await expect(page.locator('app-current-action')).toContainText('-23 Yard Line')

  // #23
  await page.getByTestId('run').click();
  await page.getByTestId('rusher-player-34').click();
  await page.getByTestId('selectGain').getByTestId('wheelEdit').click();
  await page.getByTestId('wheelBtn8').click();
  await wheelOk(page);
  await page.getByTestId('tackler-player-21').click();
  await finishTagging(page)
  await expect(page.locator('app-current-action')).toContainText('-31 Yard Line')

  // #24
  await page.getByTestId('run').click();
  await page.getByTestId('rusher-player-34').click();
  await page.getByTestId('tackler-player-44').click();
  await page.getByTestId('selectGain').getByTestId('wheelEdit').click();
  await page.getByTestId('wheelBtn1').click();
  await page.getByTestId('wheelBtn2').click();
  await wheelOk(page);
  await page.getByTestId('hashR').click();
  await finishTagging(page)
  await expect(page.locator('app-current-action')).toContainText('-43 Yard Line')

  // #25
  await page.getByTestId('completePass').click();
  await page.getByTestId('passer-player-8').click();
  await page.getByTestId('receiver-player-87').click();
  await page.getByTestId('tackler-player-32').click();
  await page.getByTestId('tackler-player-21').click();
  await page.getByTestId('selectSpot').getByTestId('wheelEdit').click();
  await page.getByTestId('wheelBtn4').click();
  await page.getByTestId('wheelBtn8').click();
  await page.getByTestId('wheelBtnPlusMoins').click();
  await wheelOk(page);
  await finishTagging(page)
  await expect(page.locator('app-current-action')).toContainText('-48 Yard Line')

  // #26
  await page.getByTestId('run').click();
  await page.getByTestId('rusher-player-21').click();
  await page.getByTestId('selectGain').getByTestId('wheelEdit').click();
  await page.getByTestId('wheelBtn3').click();
  await wheelOk(page);
  await page.getByTestId('tackler-player-32').click();
  await page.getByTestId('hashM').click();
  await finishTagging(page)
  await expect(page.locator('app-current-action')).toContainText('-51 Yard Line')

  // #27
  await page.getByTestId('run').click();
  await page.getByTestId('rusher-player-21').click();
  await page.getByTestId('selectGain').getByTestId('wheelEdit').click();
  await page.getByTestId('wheelBtn1').click();
  await page.getByTestId('wheelBtn1').click();
  await wheelOk(page);
  await page.getByTestId('tackler-player-32').click();
  await page.getByTestId('hashM').click();
  await finishTagging(page)
  await expect(page.locator('app-current-action')).toContainText('48 Yard Line')

  // #28
  await page.getByTestId('run').click();
  await page.getByTestId('rusher-player-34').click();
  await page.getByTestId('selectGain').getByTestId('wheelEdit').click();
  await page.getByTestId('wheelBtn1').click();
  await page.getByTestId('wheelBtn7').click();
  await wheelOk(page);
  await page.getByTestId('tackler-player-32').click();
  await page.getByTestId('hashM').click();
  await finishTagging(page)
  await expect(page.locator('app-current-action')).toContainText('31 Yard Line')

  // #29
  await page.getByTestId('run').click();
  await page.getByTestId('rusher-player-34').click();
  await page.getByTestId('selectGain').getByTestId('wheelEdit').click();
  await page.getByTestId('wheelBtn2').click();
  await wheelOk(page);
  await page.getByTestId('tackler-player-32').click();
  await page.getByTestId('hashM').click();
  await finishTagging(page)
  await expect(page.locator('app-current-action')).toContainText('29 Yard Line')

  /*
  // #30
  await page.getByTestId('run').click();
  await page.getByTestId('rusher-player-21').click();
  await page.getByTestId('selectGain').getByTestId('wheelEdit').click();
  await page.getByTestId('wheelBtn8').click();
  await wheelOk(page);
  await page.getByTestId('tackler-player-32').click();
  await page.getByTestId('hashM').click();
  await finishTagging(page)
  await expect(page.locator('app-current-action')).toContainText('31 Yard Line')

  // #31
  await page.getByTestId('run').click();
  await page.getByTestId('rusher-player-21').click();
  await page.getByTestId('selectGain').getByTestId('wheelEdit').click();
  await page.getByTestId('wheelBtn5').click();
  await wheelOk(page);
  await page.getByTestId('tackler-player-32').click();
  await page.getByTestId('hashM').click();
  await finishTagging(page)
  await expect(page.locator('app-current-action')).toContainText('26 Yard Line')

  // #32
  await expect(page.locator('app-current-action')).toContainText('31 Yard Line')
  // #33
  await expect(page.locator('app-current-action')).toContainText('25 Yard Line')
  // #34
  await expect(page.locator('app-current-action')).toContainText('8 Yard Line')
  // #35
  await expect(page.locator('app-current-action')).toContainText('5 Yard Line')
  */

  await page.getByTestId('openGamePlayList').click();
});

async function wheelOk(page) {
  await   page.getByTestId('wheelOk').click();
  await waitForAngular(page)
}
async function savePenalty(page) {
  await page.getByTestId('savePenalty').click();
  await waitForAngular(page)
}

async function clickWait(dataTestId: string, page) {
  await page.getByTestId(dataTestId).click();
  await waitForAngular(page)
}
