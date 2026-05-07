import { render, screen, fireEvent } from '@testing-library/react';
import { CartItem } from '../CartItem';
import { useCartStore } from '@/stores/useCartStore';
import { describe, it, expect, beforeEach } from 'vitest';
import { CartItem as CartItemType } from '@/types';

const mockItem: CartItemType = {
  id: '1',
  name: 'Test Item',
  price: 100,
  quantity: 2,
  description: 'Desc',
  category: 'cat',
  image: '/img.jpg',
  rating: { rate: 4, count: 1 },
};

describe('CartItem', () => {
  beforeEach(() => {
    useCartStore.getState().clearCart();
    useCartStore.getState().items = [mockItem];
  });

  it('renders correctly', () => {
    render(<CartItem item={mockItem} />);
    expect(screen.getByText(mockItem.name)).toBeInTheDocument();
    expect(screen.getByText(`$${(mockItem.price * mockItem.quantity).toFixed(2)}`)).toBeInTheDocument();
    expect(screen.getByText(mockItem.quantity.toString())).toBeInTheDocument();
  });

  it('increases quantity when plus button is clicked', () => {
    render(<CartItem item={mockItem} />);
    const plusButton = screen.getAllByRole('button')[1]; // Plus button
    fireEvent.click(plusButton);
    
    expect(useCartStore.getState().items[0].quantity).toBe(3);
  });

  it('decreases quantity when minus button is clicked', () => {
    render(<CartItem item={mockItem} />);
    const minusButton = screen.getAllByRole('button')[0]; // Minus button
    fireEvent.click(minusButton);
    
    expect(useCartStore.getState().items[0].quantity).toBe(1);
  });

  it('removes item when trash button is clicked', () => {
    render(<CartItem item={mockItem} />);
    const removeButton = screen.getByText(/remove/i);
    fireEvent.click(removeButton);
    
    expect(useCartStore.getState().items).toHaveLength(0);
  });
});
