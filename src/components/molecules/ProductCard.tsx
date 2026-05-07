'use client';

import React from 'react';
import Link from 'next/link';
import { Product } from '@/types';
import { useCartStore } from '@/stores/useCartStore';
import { Button } from '@/components/atoms/Button';
import { Badge } from '@/components/atoms/Badge';
import { Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const addItem = useCartStore((state) => state.addItem);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  if (!mounted) {
    return (
      <div className="group relative block overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="aspect-square w-full bg-gray-100" />
        <div className="p-4 space-y-2">
          <div className="h-4 w-1/4 bg-gray-200 rounded animate-pulse" />
          <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <Link href={`/product/${product.id}`} className="group relative block overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="aspect-square w-full overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <Badge variant="secondary">{product.category}</Badge>
          <div className="flex items-center text-sm text-gray-500">
            <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>{product.rating.rate}</span>
          </div>
        </div>
        <h3 className="mb-1 text-lg font-semibold text-gray-900 line-clamp-1">{product.name}</h3>
        <p className="mb-4 text-sm text-gray-500 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
          <Button onClick={handleAddToCart} size="sm">
            Add to Cart
          </Button>
        </div>
      </div>
    </Link>
  );
};
