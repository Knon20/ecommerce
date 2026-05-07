import { render, screen, fireEvent } from '@testing-library/react';
import { AddToCartButton } from '../AddToCartButton';
import { useCartStore } from '@/stores/useCartStore';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { Product } from '@/types';

const mockProduct: Product = {
  id: '1',
  name: 'Test Product',
  price: 100,
  description: 'Desc',
  category: 'cat',
  image: '/img.jpg',
  rating: { rate: 4, count: 1 },
};

describe('AddToCartButton', () => {
  beforeEach(() => {
    useCartStore.getState().clearCart();
  });

  it('renders correctly', () => {
    render(<AddToCartButton product={mockProduct} />);
    expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument();
  });

  it('adds item to cart when clicked', () => {
    render(<AddToCartButton product={mockProduct} />);
    fireEvent.click(screen.getByRole('button'));
    
    expect(useCartStore.getState().items).toHaveLength(1);
    expect(useCartStore.getState().items[0].id).toBe(mockProduct.id);
  });
});
