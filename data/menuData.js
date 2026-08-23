export const menuCategories = [
  { id: 'all', name: 'Full Menu', icon: 'utensils' },
  { id: 'picked-for-you', name: 'Picked for You', icon: 'star' },
  { id: 'souvlakis', name: 'Souvlakis & Wraps', icon: 'flame' },
  { id: 'plates', name: 'Gyro & Skewer Plates', icon: 'layers' },
  { id: 'hsp', name: 'Hellenic Snack Pack (HSP)', icon: 'zap' },
  { id: 'appetizers', name: 'Appetizers & Mezedes', icon: 'salad' },
  { id: 'sides', name: 'Sides & Salads', icon: 'sparkles' },
  { id: 'desserts', name: 'Sweet Treats', icon: 'cake' },
  { id: 'beverages', name: 'Beverages & Greek Drinks', icon: 'wine' }
];

export const menuItems = [
  // ================= PICKED FOR YOU =================
  {
    id: 'ubereats-traditional-souvlaki',
    category: 'picked-for-you',
    name: 'Traditional Gyro Souvlaki',
    tag: '#1 Most Liked',
    badge: 'Popular',
    price: 18.00,
    rating: 4.9,
    reviews: 320,
    calories: '680 kcal',
    description: 'Your choice of charcoal gyro (chicken, pork, lamb, or mixed) with fresh lettuce, onion, tomato, house tzatziki, and chips wrapped in warm Greek pita.',
    image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=700&q=80',
    customizations: {
      meats: ['Charcoal Lamb Gyro', 'Charcoal Chicken Gyro', 'Crispy Pork Gyro', 'Mixed Lamb & Chicken Gyro'],
      sauces: ['Garlic Tzatziki', 'Spicy Feta Tirokafteri', 'Mustard Mayo', 'BBQ Sauce'],
      extras: ['Double Meat (+$6.00)', 'Extra Feta Cheese (+$2.50)', 'Extra Saganaki Cheese (+$5.00)', 'Extra Hot Chips (+$1.50)']
    }
  },
  {
    id: 'ubereats-hsp-snack-pack',
    category: 'picked-for-you',
    name: 'Hellenic Snack Pak (HSP)',
    tag: 'Fan Favorite',
    badge: 'Top Rated',
    price: 33.60,
    rating: 4.9,
    reviews: 285,
    calories: '1180 kcal',
    description: 'Heaps of golden chips layered with melted mozzarella cheese, topped with your choice of gyro meat and drenched with holy trinity sauces (Garlic Tzatziki, BBQ & Chili).',
    image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=700&q=80',
    customizations: {
      meats: ['Mixed Lamb & Chicken', 'All Lamb Gyro (+$3.00)', 'All Chicken Gyro', 'Pork Gyro'],
      sauces: ['The Holy Trinity (Garlic + BBQ + Chili)', 'Garlic Tzatziki & BBQ', 'Chili & Garlic Tzatziki']
    }
  },
  {
    id: 'ubereats-mixed-gyro-plate',
    category: 'picked-for-you',
    name: 'Mixed Gyro Plate',
    tag: 'Chef Feast',
    badge: 'Popular',
    price: 43.20,
    rating: 4.9,
    reviews: 210,
    calories: '980 kcal',
    description: 'A generous serving of charcoal lamb and chicken gyro off the spit, served with two warm pitas, seasoned chips, Greek salad, and tzatziki dip.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=700&q=80',
    customizations: {
      meats: ['Mixed Lamb & Chicken Gyro', 'All Lamb Gyro (+$4.00)', 'All Chicken Gyro'],
      sauces: ['Tzatziki Dip', 'Tirokafteri Dip', 'Eggplant Melitzanosalata Dip']
    }
  },
  {
    id: 'ubereats-mixed-gyro-two',
    category: 'picked-for-you',
    name: 'Mixed Gyro Plate for Two',
    tag: 'Feast for Two',
    badge: 'Best Value',
    price: 82.60,
    rating: 5.0,
    reviews: 178,
    calories: '1850 kcal',
    description: 'Huge Greek feast for two: Mixed charcoal lamb and chicken gyros, Greek loukaniko sausages, lamb cutlets, biftekia, 4 pitas, large chips, large Greek salad, and dips.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=700&q=80'
  },

  // ================= SOUVLAKIS & WRAPS =================
  {
    id: 'ubereats-chicarino-souvlaki',
    category: 'souvlakis',
    name: 'Chicarino Souvlaki',
    tag: 'House Special',
    badge: 'Must Try',
    price: 21.60,
    rating: 4.8,
    reviews: 164,
    calories: '740 kcal',
    description: 'Charcoal chicken gyro, melted Kefalograviera saganaki cheese, crispy bacon, lettuce, onion, tomato, and mustard mayo wrapped in warm pita.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80',
    customizations: {
      sauces: ['Mustard Mayo', 'Garlic Tzatziki', 'Chili Mayo'],
      extras: ['Extra Saganaki (+$5.00)', 'Crispy Bacon (+$3.00)', 'Hot Chips (+$1.50)']
    }
  },
  {
    id: 'ubereats-haloumi-souvlaki',
    category: 'souvlakis',
    name: 'Haloumi Souvlaki (Vegetarian)',
    tag: 'Vegetarian',
    badge: 'Popular',
    price: 21.60,
    rating: 4.8,
    reviews: 112,
    calories: '560 kcal',
    description: 'Grilled Cypriot haloumi cheese, roasted capsicum, crisp lettuce, onion, tomato, chips, and tzatziki wrapped in fluffy Greek pita.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80',
    customizations: {
      sauces: ['Garlic Tzatziki', 'Spicy Feta Dip', 'Hummus Dip'],
      extras: ['Extra Haloumi (+$5.00)', 'Avocado (+$3.00)']
    }
  },
  {
    id: 'ubereats-falafel-souvlaki',
    category: 'souvlakis',
    name: 'Falafel Souvlaki (Vegan)',
    tag: 'Plant-Based',
    badge: 'Vegan Choice',
    price: 18.00,
    rating: 4.7,
    reviews: 86,
    calories: '520 kcal',
    description: 'Crispy spiced falafels, fresh lettuce, tomato, onion, chips, and tahini garlic sauce wrapped in Greek pita.',
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'ubereats-skewer-souvlaki',
    category: 'souvlakis',
    name: 'Skewer Souvlaki (Kalamaki Wrap)',
    tag: 'Charcoal Skewer',
    badge: 'Classic',
    price: 21.60,
    rating: 4.8,
    reviews: 94,
    calories: '610 kcal',
    description: 'Charcoal-grilled marinated chicken or pork skewer, with fresh lettuce, tomato, onion, chips, and tzatziki in pita.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80',
    customizations: {
      meats: ['Chicken Skewer', 'Pork Skewer', 'Greek Loukaniko Sausage']
    }
  },

  // ================= PLATES & SKEWERS =================
  {
    id: 'ubereats-lamb-chop-plate',
    category: 'plates',
    name: 'Lamb Chop Plate (Paidaka)',
    tag: 'Charcoal Cutlets',
    badge: 'Premium',
    price: 44.40,
    rating: 5.0,
    reviews: 145,
    calories: '920 kcal',
    description: 'Tender Victorian lamb cutlets seasoned in oregano and lemon, grilled over charcoal, served with pita, chips, Greek salad, and tzatziki.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'ubereats-mixed-skewer-plate',
    category: 'plates',
    name: 'Mixed Skewer Plate',
    tag: 'Charcoal Trio',
    badge: 'Best Value',
    price: 43.20,
    rating: 4.8,
    reviews: 98,
    calories: '860 kcal',
    description: '3 marinated charcoal skewers (Chicken, Pork, and Loukaniko sausage) served with 2 warm pitas, seasoned chips, tzatziki, and Greek salad.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'ubereats-single-chicken-skewer',
    category: 'plates',
    name: 'Chicken Skewer (Single Kalamaki)',
    tag: 'Single Skewer',
    badge: 'Side',
    price: 10.80,
    rating: 4.7,
    reviews: 80,
    calories: '280 kcal',
    description: 'Tender chicken breast skewer marinated in Greek mountain herbs and lemon, flame-grilled on charcoal coals.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=700&q=80'
  },

  // ================= APPETIZERS & MEZEDES =================
  {
    id: 'ubereats-saganaki',
    category: 'appetizers',
    name: 'Flaming Saganaki Cheese',
    tag: 'Greek Cheese',
    badge: 'Top Pick',
    price: 16.50,
    rating: 4.9,
    reviews: 195,
    calories: '420 kcal',
    description: 'Thick slice of imported Greek Kefalograviera sheep cheese pan-seared until bubbly, finished with fresh lemon juice.',
    image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'ubereats-calamari',
    category: 'appetizers',
    name: 'Fried Calamari Plate',
    tag: 'Seafood',
    badge: 'Fresh Catch',
    price: 39.60,
    rating: 4.8,
    reviews: 92,
    calories: '540 kcal',
    description: 'Lightly seasoned tender calamari flash fried until golden, served with lemon garlic aioli, lemon wedge, and chips.',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'ubereats-dip-tzatziki',
    category: 'appetizers',
    name: 'Tzatziki / Garlic Dip & Warm Pita',
    tag: 'Traditional Dip',
    badge: 'Classic',
    price: 4.20,
    rating: 4.9,
    reviews: 160,
    calories: '150 kcal',
    description: 'Creamy strained Greek yogurt with grated cucumber, garlic, dill, and extra virgin olive oil, served with warm pita.',
    image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'ubereats-pita-bread',
    category: 'appetizers',
    name: 'Warm Greek Pita Bread',
    tag: 'Bread',
    badge: 'Fluffy',
    price: 4.20,
    rating: 4.9,
    reviews: 150,
    calories: '180 kcal',
    description: 'Fresh round Greek pita bread brushed with extra virgin olive oil and lightly charred over charcoal.',
    image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=700&q=80'
  },

  // ================= SIDES & SALADS =================
  {
    id: 'ubereats-greek-salad-large',
    category: 'sides',
    name: 'Greek Salad (Large)',
    tag: 'Village Salad',
    badge: 'Fresh',
    price: 21.60,
    rating: 4.8,
    reviews: 115,
    calories: '340 kcal',
    description: 'Cucumber, ripe tomatoes, Kalamata olives, Spanish onions, and Dodoni Greek feta block drizzled with extra virgin olive oil and oregano.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'ubereats-chips-large',
    category: 'sides',
    name: 'Oregano Seasoned Chips (Large)',
    tag: 'Hot Side',
    badge: 'Crispy',
    price: 12.00,
    rating: 4.8,
    reviews: 170,
    calories: '450 kcal',
    description: 'Golden crunchy chips tossed in Greek mountain oregano salt. (Small size available for $9.60).',
    image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'ubereats-chips-small',
    category: 'sides',
    name: 'Oregano Seasoned Chips (Small)',
    tag: 'Hot Side',
    badge: 'Side',
    price: 9.60,
    rating: 4.8,
    reviews: 95,
    calories: '280 kcal',
    description: 'Small portion of golden crunchy chips dusted with oregano salt.',
    image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=700&q=80'
  },

  // ================= SWEET TREATS =================
  {
    id: 'ubereats-baklava',
    category: 'desserts',
    name: 'Baklava',
    tag: 'Greek Pastry',
    badge: 'Handcrafted',
    price: 10.20,
    rating: 4.9,
    reviews: 105,
    calories: '410 kcal',
    description: 'Crisp golden filo pastry layered with spiced crushed walnuts, soaked in honey syrup.',
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'ubereats-loukoumades',
    category: 'desserts',
    name: 'Hot Honey Loukoumades',
    tag: 'Greek Donuts',
    badge: 'Made Fresh',
    price: 14.00,
    rating: 5.0,
    reviews: 185,
    calories: '480 kcal',
    description: 'Fried-to-order Greek honey puffs soaked in warm thyme honey syrup with cinnamon and crushed walnuts.',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=700&q=80'
  },

  // ================= BEVERAGES =================
  {
    id: 'ubereats-mythos-beer',
    category: 'beverages',
    name: 'Mythos Greek Draft Beer',
    tag: 'Draft Beer',
    badge: 'Imported',
    price: 11.50,
    rating: 4.9,
    reviews: 130,
    calories: '140 kcal',
    description: 'Ice cold authentic imported Greek lager poured directly from our railway sleeper bar tap.',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'ubereats-soft-drinks',
    category: 'beverages',
    name: 'Soft Drinks & Greek Sodas',
    tag: 'Drink Can',
    badge: 'Chilled',
    price: 4.80,
    rating: 4.7,
    reviews: 65,
    calories: '120 kcal',
    description: 'Choice of Greek Loux sour cherry / lemonade or classic Coca-Cola, Sprite, and Fanta.',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=700&q=80'
  }
];
