export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  idealFor: string;
  startingPrice: string;
  image: string;
}

export interface MenuItem {
  id: string;
  name: string;
  hindiName?: string;
  category: 'chaat' | 'starters' | 'mains' | 'breads_rice' | 'desserts' | 'bhandara' | 'beverages';
  description: string;
  isChefSpecial?: boolean;
  isDesiGhee?: boolean;
  isSatvik?: boolean; // No onion/garlic option
}

export interface PricingPlan {
  id: string;
  name: string;
  eventType: string;
  pricePerPlate: number;
  minimumGuests: number;
  minimumOrder: number;
  popular?: boolean;
  description: string;
  inclusions: string[];
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'all' | 'wedding' | 'birthday' | 'outdoor' | 'bhandara';
  categoryLabel: string;
  image: string;
  location: string;
  description: string;
}

export const BUSINESS_INFO = {
  name: 'EAT LOVE REPEAT CATERERS',
  shortName: 'Eat Love Repeat',
  tagline: 'DELHI KA SPECIAL SWAD',
  hindiTagline: 'दिल्ली का स्पेशल स्वाद',
  category: 'Premium Catering Services',
  phone: '7982486086',
  whatsapp: '9971659254',
  email: 'eatloverepeat@email.com',
  secondaryEmail: 'eatloverepeatcaterers0712@gmail.com',
  workingHours: '24/7 service availability to ensure we cover all your special events',
  pricingNote: '₹5,000 onwards, depending on guest count and menu selection',
  speciality: '100% PURE VEGETARIAN FOOD',
  specialFood: 'AUTHENTIC NORTH INDIAN',
  discountOffer: 'ORDER YOUR FIRST CATERING FROM US AND GET FLAT 10% OFF',
  discountCode: 'FIRST10',
  serviceArea: 'Delhi NCR · South Delhi · West Delhi · Rohini · Noida · Gurugram · Ghaziabad · Faridabad',
  mission: 'Eat Love Repeat was started with a mission to provide hygienic, good quality, healthy food at affordable prices.'
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'wedding',
    title: "Wedding Party's",
    subtitle: 'Grand Shahi Banquets & Pre-Wedding Functions',
    description: 'From vibrant Mehendi chaat corners to opulent Royal Reception banquets, we curate authentic Delhi Shahi feasts that leave your guests spellbound.',
    features: [
      'Elaborate Delhi 6 live street chaat counters',
      'Royal tandoor & starter displays with personalized servers',
      'Desi ghee North Indian curries & artisanal tandoori breads',
      'Imperial dessert stations with live jalebi & rabri tawa',
      'Complete luxury chafing setup & uniformed banquet staff'
    ],
    idealFor: 'Roka, Sangeet, Haldi, Weddings & Grand Receptions (50 to 5,000+ guests)',
    startingPrice: '₹550 / plate onwards',
    image: '/src/assets/images/gallery_wedding_catering_1790364204988.jpg'
  },
  {
    id: 'birthday',
    title: "Birthday Party's",
    subtitle: 'Kids, Milestones & Family Celebrations',
    description: 'Delightful, energetic menus crafted for all age groups. Crispy hot appetizers, interactive golgappa stations, sizzling paneer tikkas, and mouth-watering desserts.',
    features: [
      'Interactive live snack stations (Pav Bhaji, Chaat, Tikkis)',
      'Kid-friendly & adult-curated appetizer varieties',
      'Vibrant mocktail shooters & fresh welcome coolers',
      'Compact chafing setups ideal for homes, terraces, or clubhouses',
      'Prompt cleanup and hygiene-first handling'
    ],
    idealFor: '1st Birthdays, Sweet 16, 50th Milestones & House Parties (15 to 200 guests)',
    startingPrice: '₹350 / plate (Packs starting ₹5,000)',
    image: '/src/assets/images/gallery_birthday_catering_1790364216018.jpg'
  },
  {
    id: 'outdoor',
    title: 'Outdoor Catering',
    subtitle: 'Farmhouses, Lawns & Corporate Gatherings',
    description: 'Seamless outdoor dining solutions for scenic Delhi farmhouses, open lawns, and corporate retreats. Robust setup equipped for all weather conditions.',
    features: [
      'Live charcoal tandoors and rotis made fresh on the spot',
      'Elegant wooden & brass outdoor buffet counters',
      'Round-the-clock power and warming equipment compatibility',
      'Professional service team trained for open-air crowd management',
      'Corporate lunch/dinner packages with bespoke billing'
    ],
    idealFor: 'Farmhouse parties, Lawn dinners, Corporate galas, Society festivals (50 to 1,500+ guests)',
    startingPrice: '₹450 / plate onwards',
    image: '/src/assets/images/gallery_outdoor_catering_1790364227052.jpg'
  },
  {
    id: 'bhandara',
    title: 'Bhandara Booking / Catering',
    subtitle: 'Sacred Satsang, Jagran, Pooja & Community Feasts',
    description: 'Pure, sacred, and hygienic Mahaprasad catering prepared with devotion. 100% Satvik options (no onion, no garlic) cooked in pure desi ghee for holy gatherings.',
    features: [
      'Authentic Delhi Bedmi Puri, Hing Wale Aloo & Kaddu ki Launji',
      'Pure Desi Ghee Suji Halwa & traditional Kheer prasad',
      'Spotless food-grade stainless steel vessels & hygienic service',
      'Mass volume capacity feeding hundreds to thousands smoothly',
      'Strict sanctity guidelines maintained by devout kitchen staff'
    ],
    idealFor: 'Mata Ki Chowki, Jagran, Temple Bhandara, Shradh, Hawan, Gurudwara Langar (50 to 10,000+ devotees)',
    startingPrice: 'Packages starting from ₹5,000 flat',
    image: '/src/assets/images/gallery_bhandara_catering_1790364240993.jpg'
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // Chaat Counters
  {
    id: 'c1',
    name: 'Delhi 6 Purani Dilli Golgappa Counter',
    hindiName: 'पुरानी दिल्ली गोलगप्पे',
    category: 'chaat',
    description: 'Crispy sooji & atta puris served with 5 artisanal waters: Hing Pudina, Teekha Jaljeera, Khatta Meetha Saunth, Nimbu Adrak & Guava Chilli.',
    isChefSpecial: true
  },
  {
    id: 'c2',
    name: 'Crispy Kurkuri Aloo Tikki with Chole',
    hindiName: 'कुरकुरी आलू टिक्की छोले',
    category: 'chaat',
    description: 'Slow-griddled golden potato patties stuffed with spiced dal, smothered in rich Amritsari chole, beaten curd, date-tamarind saunth and mint chutney.',
    isChefSpecial: true
  },
  {
    id: 'c3',
    name: 'Dahi Papdi & Bhalla Chaat Royal',
    hindiName: 'दही पापड़ी भल्ला',
    category: 'chaat',
    description: 'Melt-in-mouth urad dal vadas and crispy papdi soaked in sweetened creamy curd, sprinkled with roasted cumin and pomegranate pearls.'
  },
  {
    id: 'c4',
    name: 'Raj Kachori Shahi Khazana',
    hindiName: 'राज कचौरी',
    category: 'chaat',
    description: 'King-sized crispy kachori packed with diced potatoes, sprouted moong, spiced bhallas, sweet yogurt, sev and roasted dry fruit garnish.'
  },

  // Starters
  {
    id: 's1',
    name: 'Bhatti Ka Malai Paneer Tikka',
    hindiName: 'मलाई पनीर टिक्का',
    category: 'starters',
    description: 'Fresh dairy cottage cheese cubes marinated in cardamom, hung curd and fresh cream, roasted in charcoal tandoor with capsicum and baby onions.',
    isChefSpecial: true
  },
  {
    id: 's2',
    name: 'Dahi Ke Sholay / Crispy Kebab',
    hindiName: 'दही के शोले',
    category: 'starters',
    description: 'Crispy golden bread pockets stuffed with spiced hung curd, bell peppers, fresh coriander and subtle green chillies.'
  },
  {
    id: 's3',
    name: 'Amritsari Soya Chaap Tikka',
    hindiName: 'सोया चाप टिक्का',
    category: 'starters',
    description: 'Juicy layered soya chaap skewers coated in authentic tandoori spices, smoked over live coal and basted with melted butter.'
  },
  {
    id: 's4',
    name: 'Crispy Honey Chilli Lotus Stem & Corn',
    hindiName: 'हनी चिली लोटस स्टेम',
    category: 'starters',
    description: 'Thinly sliced nadru (lotus stems) and sweet american corn flash-fried and tossed in sesame glaze with spring onions.'
  },
  {
    id: 's5',
    name: 'Hara Bhara Kebab with Cashew Crown',
    hindiName: 'हरा भरा कबाब',
    category: 'starters',
    description: 'Wholesome patties made of fresh spinach, green peas and potatoes, shallow fried and crowned with roasted whole cashew nuts.'
  },

  // Main Course
  {
    id: 'm1',
    name: '18-Hour Slow Cooked Dal Makhani',
    hindiName: 'शाही दाल मखनी',
    category: 'mains',
    description: 'Our iconic signature black lentils simmered overnight on low embers with churned white butter, rich dairy cream and smoked Kashmiri degi mirch.',
    isChefSpecial: true,
    isDesiGhee: true
  },
  {
    id: 'm2',
    name: 'Shahi Paneer Lazeez (Delhi Style)',
    hindiName: 'शाही पनीर लज़ीज़',
    category: 'mains',
    description: 'Velvety tomato, cashew and melon seed gravy scented with green cardamom, kasuri methi and succulent soft paneer cubes.',
    isChefSpecial: true
  },
  {
    id: 'm3',
    name: 'Paneer Lababdar & Butter Masala',
    hindiName: 'पनीर लबाबदार',
    category: 'mains',
    description: 'Rich semi-dry gravy studded with grated cottage cheese, chopped onions, and sun-ripened tomatoes finished with pure desi ghee.',
    isDesiGhee: true
  },
  {
    id: 'm4',
    name: 'Pindi Chana Masala (Authentic Delhi 6)',
    hindiName: 'पिंडी चना मसाला',
    category: 'mains',
    description: 'Dark, rustic chickpeas boiled with aromatic tea leaves and dry roasted whole spices, tempered with ginger juliennes and slit green chillies.'
  },
  {
    id: 'm5',
    name: 'Kashmiri Dum Aloo Banarsi',
    hindiName: 'कश्मीरी दम आलू',
    category: 'mains',
    description: 'Baby potatoes hand-pricked and slow simmered in an aromatic yogurt and fennel gravy, infused with authentic dry ginger (saunth).'
  },
  {
    id: 'm6',
    name: 'Subz Miloni Handi (Seasonal Veggies)',
    hindiName: 'सब्ज़ मिलोनी हांडी',
    category: 'mains',
    description: 'Farm-fresh broccoli, baby corn, green peas, carrots, and french beans tossed in a fragrant spinach and onion-tomato gravy.'
  },

  // Breads & Rice
  {
    id: 'b1',
    name: 'Live Tandoor Breads Selection',
    hindiName: 'ताज़ा तंदूरी रोटियां',
    category: 'breads_rice',
    description: 'Freshly baked at your event: Butter Naan, Garlic Naan, Laccha Paratha, Chur-Chur Naan, Missi Roti & Tandoori Roti.'
  },
  {
    id: 'b2',
    name: 'Shahi Dum Biryani with Burani Raita',
    hindiName: 'दम बिरयानी व रायता',
    category: 'breads_rice',
    description: 'Long-grain royal Basmati rice layered with garden vegetables, saffron milk, and rose water, sealed in dough handi.'
  },
  {
    id: 'b3',
    name: 'Kashmiri Pulao & Jeera Matar Rice',
    hindiName: 'कश्मीरी पुलाव',
    category: 'breads_rice',
    description: 'Gently spiced fragrant rice adorned with fried onions, roasted golden cashews, raisins, and garden green peas.'
  },

  // Desserts
  {
    id: 'd1',
    name: 'Desi Ghee Moong Dal Halwa',
    hindiName: 'मूँग दाल हलवा',
    category: 'desserts',
    description: 'Delhi’s favorite winter indulgence slow-roasted for hours in pure desi ghee, enriched with mawa, slivered almonds and pistachios.',
    isChefSpecial: true,
    isDesiGhee: true
  },
  {
    id: 'd2',
    name: 'Live Tawa Jalebi with Thick Kesari Rabri',
    hindiName: 'गरम जलेबी व रबड़ी',
    category: 'desserts',
    description: 'Piping hot, thin and crispy spiral jalebis fried live in pure desi ghee, served atop reduced saffron milk rabri.',
    isChefSpecial: true,
    isDesiGhee: true
  },
  {
    id: 'd3',
    name: 'Gulab Jamun Flambé & Kesar Rasmalai',
    hindiName: 'गुलाब जामुन व रसमलाई',
    category: 'desserts',
    description: 'Warm khoya dumplings filled with pistachio center paired with soft chenna discs immersed in chilled saffron cardamom milk.'
  },
  {
    id: 'd4',
    name: 'Gajar Ka Halwa (Seasonal Specialty)',
    hindiName: 'गाजर का हलवा',
    category: 'desserts',
    description: 'Red Delhi carrots grated and slow-cooked in whole milk, khoya and pure cow ghee, garnished with dry fruits.',
    isDesiGhee: true
  },

  // Bhandara Special
  {
    id: 'bh1',
    name: 'Bedmi Puri & Hing Wale Dubki Aloo',
    hindiName: 'बेड़मी पूरी व हींग आलू',
    category: 'bhandara',
    description: 'Crispy urad dal stuffed puris served with mouth-watering hing-tempered spiced potato curry, kachalu pickle and sweet pumpkin launji.',
    isChefSpecial: true,
    isSatvik: true
  },
  {
    id: 'bh2',
    name: 'Satvik Mahaprasad Thali (No Onion / No Garlic)',
    hindiName: 'सात्विक महाप्रसाद थाली',
    category: 'bhandara',
    description: 'Pure satvik meal prepared in sanctified utensils: Aloo Gobhi, Desi Chana Masala, Boondi Raita, Hot Poori and Kheer.',
    isSatvik: true
  },
  {
    id: 'bh3',
    name: 'Prasad Suji Halwa in Pure Desi Ghee',
    hindiName: 'प्रसाद सूजी हलवा',
    category: 'bhandara',
    description: 'Traditional temple-style golden semolina halwa cooked in pure desi ghee with cardamom and chopped dry fruits.',
    isDesiGhee: true,
    isSatvik: true
  },

  // Beverages
  {
    id: 'bv1',
    name: 'Shahi Rose Badam Sharbat & Kesar Thandai',
    hindiName: 'शाही बादाम शर्बत',
    category: 'beverages',
    description: 'Chilled refreshing milk infused with rose petals, roasted almond slivers, cardamom and pure saffron.'
  },
  {
    id: 'bv2',
    name: 'Delhi Masala Chaas & Fresh Mint Mojito',
    hindiName: 'मसाला छाछ व मोजिटो',
    category: 'beverages',
    description: 'Light spiced buttermilk with roasted cumin and mint, accompanied by virgin lime-mint fizz.'
  }
];

