import { render, screen, fireEvent, act } from '@testing-library/react';
import { SearchBar } from '../SearchBar';
import { describe, it, expect, vi, beforeEach } from 'vitest';

describe('SearchBar', () => {
  it('renders correctly', () => {
    render(<SearchBar onSearch={() => {}} />);
    expect(screen.getByPlaceholderText(/search products.../i)).toBeInTheDocument();
  });

  it('calls onSearch with debounce', async () => {
    vi.useFakeTimers();
    const handleSearch = vi.fn();
    render(<SearchBar onSearch={handleSearch} />);
    
    const input = screen.getByPlaceholderText(/search products.../i);
    fireEvent.change(input, { target: { value: 'test' } });
    
    expect(handleSearch).not.toHaveBeenCalled();
    
    act(() => {
      vi.advanceTimersByTime(300);
    });
    
    expect(handleSearch).toHaveBeenCalledWith('test');
    vi.useRealTimers();
  });
});
