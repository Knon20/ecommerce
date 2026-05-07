import { render, screen, fireEvent } from '@testing-library/react';
import { FilterSidebar } from '../FilterSidebar';
import { describe, it, expect, vi } from 'vitest';

const mockCategories = ['Electronics', 'Jewelery'];

describe('FilterSidebar', () => {
  it('renders correctly', () => {
    render(
      <FilterSidebar
        categories={mockCategories}
        selectedCategory={null}
        onSelectCategory={() => {}}
      />
    );
    expect(screen.getByText('Filters')).toBeInTheDocument();
    expect(screen.getByText('All Categories')).toBeInTheDocument();
    expect(screen.getByText('Electronics')).toBeInTheDocument();
  });

  it('calls onSelectCategory when a category is clicked', () => {
    const handleSelect = vi.fn();
    render(
      <FilterSidebar
        categories={mockCategories}
        selectedCategory={null}
        onSelectCategory={handleSelect}
      />
    );
    
    fireEvent.click(screen.getByText('Electronics'));
    expect(handleSelect).toHaveBeenCalledWith('Electronics');
  });

  it('highlights selected category', () => {
    render(
      <FilterSidebar
        categories={mockCategories}
        selectedCategory="Electronics"
        onSelectCategory={() => {}}
      />
    );
    
    const electronicsBtn = screen.getByText('Electronics');
    expect(electronicsBtn).toHaveClass('font-semibold');
  });
});
