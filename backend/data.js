import bcrypt from 'bcrypt';

const data = {
  users: [
    // {
    //   name: 'Akash',
    //   email: 'akash@admin.com',
    //   password: bcrypt.hashSync('akash', 8),
    //   isAdmin: true,
    // },
    // {
    //   name: 'Shivam',
    //   email: 'shivam@admin.com',
    //   password: bcrypt.hashSync('shivam', 8),
    //   isAdmin: true,
    // },
    // {
    //   name: 'Vihaan',
    //   email: 'vihaan@admin.com',
    //   password: bcrypt.hashSync('vihaan', 8),
    //   isAdmin: true,
    // },
    // {
    //   name: 'Bhavit',
    //   email: 'bhavit@admin.com',
    //   password: bcrypt.hashSync('bhavit', 8),
    //   isAdmin: true,
    // },
  ],
    products: [
      {
        
        name: 'Tata Sampann Unpolished Toor Dal/Arhar Dal, 1kg',
        category: 'groceries',
        image: '/images/1.webp',
        price: 139,
        countInStock: 10,
        brand: 'TATA',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        
        name: 'Fortune Rice Bran Health Oil, 5L',
        category: 'groceries',
        image: '/images/2.webp',
        price: 629,
        countInStock: 10,
        brand: 'Fortune',
        rating: 4.0,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        
        name: 'Nutraj California Almonds 1Kg',
        category: 'groceries',
        image: '/images/3.webp',
        price: 849,
        countInStock: 10,
        brand: 'Nutraj California',
        rating: 4.8,
        numReviews: 17,
        description: 'high quality product',
      },
      {
        
        name: 'Saffola Gold, Pro Healthy Lifestyle Edible Oil, Jar, 5 L',
        category: 'groceries',
        image: '/images/4.webp',
        price: 675,
        brand: 'Saffola Gold',
        countInStock: 10,
        rating: 4.5,
        numReviews: 14,
        description: 'high quality product',
      },
      {
        
        name: 'Fortune Rozana Basmati Rice, 1kg',
        category: 'groceries',
        image: '/images/5.webp',
        price: 65,
        countInStock: 10,
        brand: 'Fortune Rozana',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        
        name: 'Fruitri Kashmiri Walnut Without Shell, Akhrot Giri, 250g',
        category: 'groceries',
        image: '/images/6.webp',
        price: 436,
        countInStock: 10,
        brand: 'Fruitri Kashmiri',
        rating: 4.5,
        numReviews: 15,
        description: 'high quality product',
      },
    ],
  };
  export default data;