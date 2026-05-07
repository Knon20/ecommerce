import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from '../Header';
import { useCartStore } from '@/stores/useCartStore';
import { describe, it, expect, beforeEach } from 'vitest';

describe('Header', () => {
  beforeEach(() => {
    useCartStore.getState().clearCart();
  });

  it('renders correctly', () => {
    render(<Header />);
    expect(screen.getByText('NextStore')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /items in cart/i })).toBeInTheDocument();
  });

  it('shows correct item count after mounting', async () => {
    useCartStore.getState().addItem({
      id: '1', name: 'Test', price: 10, description: '', category: '', image: '', rating: { rate: 0, count: 0 }
    });
    
    render(<Header />);
    // Total items should be visible after mount
    expect(await screen.findByText('1')).toBeInTheDocument();
  });

  it('opens cart when cart button is clicked', () => {
    render(<Header />);
    const cartButton = screen.getByRole('button', { name: /items in cart/i });
    fireEvent.click(cartButton);
    
    expect(screen.getByText(/close panel/i)).toBeInTheDocument();
  });
});
