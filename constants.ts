import { Product, Translations, Language, Category } from './types';

// ==========================================
// НАСТРОЙКИ КОНТАКТОВ (МЕНЯТЬ ЗДЕСЬ)
// ==========================================

// 1. Номер для WhatsApp (только цифры, без +)
// Используется для кнопок "Заказать" и "Написать в WhatsApp"
const WHATSAPP_NUMBER = '77003006669'; 

export const CONTACT_INFO = {
  // Номер для API
  whatsappNumber: WHATSAPP_NUMBER,
  
  // Ссылка на WhatsApp (формируется автоматически из номера выше)
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}`,

  // 2. Телефон, который отображается на сайте
  phone: '+7 700 300 6669',
  
  // 3. Ссылка на Telegram
  telegram: 'https://t.me/selfcare_kz_placeholder',
  
  // 4. Ссылка на Instagram
  instagram: 'https://www.instagram.com/sinocare.kz/?next=%2F',
  
  // 5. ТЕКСТ НА КНОПКАХ КОНТАКТОВ (то, что вы просили)
  whatsappLabel: '+7 700 300 6669',       // Текст для WhatsApp
  telegramLabel: '@SinocareKz',  // Текст для Telegram
  instagramLabel: '@sinocare.kz', // Текст для Instagram
  
  // 6. Адрес
  address: 'г. Алматы, ул. Богенбай Батыра 64'
};


// ==========================================
// TRANSLATIONS
// ==========================================

export const UI_TEXT: { [key in Language]: Translations } = {
  ru: {
    searchPlaceholder: "Поиск товаров...",
    catalogTitle: "Каталог товаров",
    resetFilters: "Сбросить фильтры",
    noProducts: "Товары не найдены",
    priceLabel: "Цена",
    freeLabel: "Бесплатно",
    orderButton: "Заказать", // Или "Купить"
    moreButton: "Подробнее",
    heroTitle: "Контроль глюкозы 24/7 без боли и проколов",
    heroSubtitle: "Датчики CGM Sinocare i3 с официальной поддержкой, гарантией и быстрой доставкой по всему Казахстану.",
    heroCta: "Смотреть товары",
    heroWhatsapp: "Написать в WhatsApp",
    contactsTitle: "Контакты и Заказ",
    contactsSubtitle: "Оставьте заявку или напишите нам напрямую",
    formName: "Ваше имя",
    formPhone: "Телефон",
    formComment: "Комментарий / Заказ",
    formSubmit: "Отправить заказ",
    formSubmitted: "Заявка отправлена!",
    formDisclaimer: "Нажимая кнопку, вы соглашаетесь с обработкой персональных данных",
    deliveryTitle: "Доставка и оплата",
    pickupTitle: "Самовывоз",
    pickupDesc: "г. Алматы, ул. Богенбай Батыра 64",
    pickupWarning: "⚠️ Предупредить заранее",
    cityDeliveryTitle: "Яндекс Доставка",
    cityDeliveryDesc: "Быстрая доставка по городу Алматы в день заказа.",
    countryDeliveryTitle: "По Казахстану",
    countryDeliveryDesc: "Отправка через СДЭК или Казпочту в любой город (2-5 дней).",
    inStock: "В наличии",
    outOfStock: "Нет в наличии",
    whatsInBox: "Что в комплекте:",
    footerRights: "Все права защищены.",
    footerDisclaimer: "Не является медицинским советом. Перед использованием проконсультируйтесь с врачом.",
    categories: {
      all: "Все",
      sensors: "Датчики",
      patches: "Патчи",
      consumables: "Расходники",
      delivery: "Доставка"
    }
  },
  kz: {
    searchPlaceholder: "Тауарларды іздеу...",
    catalogTitle: "Тауарлар каталогы",
    resetFilters: "Сүзгілерді тазалау",
    noProducts: "Тауарлар табылмады",
    priceLabel: "Бағасы",
    freeLabel: "Тегін",
    orderButton: "Тапсырыс беру",
    moreButton: "Толығырақ",
    heroTitle: "Глюкозаны 24/7 ауырсынусыз және тесусіз бақылау",
    heroSubtitle: "Қазақстан бойынша ресми қолдау, кепілдік және жылдам жеткізіліммен Sinocare i3 CGM датчиктері.",
    heroCta: "Тауарларды көру",
    heroWhatsapp: "WhatsApp-қа жазу",
    contactsTitle: "Байланыс және Тапсырыс",
    contactsSubtitle: "Өтінім қалдырыңыз немесе бізге тікелей жазыңыз",
    formName: "Сіздің атыңыз",
    formPhone: "Телефон",
    formComment: "Пікір / Тапсырыс",
    formSubmit: "Тапсырыс беру",
    formSubmitted: "Өтінім жіберілді!",
    formDisclaimer: "Түймені басу арқылы сіз дербес деректерді өңдеуге келісесіз",
    deliveryTitle: "Жеткізу және төлем",
    pickupTitle: "Алып кету",
    pickupDesc: "Алматы қ., Бөгенбай батыр көш., 64",
    pickupWarning: "⚠️ Алдын ала ескерту",
    cityDeliveryTitle: "Яндекс Жеткізу",
    cityDeliveryDesc: "Алматы қаласы бойынша тапсырыс күні жылдам жеткізу.",
    countryDeliveryTitle: "Қазақстан бойынша",
    countryDeliveryDesc: "СДЭК немесе Қазпошта арқылы кез келген қалаға жөнелту (2-5 күн).",
    inStock: "Қоймада бар",
    outOfStock: "Қоймада жоқ",
    whatsInBox: "Жиынтықта:",
    footerRights: "Барлық құқықтар қорғалған.",
    footerDisclaimer: "Медициналық кеңес емес. Қолданар алдында дәрігермен кеңесіңіз.",
    categories: {
      all: "Барлығы",
      sensors: "Датчиктер",
      patches: "Патчтар",
      consumables: "Шығын материалдары",
      delivery: "Жеткізу"
    }
  },
  en: {
    searchPlaceholder: "Search products...",
    catalogTitle: "Product Catalog",
    resetFilters: "Reset filters",
    noProducts: "No products found",
    priceLabel: "Price",
    freeLabel: "Free",
    orderButton: "Order via WhatsApp",
    moreButton: "More info",
    heroTitle: "Glucose control 24/7 without pain and punctures",
    heroSubtitle: "Sinocare i3 CGM sensors with official support, warranty, and fast delivery throughout Kazakhstan.",
    heroCta: "View Products",
    heroWhatsapp: "Write on WhatsApp",
    contactsTitle: "Contacts & Order",
    contactsSubtitle: "Leave a request or message us directly",
    formName: "Your name",
    formPhone: "Phone",
    formComment: "Comment / Order",
    formSubmit: "Submit Order",
    formSubmitted: "Request sent!",
    formDisclaimer: "By clicking the button, you agree to the processing of personal data",
    deliveryTitle: "Delivery & Payment",
    pickupTitle: "Pickup",
    pickupDesc: "Almaty, Bogenbay Batyr 64",
    pickupWarning: "⚠️ Notify in advance",
    cityDeliveryTitle: "Yandex Delivery",
    cityDeliveryDesc: "Fast delivery within Almaty on the day of order.",
    countryDeliveryTitle: "Across Kazakhstan",
    countryDeliveryDesc: "Shipping via CDEK or Kazpost to any city (2-5 days).",
    inStock: "In Stock",
    outOfStock: "Out of Stock",
    whatsInBox: "What's in the box:",
    footerRights: "All rights reserved.",
    footerDisclaimer: "Not medical advice. Consult a doctor before use.",
    categories: {
      all: "All",
      sensors: "Sensors",
      patches: "Patches",
      consumables: "Consumables",
      delivery: "Delivery"
    }
  }
};

// ==========================================
// PRODUCTS COLLECTION
// ==========================================

// ИНСТРУКЦИЯ ПО ЗАМЕНЕ КАРТИНОК:
// 1. Загрузите ваше фото на хостинг (например, Imgur).
// 2. Скопируйте прямую ссылку (должна заканчиваться на .jpg или .png).
// 3. Вставьте ссылку в поле 'image' ниже вместо 'https://picsum.photos/...'

export const PRODUCTS: Product[] = [
  {
    id: '1',
    title: {
      ru: 'Sinocare i3 — Датчик CGM',
      kz: 'Sinocare i3 — CGM Датчигі',
      en: 'Sinocare i3 — CGM Sensor'
    },
    description: {
      ru: 'Непрерывный мониторинг глюкозы без проколов. 21 день работы.',
      kz: 'Тесусіз глюкозаны үздіксіз бақылау. 21 күн жұмыс істейді.',
      en: 'Continuous glucose monitoring without punctures. 21 days battery.'
    },
    fullDescription: {
      ru: 'Система непрерывного мониторинга глюкозы (CGM) Sinocare i3. Позволяет отслеживать уровень сахара 24/7 через мобильное приложение. Водонепроницаемый, не требует калибровки проколом пальца.',
      kz: 'Sinocare i3 үздіксіз глюкоза мониторингі жүйесі (CGM). Мобильді қосымша арқылы қант деңгейін 24/7 бақылауға мүмкіндік береді. Су өткізбейтін, саусақты тесу арқылы калибрлеуді қажет етпейді.',
      en: 'Sinocare i3 Continuous Glucose Monitoring (CGM) System. Allows you to track sugar levels 24/7 via a mobile app. Waterproof, does not require finger prick calibration.'
    },
    price: 15000,
    currency: '₸',
    category: 'sensors',
    // ВСТАВЬТЕ ССЫЛКУ НА ВАШЕ ФОТО ДАТЧИКА НИЖЕ:
    image: 'https://res.cloudinary.com/dvv9l8gao/image/upload/v1764789819/sensor_j4soxy.webp', 
    badge: { text: { ru: 'ХИТ', kz: 'ХИТ', en: 'HIT' }, color: 'red' },
    inStock: true,
    durationDays: 21,
    packageContents: [
      { ru: '1 сенсор в упаковке', kz: 'Қаптамада 1 сенсор', en: '1 sensor per pack' },
      { ru: 'Аппликатор для установки', kz: 'Орнатуға арналған аппликатор', en: 'Applicator for installation' },
      { ru: 'Инструкция', kz: 'Нұсқаулық', en: 'Manual' }
    ]
  },
  {
    id: '2',
    title: {
      ru: 'Защитные наклейки (10 шт)',
      kz: 'Қорғаныс жапсырмалары (10 дана)',
      en: 'Protective Patches (10 pcs)'
    },
    description: {
      ru: 'Гипоаллергенные, водостойкие патчи для фиксации.',
      kz: 'Бекітуге арналған гипоаллергенді, суға төзімді патчтар.',
      en: 'Hypoallergenic, waterproof fixation patches.'
    },
    fullDescription: {
      ru: 'Специальные гипоаллергенные наклейки для дополнительной фиксации сенсора. Идеально подходят для занятий спортом, плавания и активного образа жизни. Цвет телесный.',
      kz: 'Сенсорды қосымша бекітуге арналған арнайы гипоаллергенді жапсырмалар. Спортпен шұғылдануға, жүзуге және белсенді өмір салтына өте ыңғайлы.',
      en: 'Special hypoallergenic stickers for additional sensor fixation. Ideal for sports, swimming and active lifestyle. Flesh colored.'
    },
    price: 900,
    currency: '₸',
    category: 'patches',
    // ВСТАВЬТЕ ССЫЛКУ НА ВАШЕ ФОТО ПАТЧЕЙ НИЖЕ:
    image: 'https://res.cloudinary.com/dvv9l8gao/image/upload/v1764838125/98_wdscrk.png',
    badge: { text: { ru: '-10%', kz: '-10%', en: '-10%' }, color: 'green' },
    inStock: true,
    packageContents: [
      { ru: '10 штук в упаковке', kz: 'Қаптамада 10 дана', en: '10 pieces per pack' },
      { ru: 'Водостойкий материал', kz: 'Суға төзімді материал', en: 'Waterproof material' },
      { ru: 'Гипоаллергенный клей', kz: 'Гипоаллергенді желім', en: 'Hypoallergenic glue' }
    ]
  },
  {
    id: '3',
    title: {
      ru: 'Ланцеты (50 шт)',
      kz: 'Ланцеттер (50 дана)',
      en: 'Lancets (50 pcs)'
    },
    description: {
      ru: 'Тонкие иглы для комфортного и быстрого прокола.',
      kz: 'Ыңғайлы және жылдам тесуге арналған жіңішке инелер.',
      en: 'Thin needles for comfortable and fast puncture.'
    },
    fullDescription: {
      ru: 'Тонкая игла помогает сделать прокол максимально комфортным и быстрым. Подходят для большинства стандартных ручек. Идеально для ежедневного контроля сахара.',
      kz: 'Жіңішке ине тесуді барынша ыңғайлы және жылдам жасауға көмектеседі. Көптеген стандартты тұтқаларға сәйкес келеді. Қантты күнделікті бақылау үшін өте қолайлы.',
      en: 'The fine needle helps make the puncture as comfortable and fast as possible. Suitable for most standard pens. Ideal for daily sugar control.'
    },
    price: 1500,
    currency: '₸',
    category: 'consumables',
    // ВСТАВЬТЕ ССЫЛКУ НА ВАШЕ ФОТО ЛАНЦЕТОВ НИЖЕ:
    image: 'https://res.cloudinary.com/dvv9l8gao/image/upload/v1764835283/IMG_2145_hybxwu.jpg',
    inStock: true,
    packageContents: [
      { ru: '50 штук в упаковке', kz: 'Қаптамада 50 дана', en: '50 pieces per pack' },
      { ru: 'Универсальный размер', kz: 'Әмбебап өлшем', en: 'Universal size' },
      { ru: 'Стерильно', kz: 'Стерильді', en: 'Sterile' }
    ]
  },
  {
    id: '4',
    title: {
      ru: 'Спиртовые салфетки (100 шт)',
      kz: 'Спиртті майлықтар (100 дана)',
      en: 'Alcohol Pads (100 pcs)'
    },
    description: {
      ru: 'Стерильные, 70% изопропиловый спирт.',
      kz: 'Стерильді, 70% изопропил спирті.',
      en: 'Sterile, 70% isopropyl alcohol.'
    },
    fullDescription: {
      ru: 'Стерильные спиртовые салфетки для обработки кожи. Пропитаны 70% изопропиловым спиртом. Незаменимы перед установкой датчиков, введением инсулина или взятием крови.',
      kz: 'Теріні өңдеуге арналған стерильді спиртті майлықтар. 70% изопропил спиртімен сіңдірілген. Датчиктерді орнату, инсулин енгізу немесе қан алу алдында қажет.',
      en: 'Sterile alcohol wipes for skin treatment. Impregnated with 70% isopropyl alcohol. Indispensable before installing sensors, injecting insulin or taking blood.'
    },
    price: 1200,
    currency: '₸',
    category: 'consumables',
    // ВСТАВЬТЕ ССЫЛКУ НА ВАШЕ ФОТО САЛФЕТОК НИЖЕ:
    image: 'https://res.cloudinary.com/dvv9l8gao/image/upload/v1764840124/Untitled_design_2_y4mspc.png',
    inStock: true,
    packageContents: [
      { ru: '100 штук в упаковке', kz: 'Қаптамада 100 дана', en: '100 pieces per pack' },
      { ru: '70% спирт', kz: '70% спирт', en: '70% alcohol' },
      { ru: 'Размер 60x30 мм', kz: 'Өлшемі 60x30 мм', en: 'Size 60x30 mm' }
    ]
  },
  {
    id: '5',
    title: {
      ru: 'Иглы для шприц-ручек (100 шт)',
      kz: 'Шприц-тұтқаларға арналған инелер (100 дана)',
      en: 'Pen Needles (100 pcs)'
    },
    description: {
      ru: '4мм (32G). Безболезненный укол.',
      kz: '4мм (32G). Ауырсынусыз инъекция.',
      en: '4mm (32G). Painless injection.'
    },
    fullDescription: {
      ru: 'Стерильные одноразовые иглы премиум-качества. Совместимы с большинством популярных шприц-ручек. Трехгранная лазерная заточка минимизирует болевые ощущения при проколе.',
      kz: 'Премиум сапалы стерильді бір реттік инелер. Ең танымал шприц-тұтқалармен үйлесімді. Үш қырлы лазерлік қайрау тесу кезіндегі ауырсыну сезімін азайтады.',
      en: 'Sterile premium quality disposable needles. Compatible with most popular insulin pens. Triple laser sharpening minimizes pain during puncture.'
    },
    price: 3500,
    currency: '₸',
    category: 'consumables',
    // ВСТАВЬТЕ ССЫЛКУ НА ВАШЕ ФОТО ИГЛ НИЖЕ:
    image: 'https://res.cloudinary.com/dvv9l8gao/image/upload/v1764839675/Untitled_design_qindsq.png',
    inStock: true,
    packageContents: [
      { ru: '100 штук в упаковке', kz: 'Қаптамада 100 дана', en: '100 pieces per pack' },
      { ru: 'Размер: 4мм (32G)', kz: 'Өлшемі: 4мм (32G)', en: 'Size: 4mm (32G)' },
      { ru: 'Безболезненный укол', kz: 'Ауырсынусыз инъекция', en: 'Painless injection' }
    ]
  }
];

export const CATEGORIES: { id: Category }[] = [
  { id: 'all' },
  { id: 'sensors' },
  { id: 'patches' },
  { id: 'consumables' },
  { id: 'delivery' }
];

// ==========================================
// CONFIGURATION
// ==========================================

// ИНСТРУКЦИЯ ДЛЯ ЛОГОТИПА:
// Вставьте ссылку на ваше изображение внутри кавычек.
// Пример: 'https://i.imgur.com/logo.png'
// Если оставить пустым, будет показана стандартная иконка молнии.
export const LOGO_URL = 'https://res.cloudinary.com/dvv9l8gao/image/upload/v1764790489/LOGO_zpi8oy.png';
