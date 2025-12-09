import React from 'react';
import { Product, Language } from '../types';
import { ShoppingBag } from 'lucide-react';
import { UI_TEXT } from '../constants';

interface ProductCardProps {
  product: Product;
  onOpen: (product: Product) => void;
  onOrder: (product: Product) => void;
  language: Language;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpen, onOrder, language }) => {
  const t = UI_TEXT[language];

  return (
    <div 
      className="group relative bg-white rounded-[24px] sm:rounded-[32px] hover:shadow-card transition-all duration-500 ease-out border border-gray-100 flex flex-col h-full overflow-hidden"
      onClick={() => onOpen(product)}
    >
      {/* Badge */}
      {product.badge && (
        <div className={`
          absolute top-3 left-3 sm:top-4 sm:left-4 z-10 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-sm
          ${product.badge.color === 'red' ? 'bg-brand-600 text-white' : ''}
          ${product.badge.color === 'green' ? 'bg-emerald-500 text-white' : ''}
          ${product.badge.color === 'orange' ? 'bg-orange-500 text-white' : ''}
        `}>
          {product.badge.text[language]}
        </div>
      )}

      {/* Image Container */}
      <div className="p-4 sm:p-6 pb-0 relative">
         <div className="aspect-[1/1] w-full relative overflow-hidden rounded-2xl bg-white">
           <img 
             src={product.image} 
             alt={product.title[language]} 
             className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out p-2 sm:p-4"
           />
         </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <h3 className="text-brand-950 font-extrabold text-sm sm:text-xl leading-snug mb-1 sm:mb-2 group-hover:text-brand-700 transition-colors line-clamp-2">
          {product.title[language]}
        </h3>
        <p className="text-gray-500 text-xs sm:text-sm font-medium line-clamp-2 mb-3 sm:mb-4 leading-relaxed">
          {product.description[language]}
        </p>
        
        {/* Footer actions */}
        <div className="mt-auto flex items-end justify-between">
           <div className="flex flex-col">
              <span className="text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-wide">{t.priceLabel}</span>
              {product.price > 0 ? (
                <span className="text-lg sm:text-2xl font-black text-brand-900">
                  {product.price.toLocaleString('ru-RU')} <span className="text-sm sm:text-lg text-brand-900/50">{product.currency}</span>
                </span>
              ) : (
                <span className="text-base sm:text-xl font-bold text-emerald-600 uppercase">{t.freeLabel}</span>
              )}
           </div>

           <button 
             onClick={(e) => { e.stopPropagation(); onOrder(product); }}
             className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl sm:rounded-2xl bg-brand-50 text-brand-700 hover:bg-brand-600 hover:text-white transition-all duration-300"
             title={t.orderButton}
           >
             <ShoppingBag size={20} className="sm:w-6 sm:h-6" strokeWidth={2.5} />
           </button>
        </div>
      </div>
    </div>
  );
};