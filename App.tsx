import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryTabs } from './components/CategoryTabs';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { ContactForm } from './components/ContactForm';
import { InfoSection } from './components/InfoSection';
import { PRODUCTS, UI_TEXT, CONTACT_INFO } from './constants';
import { Category, Product, Language } from './types';

const App: React.FC = () => {
  // State
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [prefilledOrderProduct, setPrefilledOrderProduct] = useState<Product | null>(null);
  
  // Language State (Default: Russian)
  const [language, setLanguage] = useState<Language>('ru');

  // Filter Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const title = product.title[language].toLowerCase();
      const desc = product.description[language].toLowerCase();
      const query = searchQuery.toLowerCase();
      
      const matchesSearch = title.includes(query) || desc.includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, language]);

  // Handlers
  const handleOpenProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseProduct = () => {
    setSelectedProduct(null);
  };

  const handleOrder = (product: Product) => {
    // Logic: Redirect to WhatsApp with pre-filled message
    const message = language === 'en' 
      ? `Hello! I would like to order: ${product.title[language]}`
      : language === 'kz'
      ? `Сәлеметсіз бе! Мен тапсырыс бергім келеді: ${product.title[language]}`
      : `Здравствуйте! Меня интересует: ${product.title[language]}`;
      
    const url = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const t = UI_TEXT[language];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-200 selection:text-brand-900">
      <Header 
        onSearch={setSearchQuery} 
        toggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        isMobileMenuOpen={isMobileMenuOpen}
        language={language}
        setLanguage={setLanguage}
      />
      
      <main>
        {/* Only show Hero if not searching, to keep focus on results when searching */}
        {!searchQuery && <Hero language={language} />}

        <div id="catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
           <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-10">
              <h2 className="text-3xl sm:text-4xl font-black text-brand-900 tracking-tight">
                {t.catalogTitle}
              </h2>
              <div className="overflow-x-auto pb-2 -mx-4 px-4 lg:mx-0 lg:px-0 lg:pb-0 no-scrollbar">
                <CategoryTabs 
                  selectedCategory={selectedCategory} 
                  onSelectCategory={setSelectedCategory}
                  language={language} 
                />
              </div>
           </div>

          {/* Grid: Changed mobile from grid-cols-1 to grid-cols-2 with smaller gap */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3 sm:gap-8 lg:gap-10">
              {filteredProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onOpen={handleOpenProduct}
                  onOrder={handleOrder}
                  language={language}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-brand-50 rounded-3xl">
              <p className="text-brand-800 text-lg font-medium">{t.noProducts}</p>
              <button 
                onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                className="mt-4 text-brand-600 font-bold hover:underline"
              >
                {t.resetFilters}
              </button>
            </div>
          )}
        </div>

        <InfoSection language={language} />
        
        <ContactForm selectedProduct={prefilledOrderProduct} language={language} />
      </main>

      <footer className="bg-white border-t border-brand-50 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm font-medium">
            © {new Date().getFullYear()} SelfCare Kazakhstan. {t.footerRights}
          </p>
          <p className="text-gray-300 text-xs mt-3">
            {t.footerDisclaimer}
          </p>
        </div>
      </footer>

      {/* Modal */}
      <ProductModal 
        product={selectedProduct} 
        onClose={handleCloseProduct} 
        onOrder={handleOrder}
        language={language}
      />
    </div>
  );
};

export default App;
