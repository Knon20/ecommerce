export interface Product {
  id: string;
  name: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  category: string;
  image: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}
