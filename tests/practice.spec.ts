import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
    test('Open Homepage and Verify page title', async ({ page }) => {
        //open url
        await page.goto('https://practice.sdetunicorns.com/');

        //Assert page title
        await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
    })

    test('Open About page and Verify page title', async ({ page }) => {
        //open url
        await page.goto('https://practice.sdetunicorns.com/about/');

        //Assert page title
        await expect(page).toHaveTitle('About – Practice E-Commerce Site');
    })

    test('Click on Get started link', async ({ page }) => {
        //open url
        await page.goto('https://practice.sdetunicorns.com/');

        //click on get started button
        await page.locator('#get-started').click();

        //check the page url string 
        await expect(page).toHaveURL(/.*#get-started/);
    })

    test('Verfiy the Headinng text is visible or not', async ({ page }) => {
        //open url
        await page.goto('https://practice.sdetunicorns.com/');

        //find text locator
        const headingText = await page.locator('text="Think different. Make different."');

        //check the heading visible or not
        await expect(headingText).toBeVisible();
    })
    
    test('Verfiy the home menu link is enable using CSS and Text locator', async ({ page }) => {
        //open url
        await page.goto('https://practice.sdetunicorns.com/');

        //find CSS with Text locator
        // const homeText = await page.locator('#zak-primary-menu >> text=Home');
        const homeText = await page.locator('#zak-primary-menu:has-text("Home")');

        //check the home button enabled or not
        await expect(homeText).toBeEnabled();
    })

    test('Verfiy the Search icon is visible using CSS Locator', async ({ page }) => {
        //open url
        await page.goto('https://practice.sdetunicorns.com/');

        //find CSS with Text locator
        const searchIcon = await page.locator('div.zak-header-actions--desktop a.zak-header-search__toggle svg.zak-icon');

        //check the home button enabled or not
        await expect(searchIcon).toBeVisible();
    })

    test('Verify the text of all the nav links', async ({ page }) => {
        const expected = ['Home', 'About', 'Shop', 'Blog', 'Contact', 'My account'];

        //open url
        await page.goto('https://practice.sdetunicorns.com/');

        //find by CSS locator
        const navTexts = await page.locator('#zak-primary-menu li a');

        //print all the navtexts 
        for (const navText of await navTexts.allTextContents()) {
            console.log(navText);
        }

        //check all the Nav texts
        expect(await navTexts.allTextContents()).toEqual(expected);
    })
    
    
})
