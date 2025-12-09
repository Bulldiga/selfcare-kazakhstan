import React, { useState } from 'react';
import { Send, Phone, Instagram, MessageCircle } from 'lucide-react';
import { CONTACT_INFO, UI_TEXT } from '../constants';
import { Product, Language } from '../types';

interface ContactFormProps {
  selectedProduct: Product | null;
  language: Language;
}

export const ContactForm: React.FC<ContactFormProps> = ({ selectedProduct, language }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', comment: '' });
  const [submitted, setSubmitted] = useState(false);
  const t = UI_TEXT[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send to backend or generate WhatsApp link
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contacts" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{t.contactsTitle}</h2>
          <p className="mt-4 text-lg text-gray-500">
            {t.contactsSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Quick Contacts */}
          <div className="bg-brand-50 rounded-3xl p-8 sm:p-10">
             <h3 className="text-xl font-bold text-gray-900 mb-6">{t.contactsTitle}</h3>
             <div className="space-y-6">
                <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noreferrer" className="flex items-center p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                   <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-4">
                     <MessageCircle size={24} />
                   </div>
                   <div>
                     <p className="text-sm text-gray-500 font-medium">WhatsApp</p>
                     <p className="text-lg font-bold text-gray-900">{CONTACT_INFO.whatsappLabel}</p>
                   </div>
                </a>
                
                <a href={CONTACT_INFO.telegram} target="_blank" rel="noreferrer" className="flex items-center p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                   <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 mr-4">
                     <Send size={24} />
                   </div>
                   <div>
                     <p className="text-sm text-gray-500 font-medium">Telegram</p>
                     <p className="text-lg font-bold text-gray-900">{CONTACT_INFO.telegramLabel}</p>
                   </div>
                </a>

                <a href={CONTACT_INFO.instagram} target="_blank" rel="noreferrer" className="flex items-center p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                   <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 mr-4">
                     <Instagram size={24} />
                   </div>
                   <div>
                     <p className="text-sm text-gray-500 font-medium">Instagram</p>
                     <p className="text-lg font-bold text-gray-900">{CONTACT_INFO.instagramLabel}</p>
                   </div>
                </a>

                <div className="flex items-center p-4 border-2 border-dashed border-gray-200 rounded-2xl">
                   <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 mr-4">
                     <Phone size={24} />
                   </div>
                   <div>
                     <p className="text-sm text-gray-500 font-medium">{t.formPhone}</p>
                     <p className="text-lg font-bold text-gray-900">{CONTACT_INFO.phone}</p>
                   </div>
                </div>
             </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl shadow-brand-900/5 border border-gray-100">
             <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">{t.formName}</label>
                   <input 
                    type="text" 
                    required 
                    className="block w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all outline-none"
                    placeholder="Иван"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                   />
                </div>
                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">{t.formPhone}</label>
                   <input 
                    type="tel" 
                    required 
                    className="block w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all outline-none"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                   />
                </div>
                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">{t.formComment}</label>
                   <textarea 
                    rows={4} 
                    className="block w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all outline-none resize-none"
                    placeholder={selectedProduct ? `Order: ${selectedProduct.title[language]}` : "..."}
                    value={formData.comment}
                    onChange={e => setFormData({...formData, comment: e.target.value})}
                   />
                </div>
                
                <button 
                  type="submit" 
                  disabled={submitted}
                  className={`w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-lg text-lg font-medium text-white transition-all
                    ${submitted ? 'bg-green-500' : 'bg-brand-600 hover:bg-brand-700 active:scale-95 shadow-brand-500/30'}
                  `}
                >
                  {submitted ? t.formSubmitted : t.formSubmit}
                </button>
                
                <p className="text-center text-xs text-gray-400 mt-4">
                  {t.formDisclaimer}
                </p>
             </form>
          </div>

        </div>
      </div>
    </section>
  );
};