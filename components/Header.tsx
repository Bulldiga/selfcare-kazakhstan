import React, { useState, useEffect, useRef } from 'react';
import { Search, Menu, X, Globe, ChevronDown } from 'lucide-react';
import { CONTACT_INFO, UI_TEXT, LOGO_URL } from '../constants';
import { Language } from '../types';

interface HeaderProps {
  onSearch: (query: string) => void;
  toggleMobileMenu: () => void;
  isMobileMenuOpen: boolean;
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({ onSearch, toggleMobileMenu, isMobileMenuOpen, language, setLanguage }) => {
  const [searchValue, setSearchValue] = useState('');
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);
  const t = UI_TEXT[language];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchValue(val);
    onSearch(val);
  };

  const handleLangSelect = (lang: Language) => {
    setLanguage(lang);
    setIsLangMenuOpen(false);
  };

  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMobileMenuOpen) {
      toggleMobileMenu();
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const languages: { code: Language; label: string }[] = [
    { code: 'ru', label: 'RU' },
    { code: 'kz', label: 'KZ' },
    { code: 'en', label: 'EN' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-brand-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20 gap-4">
          
          {/* Logo Block */}
          <div className="flex-shrink-0 flex items-center cursor-pointer gap-3" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            {LOGO_URL ? (
              <img 
                src={LOGO_URL} 
                alt="Logo" 
                className="w-10 h-10 rounded-xl object-contain" 
              />
            ) : (
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 flex items-center justify-center text-white shadow-lg shadow-brand-500/30">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-6 h-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                 </svg>
              </div>
            )}
            <div className="hidden sm:flex flex-col">
               <span className="font-extrabold text-brand-900 text-xl tracking-tight leading-none">
                 SelfCare
               </span>
               <span className="text-[10px] font-semibold text-brand-400 uppercase tracking-widest">
                 Kazakhstan
               </span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl relative mx-8">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-brand-300" />
            </div>
            <input
              type="text"
              value={searchValue}
              onChange={handleSearchChange}
              className="block w-full pl-11 pr-4 py-3 border-0 rounded-full leading-5 bg-brand-50 text-brand-900 placeholder-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-200 transition duration-150 ease-in-out sm:text-sm font-medium"
              placeholder={t.searchPlaceholder}
            />
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-6 relative" ref={langMenuRef}>
            <button 
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 hover:bg-brand-100 transition-colors cursor-pointer text-brand-800 font-semibold text-sm"
            >
               <Globe size={16} />
               <span className="uppercase">{language}</span>
               <ChevronDown size={14} className={`transition-transform duration-200 ${isLangMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu Desktop */}
            {isLangMenuOpen && (
              <div className="absolute top-full right-0 mt-2 w-28 bg-white rounded-2xl shadow-xl border border-brand-100 overflow-hidden z-50 py-1 animate-fadeInUp">
                {languages.map((langItem) => (
                  <button
                    key={langItem.code}
                    onClick={() => handleLangSelect(langItem.code)}
                    className={`w-full text-left px-4 py-2.5 text-sm font-semibold transition-colors flex items-center justify-between
                      ${language === langItem.code ? 'text-brand-700 bg-brand-50' : 'text-gray-600 hover:bg-gray-50'}
                    `}
                  >
                    {langItem.label}
                    {language === langItem.code && <div className="w-1.5 h-1.5 rounded-full bg-brand-600" />}
                  </button>
                ))}
              </div>
            )}
          </div>
          
           {/* Mobile Menu Button & Lang */}
           <div className="flex md:hidden items-center gap-2 relative">
             {/* Mobile Language Dropdown Wrapper */}
             <div className="relative">
               <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsLangMenuOpen(!isLangMenuOpen);
                  }}
                  className="flex items-center gap-1 p-2 px-3 rounded-xl text-brand-800 font-bold uppercase text-sm bg-brand-50 active:bg-brand-100"
               >
                 {language}
                 <ChevronDown size={14} className={`transition-transform duration-200 ${isLangMenuOpen ? 'rotate-180' : ''}`} />
               </button>
               
               {/* Dropdown Menu Mobile */}
               {isLangMenuOpen && (
                  <div className="absolute top-full right-0 mt-2 w-24 bg-white rounded-xl shadow-xl border border-brand-100 overflow-hidden z-50 py-1 animate-fadeInUp">
                    {languages.map((langItem) => (
                      <button
                        key={langItem.code}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLangSelect(langItem.code);
                        }}
                        className={`w-full text-center px-4 py-3 text-sm font-bold transition-colors
                          ${language === langItem.code ? 'text-brand-700 bg-brand-50' : 'text-gray-600 hover:bg-gray-50'}
                        `}
                      >
                        {langItem.label}
                      </button>
                    ))}
                  </div>
                )}
             </div>

             <button onClick={toggleMobileMenu} className="p-2 rounded-xl text-brand-800 hover:bg-brand-50 focus:outline-none transition-colors">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="pb-3 md:hidden">
           <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-brand-300" />
            </div>
            <input
              type="text"
              value={searchValue}
              onChange={handleSearchChange}
              className="block w-full pl-10 pr-3 py-3 border-0 rounded-2xl leading-5 bg-brand-50 text-brand-900 placeholder-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-200 sm:text-sm"
              placeholder={t.searchPlaceholder}
            />
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown (Hamburger) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur border-t border-brand-100 absolute w-full shadow-2xl z-40 rounded-b-3xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <button onClick={(e) => handleScroll(e, 'catalog')} className="block w-full text-left px-4 py-3 rounded-xl text-base font-bold text-brand-900 hover:bg-brand-50 transition-all">{t.catalogTitle}</button>
            <button onClick={(e) => handleScroll(e, 'delivery')} className="block w-full text-left px-4 py-3 rounded-xl text-base font-bold text-brand-900 hover:bg-brand-50 transition-all">{t.categories.delivery}</button>
            <button onClick={(e) => handleScroll(e, 'contacts')} className="block w-full text-left px-4 py-3 rounded-xl text-base font-bold text-brand-900 hover:bg-brand-50 transition-all">{t.contactsTitle}</button>
            <div className="pt-2">
              <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full px-4 py-3 rounded-xl text-base font-bold text-white bg-green-500 hover:bg-green-600 transition-all shadow-lg shadow-green-200">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};