import { render, screen, fireEvent } from '@testing-library/react';
import { ProductCard } from '../ProductCard';
import { useCartStore } from '@/stores/useCartStore';
import { describe, it, expect, beforeEach } from 'vitest';
import { Product } from '@/types';

const mockProduct: Product = {
  id: '1',
  name: 'Test Product',
  price: 100,
  description: 'Desc',
  category: 'cat',
  image: '/img.jpg',
  rating: { rate: 4.5, count: 1 },
};

describe('ProductCard', () => {
  beforeEach(() => {
    useCartStore.getState().clearCart();
  });

  it('renders correctly', () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
    expect(screen.getByText(`$${mockProduct.price.toFixed(2)}`)).toBeInTheDocument();
  });

  it('adds item to cart when button is clicked', () => {
    render(<ProductCard product={mockProduct} />);
    const addButton = screen.getByRole('button', { name: /add to cart/i });
    fireEvent.click(addButton);
    
    expect(useCartStore.getState().items).toHaveLength(1);
    expect(useCartStore.getState().items[0].id).toBe(mockProduct.id);
  });
});
