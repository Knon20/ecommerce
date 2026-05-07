'use client';

import React from 'react';
import { useCartStore } from '@/stores/useCartStore';
import { SearchBar } from '@/components/molecules/SearchBar';
import { ShoppingCart, Store } from 'lucide-react';
import Link from 'next/link';
import { CartSlideOver } from './CartSlideOver';

export const Header: React.FC = () => {
  const totalItems = useCartStore((state) => 
    state.items.reduce((acc, item) => acc + item.quantity, 0)
  );
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex lg:flex-1">
              <Link href="/catalog" className="flex items-center gap-2">
                <Store className="h-8 w-8 text-black" />
                <span className="text-xl font-bold tracking-tight text-black hidden sm:block">NextStore</span>
              </Link>
            </div>

            {/* Search - Hidden on very small screens, visible on md and up */}
            <div className="hidden flex-1 md:flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
              <div className="w-full max-w-lg lg:max-w-xs">
                <SearchBar onSearch={(q) => console.log('Search query:', q)} />
              </div>
            </div>

            {/* Icons */}
            <div className="flex flex-1 items-center justify-end gap-4">
              <button
                type="button"
                className="group -m-2 flex items-center p-2"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                  {mounted ? totalItems : 0}
                </span>
                <span className="sr-only">items in cart, view bag</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <CartSlideOver isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};
