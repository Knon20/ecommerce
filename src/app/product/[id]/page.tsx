import { mockProducts } from '@/mocks/products';
import { notFound } from 'next/navigation';
import { AddToCartButton } from '@/components/molecules/AddToCartButton';
import { Badge } from '@/components/atoms/Badge';
import { Star } from 'lucide-react';

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const product = mockProducts.find((p) => p.id === resolvedParams.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      {/* Product details */}
      <div className="lg:max-w-lg lg:self-end">
        <div className="mt-4">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{product.name}</h1>
        </div>

        <section aria-labelledby="information-heading" className="mt-4">
          <h2 id="information-heading" className="sr-only">
            Product information
          </h2>

          <div className="flex items-center">
            <p className="text-lg text-gray-900 sm:text-xl">${product.price.toFixed(2)}</p>

            <div className="ml-4 border-l border-gray-300 pl-4">
              <h2 className="sr-only">Reviews</h2>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <Star
                      key={rating}
                      className={`h-5 w-5 flex-shrink-0 ${
                        product.rating.rate > rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                      }`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="ml-2 text-sm text-gray-500">{product.rating.rate} out of 5 stars</p>
              </div>
            </div>
          </div>

          <div className="mt-4 space-y-6">
            <p className="text-base text-gray-500">{product.description}</p>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <Badge variant="secondary">{product.category}</Badge>
          </div>
        </section>
      </div>

      {/* Product image */}
      <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
        <div className="aspect-square overflow-hidden rounded-lg">
          <img src={product.image} alt={product.name} className="h-full w-full object-cover object-center" />
        </div>
      </div>

      {/* Add to cart section */}
      <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
        <section aria-labelledby="options-heading">
          <div className="mt-10">
            <AddToCartButton product={product} className="w-full text-base" size="lg" />
          </div>
        </section>
      </div>
    </div>
  );
}
