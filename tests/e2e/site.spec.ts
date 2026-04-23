import { expect, test } from '@playwright/test';

test('home page renders core content', async ({ page }) => {
  await page.goto('/');

  await expect(
    page.getByRole('link', {
      name: /Bonjour 👋 I’m Maxime|Bonjour 👋 I'm Maxime/i,
    }),
  ).toBeVisible();
  await expect(page.getByRole('link', { name: 'Blog' })).toBeVisible();
  await expect(
    page.getByRole('link', {
      name: /From Marketing to Growth Engineering - Part 2/i,
    }),
  ).toBeVisible();
});

test('about page renders', async ({ page }) => {
  await page.goto('/about');

  await expect(
    page.getByRole('heading', { level: 1, name: 'About' }),
  ).toBeVisible();
});

test('blog index and article render', async ({ page }) => {
  await page.goto('/blog');

  await expect(
    page.getByRole('link', {
      name: /From Marketing to Growth Engineering - Part 2/i,
    }),
  ).toBeVisible();

  await page
    .getByRole('link', {
      name: /From Marketing to Growth Engineering - Part 2/i,
    })
    .click();

  await expect(
    page.getByRole('heading', {
      level: 1,
      name: /From Marketing to Growth Engineering - Part 2/i,
    }),
  ).toBeVisible();
});

test('legacy root-level slug redirects to canonical blog route', async ({
  page,
}) => {
  await page.goto('/from-marketing-to-growth-engineering-part-1');

  await page.waitForURL(/\/blog\/from-marketing-to-growth-engineering-part-1$/);
  await expect(page).toHaveURL(
    /\/blog\/from-marketing-to-growth-engineering-part-1$/,
  );
});
