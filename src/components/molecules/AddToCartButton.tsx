'use client';

import React from 'react';
import { useCartStore } from '@/stores/useCartStore';
import { Product } from '@/types';
import { Button } from '@/components/atoms/Button';

interface AddToCartButtonProps {
  product: Product;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product, className, size = 'lg' }) => {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem(product);
  };

  return (
    <Button type="button" className={className} size={size} onClick={handleAddToCart}>
      Add to Cart
    </Button>
  );
};
