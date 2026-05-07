import { test, expect } from '@playwright/test';

test.describe('Cart Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/catalog');
  });

  test('should add an item to the cart and open the slide-over', async ({ page }) => {
    // Click "Add to Cart" on the first product
    const addToCartButton = page.getByRole('button', { name: 'Add to Cart' }).first();
    await addToCartButton.click();

    // The cart button in the header should update its count
    const cartButton = page.getByRole('button', { name: /items in cart/i });
    await expect(cartButton).toContainText('1');

    // Click the cart button to open the slide-over
    await cartButton.click();

    // Verify slide-over is visible
    const cartTitle = page.getByRole('heading', { name: 'Shopping Cart' });
    await expect(cartTitle).toBeVisible();

    // Verify the product is in the cart
    const cartItem = page.locator('li').filter({ has: page.getByRole('button', { name: 'Remove' }) });
    await expect(cartItem).toBeVisible();
  });

  test('should persist cart after page reload', async ({ page }) => {
    // Add item
    await page.getByRole('button', { name: 'Add to Cart' }).first().click();
    
    // Verify count is 1
    const cartButton = page.getByRole('button', { name: /items in cart/i });
    await expect(cartButton).toContainText('1');

    // Reload page
    await page.reload();

    // Verify count is still 1 (Zustand persist)
    await expect(cartButton).toContainText('1');
  });

  test('should remove item from cart', async ({ page }) => {
    // Add item
    await page.getByRole('button', { name: 'Add to Cart' }).first().click();
    
    // Open cart
    await page.getByRole('button', { name: /items in cart/i }).click();

    // Click remove
    await page.getByRole('button', { name: 'Remove' }).first().click();

    // Verify cart is empty or item is gone
    const emptyMessage = page.getByText('Cart is empty');
    await expect(emptyMessage).toBeVisible();
  });
});
