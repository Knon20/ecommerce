import { render, screen, fireEvent } from '@testing-library/react';
import { CartSlideOver } from '../CartSlideOver';
import { useCartStore } from '@/stores/useCartStore';
import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('CartSlideOver', () => {
  beforeEach(() => {
    useCartStore.getState().clearCart();
  });

  it('does not render when closed', () => {
    render(<CartSlideOver isOpen={false} onClose={() => {}} />);
    expect(screen.queryByText(/shopping cart/i)).not.toBeInTheDocument();
  });

  it('renders correctly when open', () => {
    render(<CartSlideOver isOpen={true} onClose={() => {}} />);
    expect(screen.getByText(/shopping cart/i)).toBeInTheDocument();
  });

  it('shows empty state when cart is empty', () => {
    render(<CartSlideOver isOpen={true} onClose={() => {}} />);
    expect(screen.getByText(/cart is empty/i)).toBeInTheDocument();
  });

  it('shows items and subtotal when cart is not empty', () => {
    useCartStore.getState().addItem({
      id: '1', name: 'Test Product', price: 100, description: '', category: '', image: '', rating: { rate: 0, count: 0 }
    });
    
    render(<CartSlideOver isOpen={true} onClose={() => {}} />);
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getAllByText('$100.00')).toHaveLength(2);
  });

  it('calls onClose when close button is clicked', () => {
    const handleClose = vi.fn();
    render(<CartSlideOver isOpen={true} onClose={handleClose} />);
    
    const closeButton = screen.getByRole('button', { name: /close panel/i });
    fireEvent.click(closeButton);
    expect(handleClose).toHaveBeenCalled();
  });
});
