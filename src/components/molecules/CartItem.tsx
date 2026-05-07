'use client';

import React from 'react';
import { CartItem as CartItemType } from '@/types';
import { useCartStore } from '@/stores/useCartStore';
import { Minus, Plus, Trash2 } from 'lucide-react';

interface CartItemProps {
  item: CartItemType;
}

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeItem } = useCartStore();

  const handleDecrease = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    } else {
      removeItem(item.id);
    }
  };

  const handleIncrease = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  return (
    <div className="flex items-center gap-4 py-4 border-b border-gray-200">
      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <h3 className="line-clamp-1 text-sm">{item.name}</h3>
          <p className="ml-4 text-sm">${(item.price * item.quantity).toFixed(2)}</p>
        </div>
        <p className="mt-1 text-sm text-gray-500">{item.category}</p>
        
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center border border-gray-300 rounded-md">
            <button
              type="button"
              onClick={handleDecrease}
              className="p-1 text-gray-500 hover:text-black focus:outline-none"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="px-2 text-sm">{item.quantity}</span>
            <button
              type="button"
              onClick={handleIncrease}
              className="p-1 text-gray-500 hover:text-black focus:outline-none"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
          <button
            type="button"
            onClick={() => removeItem(item.id)}
            className="font-medium text-red-600 hover:text-red-500 text-sm flex items-center gap-1"
          >
            <Trash2 className="h-4 w-4" /> Remove
          </button>
        </div>
      </div>
    </div>
  );
};
