import React from 'react';

function ProductGrid() {
  const products = [
    {
      id: 1,
      name: 'Financial Accounting Basics',
      author: 'John Doe',
      price: 29.99,
      imageUrl: 'https://example.com/ebook1.jpg', // Replace with a valid image URL
    },
    {
      id: 2,
      name: 'Managerial Accounting Essentials',
      author: 'Jane Smith',
      price: 39.99,
      imageUrl: 'https://example.com/ebook2.jpg', // Replace with a valid image URL
    },
    {
      id: 3,
      name: 'Tax Accounting Made Easy',
      author: 'Alice Johnson',
      price: 34.99,
      imageUrl: 'https://example.com/ebook3.jpg', // Replace with a valid image URL
    },
    {
      id: 4,
      name: 'Auditing and Assurance Fundamentals',
      author: 'Robert Brown',
      price: 49.99,
      imageUrl: 'https://example.com/ebook4.jpg', // Replace with a valid image URL
    },
  ];

  return (
    <div className="bg-white">
      <div className="container mx-auto w-full px-4 py-7 lg:w-full lg:px-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Recommended for You</h2>
          <a href="/products" className="text-sm text-indigo-600 hover:text-indigo-900">
            More Products
          </a>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageUrl}
                  alt={`Cover of ${product.name} by ${product.author}.`}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0"></span>
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.author}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductGrid;
