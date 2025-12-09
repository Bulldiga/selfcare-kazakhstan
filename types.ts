export type Category = 'all' | 'sensors' | 'patches' | 'consumables' | 'delivery';

export type Language = 'ru' | 'kz' | 'en';

export type LocalizedString = {
  [key in Language]: string;
};

export interface Product {
  id: string;
  title: LocalizedString;
  description: LocalizedString; // shortDescription
  fullDescription: LocalizedString;
  price: number;
  currency: string;
  category: Category;
  image: string;
  badge?: {
    text: LocalizedString;
    color: 'red' | 'green' | 'orange'; // red=sale, green=new, orange=hit
  };
  inStock: boolean;
  packageContents?: LocalizedString[]; // inBox
  ctaLink?: string; // Optional external link
  durationDays?: number;
}

export interface FilterState {
  category: Category;
  searchQuery: string;
}

export interface Translations {
  searchPlaceholder: string;
  catalogTitle: string;
  resetFilters: string;
  noProducts: string;
  priceLabel: string;
  freeLabel: string;
  orderButton: string;
  moreButton: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCta: string;
  heroWhatsapp: string;
  contactsTitle: string;
  contactsSubtitle: string;
  formName: string;
  formPhone: string;
  formComment: string;
  formSubmit: string;
  formSubmitted: string;
  formDisclaimer: string;
  deliveryTitle: string;
  pickupTitle: string;
  pickupDesc: string;
  pickupWarning: string;
  cityDeliveryTitle: string;
  cityDeliveryDesc: string;
  countryDeliveryTitle: string;
  countryDeliveryDesc: string;
  inStock: string;
  outOfStock: string;
  whatsInBox: string;
  footerRights: string;
  footerDisclaimer: string;
  categories: {
    [key in Category]: string;
  };
}