import React from 'react';
import { X, Check, Package, ShoppingBag } from 'lucide-react';
import { Product, Language } from '../types';
import { UI_TEXT } from '../constants';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onOrder: (product: Product) => void;
  language: Language;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onOrder, language }) => {
  if (!product) return null;
  const t = UI_TEXT[language];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-fadeInUp">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/10 hover:bg-black/20 text-white sm:text-gray-500 sm:bg-white sm:hover:bg-gray-100 rounded-full transition-colors"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col sm:flex-row h-full overflow-y-auto sm:overflow-hidden">
          {/* Image Side */}
          <div className="w-full sm:w-1/2 h-64 sm:h-auto bg-gray-50 relative shrink-0">
            <img 
              src={product.image} 
              alt={product.title[language]} 
              className="w-full h-full object-contain p-8"
            />
            {product.badge && (
               <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white uppercase
                  ${product.badge.color === 'red' ? 'bg-red-500' : ''}
                  ${product.badge.color === 'orange' ? 'bg-orange-500' : ''}
                  ${product.badge.color === 'green' ? 'bg-green-500' : ''}
               `}>
                 {product.badge.text[language]}
               </div>
            )}
          </div>

          {/* Details Side */}
          <div className="w-full sm:w-1/2 p-6 sm:p-8 flex flex-col bg-white overflow-y-auto">
             <div className="mb-auto">
                <span className="text-brand-600 text-xs font-bold uppercase tracking-wider mb-2 block">
                  {t.categories[product.category]}
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">{product.title[language]}</h2>
                
                <div className="flex items-center mb-6">
                  {product.inStock ? (
                    <span className="flex items-center text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded-lg">
                      <Check size={16} className="mr-1" /> {t.inStock}
                    </span>
                  ) : (
                    <span className="text-sm font-medium text-red-500 bg-red-50 px-2 py-1 rounded-lg">{t.outOfStock}</span>
                  )}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {product.fullDescription[language]}
                </p>

                {product.packageContents && (
                  <div className="mb-6 bg-gray-50 p-4 rounded-2xl">
                    <h4 className="flex items-center text-sm font-semibold text-gray-900 mb-2">
                      <Package size={16} className="mr-2 text-brand-600" />
                      {t.whatsInBox}
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1 ml-6 list-disc">
                      {product.packageContents.map((item, idx) => (
                        <li key={idx}>{typeof item === 'string' ? item : item[language]}</li>
                      ))}
                    </ul>
                  </div>
                )}
             </div>

             <div className="pt-4 border-t border-gray-100 mt-4">
                <div className="flex items-center justify-between mb-4">
                   <div className="text-gray-500 text-sm">{t.priceLabel}</div>
                   <div className="text-2xl font-bold text-gray-900">
                     {product.price > 0 ? `${product.price.toLocaleString()} ${product.currency}` : t.freeLabel}
                   </div>
                </div>
                <button 
                  onClick={() => onOrder(product)}
                  className="w-full flex items-center justify-center py-4 px-6 border border-transparent rounded-2xl shadow-lg shadow-brand-500/30 text-base font-medium text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-all active:scale-95"
                >
                  <ShoppingBag className="mr-2" size={20} />
                  {t.orderButton}
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};