export const PRICING_PACKAGES: PricingPlan[] = [
  {
    id: 'mini_pack',
    name: 'Mini Gathering / Birthday Special',
    eventType: 'Birthday / Kitty / House Party',
    pricePerPlate: 299,
    minimumGuests: 15,
    minimumOrder: 5000,
    description: 'Ideal for intimate home celebrations and family gatherings. Starts at our flat ₹5,000 baseline.',
    inclusions: [
      '1 Welcome Drink / Cooler',
      '2 Hot Starters (Paneer Tikka + Veg Kebab)',
      '1 Delhi 6 Live Chaat Counter (Golgappe / Tikki)',
      '1 Paneer Dish + 1 Dal Makhani or Chana',
      'Live Tandoori Roti & Naan + Jeera Rice',
      '1 Hot Dessert (Gulab Jamun or Halwa)',
      'Disposables, condiments & warm chafing setup'
    ]
  },
  {
    id: 'bhandara_pack',
    name: 'Sacred Bhandara / Satsang Feast',
    eventType: 'Mata Ki Chowki / Hawan / Bhandara',
    pricePerPlate: 199,
    minimumGuests: 25,
    minimumOrder: 5000,
    popular: true,
    description: '100% Satvik, pure desi ghee preparations with high-capacity hygienic dispatch.',
    inclusions: [
      'Crispy Urad Dal Bedmi Puris (Made live)',
      'Delhi Famous Hing Wale Dubki Aloo',
      'Sweet & Tangy Kaddu / Petha Methi Launji',
      'Boondi Raita / Spiced Buttermilk',
      'Pure Desi Ghee Suji Halwa Prasad',
      'Hygienic eco-friendly leaf plates / donas included',
      'Strict sanctity maintained by devout chefs'
    ]
  },
  {
    id: 'celebration_pack',
    name: 'Grand Celebration / Outdoor Event',
    eventType: 'Anniversary / Corporate / Lawn Party',
    pricePerPlate: 499,
    minimumGuests: 30,
    minimumOrder: 15000,
    description: 'Extensive multi-course spread with live tandoor and dedicated hospitality stewards.',
    inclusions: [
      '2 Welcome Mocktails / Sharbats',
      '3 Live Starters (Paneer Tikka, Chaap, Hara Bhara)',
      '2 Street Chaat Stations (Purani Dilli Golgappe + Tikki)',
      '2 Signature Curries (Paneer Lababdar + 18-hr Dal Makhani)',
      'Seasonal Subz Handi + Kashmiri Pulao',
      'Assorted Tandoori Breads (Naan, Laccha, Missi)',
      '2 Desserts (Moong Dal Halwa + Kesar Rasmalai)',
      'Full buffet chafing units, fine cutlery & dressed staff'
    ]
  },
  {
    id: 'royal_wedding',
    name: 'Royal Delhi Shahi Wedding Spread',
    eventType: 'Wedding / Sangeet / Grand Reception',
    pricePerPlate: 799,
    minimumGuests: 75,
    minimumOrder: 60000,
    description: 'Our flagship opulent wedding banquet with endless live stations and royal service.',
    inclusions: [
      '3 Welcome Refreshers & Kulhad Masala Chai',
      '5 Gourmet Starters with live roving servers',
      '3 Grand Live Chaat Stations (Raj Kachori, Bhalla, Golgappa)',
      '3 Royal Gravies (Shahi Paneer, Dal Makhani, Dum Aloo)',
      'Dum Biryani Handi + Kashmiri Pulao + 2 Raitas',
      'Live Tandoori & Chur-Chur Naan Tawa Station',
      '4 Royal Desserts including Live Tawa Jalebi Rabri',
      'VIP lounge chafing dishes, brass decor & table managers'
    ]
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'g1',
    title: 'Grand Shahi Wedding Buffet Spread',
    category: 'wedding',
    categoryLabel: 'Wedding Party',
    image: '/src/assets/images/gallery_wedding_catering_1790364204988.jpg',
    location: 'Chattarpur Farmhouse, New Delhi',
    description: 'Lavish royal gold chafing setup with floral runners and 40+ North Indian pure veg delicacies for 800 wedding guests.'
  },
  {
    id: 'g2',
    title: 'Live Chaat & Snacks Birthday Carnival',
    category: 'birthday',
    categoryLabel: 'Birthday Party',
    image: '/src/assets/images/gallery_birthday_catering_1790364216018.jpg',
    location: 'Clubhouse, Greater Kailash, Delhi',
    description: 'Interactive golgappa bar with 5 flavored waters and sizzling paneer tikka skewers for a joyful 10th birthday.'
  },
  {
    id: 'g3',
    title: 'Outdoor Lawn Party & Live Tandoor',
    category: 'outdoor',
    categoryLabel: 'Outdoor Catering',
    image: '/src/assets/images/gallery_outdoor_catering_1790364227052.jpg',
    location: 'Sector 44 Lawn, Noida NCR',
    description: 'Starlit open-air dinner with live charcoal tandoor and rumali roti counter under festive string lights.'
  },
  {
    id: 'g4',
    title: 'Traditional Sacred Bhandara & Mahaprasad',
    category: 'bhandara',
    categoryLabel: 'Bhandara Catering',
    image: '/src/assets/images/gallery_bhandara_catering_1790364240993.jpg',
    location: 'Mata Mandir, Rohini, Delhi',
    description: 'Pure desi ghee Bedmi Puri, Hing Wale Dubki Aloo, and sanctified Suji Halwa for a massive 1,200+ devotee satsang.'
  },
  {
    id: 'g5',
    title: 'Opulent Banquet Chafing & Live Stations',
    category: 'wedding',
    categoryLabel: 'Wedding Party',
    image: '/src/assets/images/hero_catering_buffet_1790364192298.jpg',
    location: 'Five-Star Banquet, Gurugram',
    description: 'Gleaming hammered copper and brass tandoori buffet with live kulhad chai and dessert counters.'
  }
];

