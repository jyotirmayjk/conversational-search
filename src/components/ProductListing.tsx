import React from 'react';
import { ProductCard } from './ProductCard';

const sampleProducts = [
  {
    id: '1',
    title: 'Sony WH-1000XM4 Wireless Noise Canceling Headphones',
    images: [
      'https://images.pexels.com/photos/3945666/pexels-photo-3945666.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    price: 279,
    originalPrice: 349,
    rating: 4.8,
    reviewCount: 12847,
    colors: ['Black', 'White', 'Blue'],
    brand: 'Sony',
    attributes: [
      { name: 'Wireless', matches: true },
      { name: 'Noise Canceling', matches: true },
      { name: 'Long Battery', matches: true }
    ],
    summaryText: 'Premium wireless headphones with industry-leading noise cancellation technology. Perfect for travel and daily commuting with 30-hour battery life.'
  },
  {
    id: '2',
    title: 'Apple MacBook Pro 14-inch M3 Chip with 8-Core CPU',
    images: [
      'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600'
    ],
    price: 1599,
    rating: 4.9,
    reviewCount: 8934,
    colors: ['Gray', 'Black'],
    brand: 'Apple',
    attributes: [
      { name: 'High Performance', matches: true },
      { name: 'Portable', matches: true },
      { name: 'Budget Friendly', matches: false }
    ],
    summaryText: 'Professional laptop with M3 chip delivering exceptional performance for creative work. Features stunning Liquid Retina XDR display and all-day battery life.'
  },
  {
    id: '3',
    title: 'Nike Air Max 270 Running Shoes for Men',
    images: [
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    price: 150,
    originalPrice: 180,
    rating: 4.6,
    reviewCount: 5632,
    colors: ['Black', 'White', 'Blue', 'Red'],
    brand: 'Nike',
    attributes: [
      { name: 'Comfort', matches: true },
      { name: 'Style', matches: true },
      { name: 'Waterproof', matches: false }
    ],
    summaryText: 'Iconic running shoes featuring Nike\'s largest heel Air unit for maximum comfort. Modern design meets athletic performance for everyday wear.'
  },
  {
    id: '4',
    title: 'Canon EOS R6 Mark II Mirrorless Camera Body',
    images: [
      'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    price: 2399,
    rating: 4.7,
    reviewCount: 3421,
    colors: ['Black'],
    brand: 'Canon',
    attributes: [
      { name: 'Professional', matches: true },
      { name: 'High Resolution', matches: true },
      { name: 'Beginner Friendly', matches: false }
    ],
    summaryText: 'Professional mirrorless camera with 24.2MP full-frame sensor. Advanced autofocus system and 4K video recording capabilities for serious photographers.'
  },
  {
    id: '5',
    title: 'Samsung Galaxy S24 Ultra 5G Smartphone',
    images: [
      'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    price: 1199,
    originalPrice: 1299,
    rating: 4.5,
    reviewCount: 9876,
    colors: ['Black', 'White', 'Gray', 'Blue'],
    brand: 'Samsung',
    attributes: [
      { name: '5G Ready', matches: true },
      { name: 'Large Screen', matches: true },
      { name: 'Compact', matches: false }
    ],
    summaryText: 'Flagship smartphone with S Pen functionality and advanced camera system. Features 6.8-inch Dynamic AMOLED display and all-day intelligent battery.'
  },
  {
    id: '6',
    title: 'Adidas Ultraboost 22 Running Shoes',
    images: [
      'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    price: 190,
    rating: 4.4,
    reviewCount: 4567,
    colors: ['White', 'Black', 'Gray', 'Blue'],
    brand: 'Adidas',
    attributes: [
      { name: 'Energy Return', matches: true },
      { name: 'Lightweight', matches: true },
      { name: 'Waterproof', matches: false }
    ],
    summaryText: 'Premium running shoes with BOOST midsole technology for incredible energy return. Engineered for long-distance running with superior comfort.'
  },
  {
    id: '7',
    title: 'Apple AirPods Pro (2nd Generation)',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3945666/pexels-photo-3945666.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    price: 249,
    originalPrice: 279,
    rating: 4.7,
    reviewCount: 15632,
    colors: ['White'],
    brand: 'Apple',
    attributes: [
      { name: 'Active Noise Cancellation', matches: true },
      { name: 'Spatial Audio', matches: true },
      { name: 'Budget Option', matches: false }
    ],
    summaryText: 'Advanced wireless earbuds with personalized spatial audio and adaptive transparency. Features H2 chip for smarter noise cancellation.'
  },
  {
    id: '8',
    title: 'Dell XPS 13 Laptop Intel Core i7',
    images: [
      'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    price: 1299,
    rating: 4.6,
    reviewCount: 7234,
    colors: ['Silver', 'Black'],
    brand: 'Dell',
    attributes: [
      { name: 'Ultraportable', matches: true },
      { name: 'Premium Build', matches: true },
      { name: 'Gaming Ready', matches: false }
    ],
    summaryText: 'Ultra-thin laptop with InfinityEdge display and premium materials. Perfect balance of performance and portability for professionals on the go.'
  }
];

export const ProductListing: React.FC = () => {
  return (
    <div className="w-full">
      {/* Single column layout for narrow mobile */}
      <div className="flex flex-col">
        {sampleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {/* Load More Button */}
      <div className="px-3 py-4 text-center">
        <button className="w-full px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 font-medium text-sm">
          Load More Products
        </button>
      </div>
    </div>
  );
};