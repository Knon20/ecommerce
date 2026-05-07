'use client';

import React, { useState } from 'react';
import { FilterSidebar } from '@/components/organisms/FilterSidebar';
import { ProductGrid } from '@/components/organisms/ProductGrid';
import { mockProducts, categories } from '@/mocks/products';

export default function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = selectedCategory
    ? mockProducts.filter((p) => p.category === selectedCategory)
    : mockProducts;

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <FilterSidebar
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      
      <div className="flex-1">
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            {selectedCategory || 'All Products'}
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Showing {filteredProducts.length} results.
          </p>
        </div>
        
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
}
