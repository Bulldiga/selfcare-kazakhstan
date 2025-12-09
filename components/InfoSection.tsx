import React from 'react';
import { MapPin, Truck, Box } from 'lucide-react';
import { CONTACT_INFO, UI_TEXT } from '../constants';
import { Language } from '../types';

interface InfoSectionProps {
  language: Language;
}

export const InfoSection: React.FC<InfoSectionProps> = ({ language }) => {
  const t = UI_TEXT[language];

  return (
    <section id="delivery" className="py-16 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
           <h2 className="text-3xl font-extrabold text-gray-900">{t.deliveryTitle}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pickup */}
          <div className="bg-white rounded-[24px] p-8 shadow-sm text-center hover:shadow-lg transition-shadow">
             <div className="w-16 h-16 mx-auto bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-6">
               <MapPin size={32} />
             </div>
             <h3 className="text-xl font-bold text-gray-900 mb-2">{t.pickupTitle}</h3>
             <p className="text-gray-600 mb-4">{t.pickupDesc}</p>
             <div className="inline-block px-3 py-1 bg-yellow-50 text-yellow-700 text-xs font-semibold rounded-full border border-yellow-100">
               {t.pickupWarning}
             </div>
          </div>

          {/* City Delivery */}
          <div className="bg-white rounded-[24px] p-8 shadow-sm text-center hover:shadow-lg transition-shadow">
             <div className="w-16 h-16 mx-auto bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-6">
               <Truck size={32} />
             </div>
             <h3 className="text-xl font-bold text-gray-900 mb-2">{t.cityDeliveryTitle}</h3>
             <p className="text-gray-600 mb-4">{t.cityDeliveryDesc}</p>
          </div>

          {/* Country Delivery */}
          <div className="bg-white rounded-[24px] p-8 shadow-sm text-center hover:shadow-lg transition-shadow">
             <div className="w-16 h-16 mx-auto bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-6">
               <Box size={32} />
             </div>
             <h3 className="text-xl font-bold text-gray-900 mb-2">{t.countryDeliveryTitle}</h3>
             <p className="text-gray-600 mb-4">{t.countryDeliveryDesc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};