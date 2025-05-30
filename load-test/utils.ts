import {Page} from "@playwright/test";
import {O3_URL} from "../utils/configs/globalSetup";

export async function loginOpenmrs(page: Page) {
    await page.goto(`${O3_URL}`);
    await sleep(500);
    await page.getByRole('textbox', {name: 'Username'}).click();
    await sleep(500);
    await page.getByRole('textbox', {name: 'Username'}).fill('testFaimer');
    await sleep(500);
    await page.getByRole('textbox', {name: 'Password'}).click();
    await sleep(500);
    await page.getByRole('textbox', {name: 'Password'}).fill('Admin123');
    await sleep(500);
    await page.getByRole('button', {name: 'Log in'}).click();
    await sleep(500);
    await page.locator('label').filter({hasText: 'Inpatient Ward'}).locator('span').first().click();
    await sleep(500);
    await page.getByRole('button', {name: 'Confirm'}).click();
    await sleep(500);
}

export function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}
