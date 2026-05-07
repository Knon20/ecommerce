import { render, screen } from '@testing-library/react';
import { ProductGrid } from '../ProductGrid';
import { describe, it, expect } from 'vitest';
import { Product } from '@/types';

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Product 1',
    price: 100,
    description: 'Desc 1',
    category: 'cat1',
    image: '/img1.jpg',
    rating: { rate: 4, count: 1 },
  },
  {
    id: '2',
    name: 'Product 2',
    price: 200,
    description: 'Desc 2',
    category: 'cat2',
    image: '/img2.jpg',
    rating: { rate: 5, count: 2 },
  },
];

describe('ProductGrid', () => {
  it('renders products correctly', () => {
    render(<ProductGrid products={mockProducts} />);
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();
  });

  it('renders empty state when no products', () => {
    render(<ProductGrid products={[]} />);
    expect(screen.getByText(/no products found/i)).toBeInTheDocument();
  });
});
