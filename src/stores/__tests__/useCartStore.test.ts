import { describe, it, expect, beforeEach } from 'vitest';
import { useCartStore } from '../useCartStore';
import { Product } from '@/types';

const mockProduct: Product = {
  id: '1',
  name: 'Test Product',
  price: 100,
  description: 'A test product',
  category: 'electronics',
  image: '/test.jpg',
  rating: { rate: 4.5, count: 10 },
};

const mockProduct2: Product = {
  id: '2',
  name: 'Test Product 2',
  price: 50,
  description: 'Another test product',
  category: 'electronics',
  image: '/test2.jpg',
  rating: { rate: 4.0, count: 5 },
};

describe('useCartStore', () => {
  beforeEach(() => {
    useCartStore.getState().clearCart();
    localStorage.clear();
  });

  it('should start with an empty cart', () => {
    const { items } = useCartStore.getState();
    expect(items).toEqual([]);
  });

  it('should add an item to the cart', () => {
    useCartStore.getState().addItem(mockProduct);
    const { items } = useCartStore.getState();
    expect(items).toHaveLength(1);
    expect(items[0]).toEqual({ ...mockProduct, quantity: 1 });
  });

  it('should increment quantity if item already exists', () => {
    useCartStore.getState().addItem(mockProduct);
    useCartStore.getState().addItem(mockProduct);
    const { items } = useCartStore.getState();
    expect(items).toHaveLength(1);
    expect(items[0].quantity).toBe(2);
  });

  it('should add an item with a specific quantity', () => {
    useCartStore.getState().addItem(mockProduct, 3);
    const { items } = useCartStore.getState();
    expect(items[0].quantity).toBe(3);
  });

  it('should remove an item from the cart', () => {
    useCartStore.getState().addItem(mockProduct);
    useCartStore.getState().removeItem(mockProduct.id);
    const { items } = useCartStore.getState();
    expect(items).toHaveLength(0);
  });

  it('should update item quantity', () => {
    useCartStore.getState().addItem(mockProduct);
    useCartStore.getState().updateQuantity(mockProduct.id, 5);
    const { items } = useCartStore.getState();
    expect(items[0].quantity).toBe(5);
  });

  it('should calculate subtotal correctly', () => {
    useCartStore.getState().addItem(mockProduct, 2); // 200
    useCartStore.getState().addItem(mockProduct2, 1); // 50
    expect(useCartStore.getState().subtotal).toBe(250);
  });

  it('should calculate total items correctly', () => {
    useCartStore.getState().addItem(mockProduct, 2);
    useCartStore.getState().addItem(mockProduct2, 3);
    const state = useCartStore.getState();
    expect(state.items).toHaveLength(2);
    expect(state.totalItems).toBe(5);
  });

  it('should clear the cart', () => {
    useCartStore.getState().addItem(mockProduct);
    useCartStore.getState().clearCart();
    expect(useCartStore.getState().items).toHaveLength(0);
  });
});
