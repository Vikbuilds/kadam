export const PRODUCTS = [
  {
    id: 'kdm-f01',
    code: 'KDM-F01',
    name: 'HORN OK PLEASE FLAT LACE - AIR FORCE 1 EDITION',
    tagline: 'Gully truck art meets street flex on Air Force 1',
    category: 'funky',
    price: 449,
    originalPrice: 599,
    rating: 4.9,
    reviewCount: 148,
    image: '/assets/af1_horn_ok.jpg',
    badge: 'Bestseller',
    badgeType: 'hot',
    description: 'Bright mustard yellow flat lace with bold black & red typography reading "HORN OK PLEASE" laced up on classic Air Force 1 eyestays. An instant conversation starter.',
    specs: {
      material: '100% Polyester Jacquard Weave',
      width: '8mm flat width',
      durability: 'Triple-stitched snag-resistant weave',
      drop: 'Drop #01 - Limited 250 Units'
    },
    pattern: {
      type: 'jacquard-truck',
      baseColor: '#EAB308',
      textColor: '#111827',
      text: 'HORN OK PLEASE ★ ROAD KING',
      accentColor: '#EF4444'
    },
    lengths: ['120 cm', '140 cm', '160 cm'],
    agletOptions: [
      { id: 'gunmetal', name: 'Gunmetal Silver', hex: '#64748B' },
      { id: 'matte-black', name: 'Matte Black', hex: '#1E293B' },
      { id: 'antique-brass', name: 'Antique Brass', hex: '#B45309' },
      { id: 'neon-orange', name: 'Neon Saffron', hex: '#FF5722' }
    ]
  },
  {
    id: 'kdm-h01',
    code: 'KDM-H01',
    name: 'LUCKNOWI CHIKANKARI GLOW - AIR FORCE 1 EDITION',
    tagline: 'Lucknowi royal embroidery on raw white Air Force 1 canvas',
    category: 'heritage',
    price: 549,
    originalPrice: 699,
    rating: 5.0,
    reviewCount: 204,
    image: '/assets/af1_chikankari.jpg',
    badge: 'Heritage Elite',
    badgeType: 'gold',
    description: 'Intricate Lucknowi Chikankari floral weave in delicate white threads laced up on a white Air Force 1 leather foundation. Subtle tonal depth for triple-white kicks.',
    specs: {
      material: 'Premium Woven Cotton-Poly Blend',
      width: '8mm flat width',
      durability: 'Multi-layer jacquard embroidered relief',
      drop: 'Awadh Heritage Drop #01'
    },
    pattern: {
      type: 'chikankari-floral',
      baseColor: '#F5F5F0',
      embroideryColor: '#FFFFFF',
      accentColor: '#E5E0D8'
    },
    lengths: ['120 cm', '140 cm', '160 cm'],
    agletOptions: [
      { id: 'antique-brass', name: 'Antique Brass', hex: '#B45309' },
      { id: 'gunmetal', name: 'Gunmetal Silver', hex: '#64748B' },
      { id: 'matte-black', name: 'Matte Black', hex: '#1E293B' },
      { id: 'neon-orange', name: 'Neon Saffron', hex: '#FF5722' }
    ]
  },
  {
    id: 'kdm-h02',
    code: 'KDM-H02',
    name: 'AJRAKH ASTRONOMICAL MATRIX - AIR FORCE 1 EDITION',
    tagline: 'Geometric Sindhi blocks in royal indigo on Air Force 1',
    category: 'heritage',
    price: 499,
    originalPrice: 629,
    rating: 4.9,
    reviewCount: 132,
    image: '/assets/af1_ajrakh.jpg',
    badge: 'Artisanal Block',
    badgeType: 'blue',
    description: 'Authentic Sindhi and Gujarati geometric block-print motifs in natural indigo blue and crimson red on Air Force 1. Finished with metallic dubrae lock.',
    specs: {
      material: 'Soft Touch Printed Flat Cotton',
      width: '8mm flat width',
      durability: 'Colorfast screen printing on combed cotton',
      drop: 'Kutch Artisanal Series'
    },
    pattern: {
      type: 'ajrakh-geometry',
      baseColor: '#1E3A8A',
      secondaryColor: '#991B1B',
      accentColor: '#F8FAFC'
    },
    lengths: ['120 cm', '140 cm', '160 cm'],
    agletOptions: [
      { id: 'matte-black', name: 'Matte Black', hex: '#1E293B' },
      { id: 'gunmetal', name: 'Gunmetal Silver', hex: '#64748B' },
      { id: 'antique-brass', name: 'Antique Brass', hex: '#B45309' },
      { id: 'neon-orange', name: 'Neon Saffron', hex: '#FF5722' }
    ]
  },
  {
    id: 'kdm-h04',
    code: 'KDM-H04',
    name: 'BANDHANI FLAME TIE-DYE - AIR FORCE 1 EDITION',
    tagline: 'Rajasthani fire tie-dye on liquid satin',
    category: 'heritage',
    price: 449,
    originalPrice: 599,
    rating: 4.9,
    reviewCount: 165,
    image: '/assets/catalog_bandhani.jpg',
    badge: 'Festival Flame',
    badgeType: 'saffron',
    description: 'Vibrant fire orange and marigold yellow tie-dye speckle pattern replicating authentic Rajasthani Bandhani art on Air Force 1 eyestays.',
    specs: {
      material: 'Sublimation Flat Satin Polyester',
      width: '8mm flat width',
      durability: 'Fade-proof thermal sublimation',
      drop: 'Marwar Festival Drop'
    },
    pattern: {
      type: 'bandhani-dots',
      baseColor: '#EA580C',
      dotColor: '#FDE047',
      accentColor: '#C2410C'
    },
    lengths: ['120 cm', '140 cm', '160 cm'],
    agletOptions: [
      { id: 'neon-orange', name: 'Neon Saffron', hex: '#FF5722' },
      { id: 'antique-brass', name: 'Antique Brass', hex: '#B45309' },
      { id: 'gunmetal', name: 'Gunmetal Silver', hex: '#64748B' },
      { id: 'matte-black', name: 'Matte Black', hex: '#1E293B' }
    ]
  },
  {
    id: 'kdm-f02',
    code: 'KDM-F02',
    name: 'GULLY CYBER-NEON (3M) - AIR FORCE 1 EDITION',
    tagline: 'Split-tone glow with 3M flash',
    category: 'funky',
    isReflective: true,
    price: 499,
    originalPrice: 649,
    rating: 4.8,
    reviewCount: 112,
    image: '/assets/catalog_gully_neon.jpg',
    badge: '3M Reflective',
    badgeType: 'neon',
    description: 'Split-color lace—half electric neon green, half hot cyberpunk pink—woven with light-blasting 3M reflective threads laced up on Air Force 1.',
    specs: {
      material: 'Flat 3M Reflective Ballistic Nylon',
      width: '9mm flat width',
      durability: 'Water-repellent reflective coating',
      drop: 'Cyber Gully Series'
    },
    pattern: {
      type: 'split-neon',
      baseColor: '#22C55E',
      secondaryColor: '#EC4899',
      reflectiveColor: '#FFFFFF',
      accentColor: '#10B981'
    },
    lengths: ['120 cm', '140 cm', '160 cm'],
    agletOptions: [
      { id: 'matte-black', name: 'Matte Black', hex: '#1E293B' },
      { id: 'gunmetal', name: 'Gunmetal Silver', hex: '#64748B' },
      { id: 'neon-orange', name: 'Neon Saffron', hex: '#FF5722' },
      { id: 'antique-brass', name: 'Antique Brass', hex: '#B45309' }
    ]
  },
  {
    id: 'kdm-f03',
    code: 'KDM-F03',
    name: 'CUTTING CHAI SPECKLE ROPE - AIR FORCE 1 EDITION',
    tagline: 'Brewed spices & braided street ropes',
    category: 'funky',
    isRope: true,
    price: 399,
    originalPrice: 499,
    rating: 4.9,
    reviewCount: 94,
    image: '/assets/catalog_chai_speckle.jpg',
    badge: 'Rope Spec',
    badgeType: 'warm',
    description: 'Deep cardamom brown rope lace speckled with cream flecks laced up on white Air Force 1. High-density braided rope texture.',
    specs: {
      material: 'High-density Round Rope Lace',
      width: '5mm round diameter',
      durability: 'Reinforced core, no sagging',
      drop: 'Tapri Collection'
    },
    pattern: {
      type: 'rope-speckle',
      baseColor: '#78350F',
      speckle1: '#FEF3C7',
      speckle2: '#F97316',
      accentColor: '#92400E'
    },
    lengths: ['120 cm', '140 cm', '160 cm'],
    agletOptions: [
      { id: 'antique-brass', name: 'Antique Brass', hex: '#B45309' },
      { id: 'gunmetal', name: 'Gunmetal Silver', hex: '#64748B' },
      { id: 'matte-black', name: 'Matte Black', hex: '#1E293B' },
      { id: 'neon-orange', name: 'Neon Saffron', hex: '#FF5722' }
    ]
  },
  {
    id: 'kdm-a01',
    code: 'KDM-A01',
    name: 'DEVANAGARI ZINC DUBRAE SET',
    tagline: 'Solid zinc lace locks engraved with "कदम"',
    category: 'accessories',
    price: 349,
    originalPrice: 449,
    rating: 4.9,
    reviewCount: 178,
    image: '/assets/catalog_dubrae.jpg',
    badge: 'Heavy Metal',
    badgeType: 'metal',
    description: 'Two pairs (4 pcs total) of high-grade zinc alloy sneaker lace dubraes (locks). Precision laser-engraved with Devanagari "कदम". Photorealistic studio metallic hardware edition.',
    specs: {
      material: 'Die-cast Zinc Alloy with PVD Coating',
      dimensions: '30mm x 10mm x 4mm slot',
      finish: '1 Pair Gunmetal + 1 Pair Matte Gold',
      compatibility: 'Fits all flat and rope laces up to 10mm'
    },
    pattern: {
      type: 'accessory-dubrae',
      baseColor: '#64748B',
      accentColor: '#EAB308'
    },
    lengths: ['Universal Fit'],
    agletOptions: [
      { id: 'gunmetal-gold', name: 'Gunmetal & Gold Combo', hex: '#D97706' },
      { id: 'matte-black', name: 'Dual Matte Black', hex: '#1E293B' }
    ]
  },
  {
    id: 'kdm-a02',
    code: 'KDM-A02',
    name: 'SCREW-ON METAL AGLET KIT',
    tagline: 'DIY metal tip upgrade kit with micro screwdriver',
    category: 'accessories',
    price: 299,
    originalPrice: 399,
    rating: 4.8,
    reviewCount: 142,
    image: '/assets/catalog_aglet_kit.jpg',
    badge: 'Customizer Essential',
    badgeType: 'orange',
    description: 'Transform any sneaker lace into luxury hardware in 2 minutes. Contains 8 screw-on stainless steel aglet tips, 10 precision micro-screws, and mini screwdriver in a matte metal tin.',
    specs: {
      material: '316L Stainless Steel Tips',
      kitIncludes: '8 Aglets + 10 Screws + 1 Mini Screwdriver + Tin Box',
      finish: 'Scratch-resistant anodized finish',
      fit: 'Universal fit for any standard or custom lace'
    },
    pattern: {
      type: 'accessory-kit',
      baseColor: '#334155',
      accentColor: '#FF5722'
    },
    lengths: ['DIY Kit (8 Tips)'],
    agletOptions: [
      { id: 'mixed-pack', name: 'Gunmetal + Matte Black', hex: '#334155' },
      { id: 'gold-brass', name: 'Gold + Antique Brass', hex: '#B45309' }
    ]
  }
];