export const TESTIMONIALS = [
  {
    name: 'Rajesh & Sunita Malhotra',
    event: 'Daughter’s Wedding Reception (650 Guests)',
    location: 'Sainik Farms, New Delhi',
    text: 'Every single guest praised the food! The Dal Makhani tasted like pure heaven, and the live Jalebi Rabri counter was the highlight of the night. Eat Love Repeat Caterers delivered pure 5-star quality at a genuinely reasonable price.',
    rating: 5,
    highlight: 'Flawless taste & royal presentation'
  },
  {
    name: 'Vikas Sharma',
    event: 'Mata Ki Chowki & Bhandara (400 Devotees)',
    location: 'Rohini Sector 14, Delhi',
    text: 'Arranging pure satvik food without onion and garlic that tastes so deeply flavorful is an art. The Bedmi Puri and Hing Aloo reminded everyone of Chandni Chowk traditions. The team was punctual, clean, and extremely respectful.',
    rating: 5,
    highlight: '100% Satvik & authentic Delhi flavor'
  },
  {
    name: 'Pooja Aggarwal',
    event: 'Son’s 1st Birthday Party (80 Guests)',
    location: 'South Extension, Delhi',
    text: 'We took the birthday package starting at ₹5,000 and customized it. The Golgappa counter with 5 waters had people queuing up repeatedly! Zero stress for us as hosts. 24/7 responsiveness on WhatsApp too!',
    rating: 5,
    highlight: 'Hygienic setup & super responsive'
  }
];

