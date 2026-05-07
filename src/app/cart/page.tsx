'use client';

import React, { useEffect, useState } from 'react';
import { useCartStore } from '@/stores/useCartStore';
import { CartItem } from '@/components/molecules/CartItem';
import { Button } from '@/components/atoms/Button';
import Link from 'next/link';

export default function CartPage() {
  const { items, subtotal, clearCart } = useCartStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Shopping Cart</h1>

      {items.length === 0 ? (
        <div className="text-center py-16 bg-gray-50 rounded-lg">
          <h2 className="text-xl font-medium text-gray-900 mb-4">Your cart is empty</h2>
          <Link href="/catalog">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1">
            <ul role="list" className="divide-y divide-gray-200 border-t border-gray-200">
              {items.map((item) => (
                <li key={item.id}>
                  <CartItem item={item} />
                </li>
              ))}
            </ul>
            <div className="mt-6 flex justify-end">
              <Button variant="danger" onClick={clearCart} size="sm">
                Clear Cart
              </Button>
            </div>
          </div>

          <div className="w-full lg:w-80 bg-gray-50 p-6 rounded-lg self-start">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
            <div className="flex justify-between text-base text-gray-900 mb-4">
              <p>Subtotal</p>
              <p className="font-semibold">${subtotal.toFixed(2)}</p>
            </div>
            <p className="text-sm text-gray-500 mb-6">Shipping and taxes calculated at checkout.</p>
            <Button className="w-full" size="lg">
              Checkout
            </Button>
            <div className="mt-4 text-center">
              <Link href="/catalog" className="text-sm font-medium text-black hover:text-gray-800">
                Continue Shopping &rarr;
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
