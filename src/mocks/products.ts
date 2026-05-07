import { Product } from '@/types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Wireless Noise-Cancelling Headphones',
    price: 299.99,
    rating: 4.8,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
    description: 'Premium over-ear headphones with active noise cancellation and 30-hour battery life.',
  },
  {
    id: '2',
    name: 'Minimalist Mechanical Keyboard',
    price: 149.50,
    rating: 4.9,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80',
    description: 'Tenkeyless mechanical keyboard with tactile switches and customizable RGB backlighting.',
  },
  {
    id: '3',
    name: 'Ergonomic Office Chair',
    price: 399.00,
    rating: 4.5,
    category: 'Furniture',
    image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=500&q=80',
    description: 'Fully adjustable ergonomic chair designed for all-day comfort and back support.',
  },
  {
    id: '4',
    name: 'Smart Fitness Watch',
    price: 199.99,
    rating: 4.6,
    category: 'Wearables',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
    description: 'Water-resistant fitness tracker with heart rate monitoring, GPS, and sleep analysis.',
  },
  {
    id: '5',
    name: 'Ceramic Coffee Mug',
    price: 24.00,
    rating: 4.2,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&q=80',
    description: 'Handcrafted ceramic mug, perfect for your morning coffee or tea. Microwave and dishwasher safe.',
  },
  {
    id: '6',
    name: 'Leather Weekend Bag',
    price: 185.00,
    rating: 4.7,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80',
    description: 'Durable full-grain leather duffel bag for weekend getaways and short trips.',
  }
];

export const categories = Array.from(new Set(mockProducts.map((p) => p.category)));