export const FAQS = [
  {
    question: 'Is your food 100% pure vegetarian?',
    answer: 'Yes, absolutely! We strictly operate a 100% Pure Vegetarian kitchen. We use fresh dairy, cold-pressed oils, and pure desi ghee. We also offer 100% Satvik (no onion, no garlic) and Jain catering upon request.'
  },
  {
    question: 'What is the starting price for catering bookings?',
    answer: 'Our catering packages start from just ₹5,000 onwards for intimate house parties and mini gatherings. Per-plate packages range from ₹199 to ₹799+ depending on your guest count, menu items, and setup requirements.'
  },
  {
    question: 'How does the 24/7 service availability work?',
    answer: 'Events in Delhi happen around the clock—from early morning 5:00 AM Poojas and Hawans to mid-night wedding Pheras and late-night farmhouse after-parties. Our booking desk and catering teams are available 24/7 to cater to your specific schedule.'
  },
  {
    question: 'How do I avail the Flat 10% OFF on my first order?',
    answer: 'Simply use coupon code FIRST10 when requesting your quote through our website or mention it on WhatsApp (9971659254) / Phone (7982486086). We will automatically deduct 10% from your final bill!'
  },
  {
    question: 'Which areas in Delhi NCR do you serve?',
    answer: 'We cover the entire Delhi NCR region including South Delhi, North Delhi, West Delhi, East Delhi, Central Delhi, Rohini, Dwarka, Noida, Greater Noida, Gurugram, Ghaziabad, and Faridabad.'
  },
  {
    question: 'Can we customize the menu completely?',
    answer: 'Yes! Our sample menu represents "Everything you need", but you have 100% freedom to mix and match dishes, add live counters, adjust spice levels, or create your dream customized feast.'
  }
];
