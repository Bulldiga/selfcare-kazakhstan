import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { CONTACT_INFO, UI_TEXT } from '../constants';
import { Language } from '../types';

interface HeroProps {
  language: Language;
}

export const Hero: React.FC<HeroProps> = ({ language }) => {
  const t = UI_TEXT[language];

  const scrollToCatalog = (e: React.MouseEvent) => {
    e.preventDefault();
    const catalog = document.getElementById('catalog');
    if (catalog) {
      catalog.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-brand-50/50 to-white pt-12 pb-16 sm:pt-20 sm:pb-24">
      {/* Decorative background elements matching screenshot vibe */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-brand-200/40 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-200/30 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4rem] font-black text-brand-900 tracking-tight leading-[1.1] uppercase mb-6">
          {t.heroTitle}
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-brand-800/70 font-medium leading-relaxed">
          {t.heroSubtitle}
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button
            onClick={scrollToCatalog}
            className="w-full sm:w-auto min-w-[200px] flex items-center justify-center px-8 py-4 text-lg font-bold rounded-2xl text-white bg-brand-700 hover:bg-brand-800 transition-all shadow-xl shadow-brand-700/30 transform hover:-translate-y-1 cursor-pointer border-none"
          >
            {t.heroCta}
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          
          <a
            href={CONTACT_INFO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-w-[240px] flex items-center justify-center px-8 py-4 text-lg font-bold rounded-2xl text-brand-800 bg-white border-2 border-transparent hover:border-brand-100 shadow-lg shadow-gray-200/50 transition-all transform hover:-translate-y-1"
          >
            <MessageCircle className="mr-2 h-6 w-6 text-brand-600" />
            {t.heroWhatsapp}
          </a>
        </div>
      </div>
    </section>
  );
};