import React, { useState } from 'react';
import { Star, Heart, ChevronLeft, ChevronRight, Check, X } from 'lucide-react';

interface ProductAttribute {
  name: string;
  matches: boolean;
}

interface Product {
  id: string;
  title: string;
  images: string[];
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  colors: string[];
  brand: string;
  attributes: ProductAttribute[];
  summaryText: string;
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-3 w-3 ${
          index < Math.floor(rating)
            ? 'fill-yellow-400 text-yellow-400'
            : index < rating
            ? 'fill-yellow-200 text-yellow-400'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  const colorMap: { [key: string]: string } = {
    'Black': 'bg-black',
    'White': 'bg-white border border-gray-300',
    'Blue': 'bg-blue-500',
    'Red': 'bg-red-500',
    'Green': 'bg-green-500',
    'Gray': 'bg-gray-500',
    'Brown': 'bg-amber-700',
    'Pink': 'bg-pink-500'
  };

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden mx-3 mb-2">
      {/* Image Section - Reduced height for 1.5 cards visibility */}
      <div className="relative w-full h-40 overflow-hidden">
        <img
          src={product.images[currentImageIndex]}
          alt={product.title}
          className="w-full h-full object-cover"
        />
        
        {/* Image Navigation */}
        {product.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-1.5 top-1/2 -translate-y-1/2 p-1 bg-white bg-opacity-90 rounded-full shadow-sm"
            >
              <ChevronLeft className="h-3 w-3" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1 bg-white bg-opacity-90 rounded-full shadow-sm"
            >
              <ChevronRight className="h-3 w-3" />
            </button>
          </>
        )}

        {/* Like Button */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-1.5 right-1.5 p-1 bg-white bg-opacity-90 rounded-full shadow-sm"
        >
          <Heart className={`h-3 w-3 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
        </button>

        {/* Image Indicators */}
        {product.images.length > 1 && (
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 flex space-x-0.5">
            {product.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-1 h-1 rounded-full transition-colors duration-200 ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                }`}
              />
            ))}
          </div>
        )}

        {/* Discount Badge */}
        {product.originalPrice && (
          <div className="absolute top-1.5 left-1.5 bg-red-500 text-white px-1.5 py-0.5 rounded text-xs font-medium">
            {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
          </div>
        )}
      </div>

      {/* Content Section - Compact for narrow width */}
      <div className="p-2.5">
        {/* Brand */}
        <div className="text-xs text-gray-600 mb-0.5">{product.brand}</div>

        {/* Title */}
        <h3 className="text-xs font-semibold text-gray-900 mb-1.5 line-clamp-2 leading-tight">{product.title}</h3>

        {/* Color Options */}
        <div className="flex items-center space-x-2 mb-1.5">
          <span className="text-xs text-gray-600">Colors:</span>
          <div className="flex justify-between w-12">
            {product.colors.slice(0, 4).map((color, index) => (
              <button
                key={index}
                onClick={() => setSelectedColor(index)}
                className={`w-0.5 h-0.5 ${colorMap[color] || 'bg-gray-300'} ${
                  selectedColor === index ? 'ring-1 ring-blue-500' : ''
                } transition-all duration-200`}
                title={color}
              />
            ))}
            {product.colors.length > 4 && (
              <div className="w-0.5 h-0.5 bg-gray-200 flex items-center justify-center">
                <span className="text-[4px] text-gray-600 leading-none">+{product.colors.length - 4}</span>
              </div>
            )}
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-1 mb-1.5">
          <div className="flex space-x-0.5">
            {renderStars(product.rating)}
          </div>
          <span className="text-xs text-gray-600">({product.reviewCount.toLocaleString()})</span>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-1.5 mb-2">
          <span className="text-base font-bold text-gray-900">${product.price}</span>
          {product.originalPrice && (
            <span className="text-xs text-gray-500 line-through">${product.originalPrice}</span>
          )}
        </div>

        {/* Product Attributes */}
        <div className="flex flex-wrap gap-1 mb-2">
          {product.attributes.map((attribute, index) => (
            <div
              key={index}
              className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs ${
                attribute.matches
                  ? 'bg-green-50 text-green-700 border border-green-200'
                  : 'bg-red-50 text-red-700 border border-red-200'
              }`}
            >
              {attribute.matches ? (
                <Check className="h-2.5 w-2.5" />
              ) : (
                <X className="h-2.5 w-2.5" />
              )}
              <span className="font-medium">{attribute.name}</span>
            </div>
          ))}
        </div>

        {/* Summary Text */}
        <div className="text-xs text-gray-600 leading-relaxed">
          {product.summaryText}
        </div>
      </div>
    </div>
  );
};