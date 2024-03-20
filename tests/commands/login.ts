import {waitForAngular} from "./waitForAngular";

export async function login(page) {
  // await page.goto(base.url);
  // await waitForAngular(page)
  // await page.goto('https://staging.sportsstatistiques.techqueb.com/login');
  await page.getByPlaceholder('name@mail.com').click();
  await page.getByPlaceholder('name@mail.com').fill('dominic.marcotte@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('bnc1fay-WZU0gqw2zyv');
  await page.getByRole('button', {name: 'Login'}).click();
  await waitForAngular(page)
}
