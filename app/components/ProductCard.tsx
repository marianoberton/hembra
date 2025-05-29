'use client';

import Link from 'next/link';
import Image from 'next/image';
import { TiendanubeProduct } from '../../types/tiendanube';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: TiendanubeProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS'
    }).format(price);
  };

  const getMainImage = (): string => {
    if (product.images && product.images.length > 0) {
      return product.images[0].src;
    }
    return '/placeholder-product.jpg'; // Imagen por defecto
  };

  const getProductName = (): string => {
    if (typeof product.name === 'string') {
      return product.name;
    }
    return product.name?.es || product.name?.en || 'Producto sin nombre';
  };

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Verificar stock antes de agregar
    if (product.stock_management && !product.stock_unlimited && product.stock <= 0) {
      alert('Producto sin stock disponible');
      return;
    }
    
    addToCart(product, 1);
    
    // Mostrar feedback visual
    const button = e.currentTarget;
    const originalText = button.textContent;
    button.textContent = '✓ Agregado';
    button.style.backgroundColor = '#10b981';
    
    setTimeout(() => {
      button.textContent = originalText;
      button.style.backgroundColor = '';
    }, 1500);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
      <Link href={`/producto/${product.id}`}>
        <div className="aspect-square relative bg-gray-100">
          <Image
            src={getMainImage()}
            alt={getProductName()}
            fill
            className="object-cover hover:scale-105 transition-transform duration-200"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          
          {/* Badge de descuento si existe */}
          {product.promotional_offer && product.promotional_offer.price && (
            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-medium">
              ¡Oferta!
            </div>
          )}
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/producto/${product.id}`}>
          <h3 className="font-medium text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
            {getProductName()}
          </h3>
        </Link>

        {/* Precio */}
        <div className="mb-3">
          {product.promotional_offer && product.promotional_offer.price ? (
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-red-600">
                {formatPrice(product.promotional_offer.price)}
              </span>
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(product.price)}
              </span>
            </div>
          ) : (
            <span className="text-lg font-bold text-gray-900">
              {formatPrice(product.price)}
            </span>
          )}
        </div>

        {/* Stock */}
        <div className="mb-3">
          {product.stock_management && product.stock_unlimited === false ? (
            <span className={`text-sm ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {product.stock > 0 ? `Stock: ${product.stock}` : 'Sin stock'}
            </span>
          ) : (
            <span className="text-sm text-green-600">Disponible</span>
          )}
        </div>

        {/* Botón de agregar al carrito */}
        <button
          onClick={handleAddToCart}
          disabled={product.stock_management && !product.stock_unlimited && product.stock <= 0}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          {product.stock_management && !product.stock_unlimited && product.stock <= 0 
            ? 'Sin stock' 
            : 'Agregar al carrito'
          }
        </button>
      </div>
    </div>
  );
} 