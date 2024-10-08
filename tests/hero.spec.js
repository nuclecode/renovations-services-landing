const { test, expect } = require('@playwright/test');

test.describe('Hero Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render hero title correctly', async ({ page }) => {
    const title = await page.textContent('.hero__title');
    expect(title).toBe('Transform Your Home with Our Renovation & Electrical Services');
  });

  test('should render hero description correctly', async ({ page }) => {
    const description = await page.textContent('.hero__description');
    expect(description).toContain('Whether it\'s a complete home makeover or electrical rewiring');
  });

  test('should display image', async ({ page }) => {
    const image = await page.locator('.hero__image');
    await expect(image).toBeVisible();
  });

  test('should open modal when clicking the Get a Free Quote button', async ({ page }) => {
    await page.click('.hero__cta');
    const modal = await page.locator('.modal-content');
    await expect(modal).toBeVisible();
  });
});
