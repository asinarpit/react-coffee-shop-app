// data.jsx

const menuItems = [
  {
    id: 1,
    name: "Espresso",
    description:
      "A strong black coffee. Made by forcing hot water through finely-ground coffee beans.",
    price: 2.5,
    image: "https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image link from Pexels or Unsplash
  },
  {
    id: 2,
    name: "Latte",
    description:
      "Coffee with a shot of espresso and steamed milk. Topped with a small amount of foam.",
    price: 3.0,
    image: "https://images.unsplash.com/photo-1595334291212-340125f4d28d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image link from Pexels or Unsplash
  },
  {
    id: 3,
    name: "Cappuccino",
    description:
      "Coffee with equal parts espresso, steamed milk, and milk foam. A classic Italian coffee.",
    price: 3.5,
    image: "https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image link from Pexels or Unsplash
  },
  {
    id: 4,
    name: "Mocha",
    description:
      "Espresso with steamed milk and chocolate. Topped with whipped cream.",
    price: 4.0,
    image: "https://images.unsplash.com/photo-1596078841242-12f73dc697c6?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image link from Pexels or Unsplash
  },
  {
    id: 5,
    name: "Iced Coffee",
    description:
      "Chilled coffee served over ice. Refreshing and perfect for warmer days.",
    price: 3.0,
    image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?q=80&w=1914&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image link from Pexels or Unsplash
  },
  {
    id: 6,
    name: "Americano",
    description:
      "A diluted espresso with hot water. Similar strength to drip coffee.",
    price: 2.8,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image link from Pexels or Unsplash
  },
  {
    id: 7,
    name: "Macchiato",
    description:
      'Espresso "stained" with a small amount of frothy milk. Simple and bold.',
    price: 3.2,
    image: "https://images.unsplash.com/photo-1563731649913-fab41907b535?q=80&w=1960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image link from Pexels or Unsplash
  },
];

const handpickedItems = [
  {
    id: 8,
    name: "Affogato",
    description:
      'Vanilla ice cream "drowned" in a shot of hot espresso. A delightful dessert and coffee combo.',
    price: 4.5,
    image:
      "https://images.unsplash.com/photo-1567357502214-dd13f3512e71?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    name: "Turkish Coffee",
    description:
      "Strong coffee brewed with finely ground coffee beans and cardamom. Served unfiltered.",
    price: 4.0,
    image:
      "https://images.unsplash.com/photo-1625965546698-d73053ef13b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    name: "Hazelnut Latte",
    description:
      "Latte infused with rich hazelnut flavor, topped with whipped cream.",
    price: 4.2,
    image:
      "https://images.unsplash.com/photo-1633040244595-19a2f7b24512?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 11,
    name: "Caramel Frappuccino",
    description:
      "Blended coffee with caramel syrup, topped with whipped cream and caramel drizzle.",
    price: 4.7,
    image:
      "https://images.unsplash.com/photo-1662047102608-a6f2e492411f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 12,
    name: "Maple Pecan Cold Brew",
    description:
      "Cold brew coffee with a hint of maple sweetness and a touch of pecan flavor.",
    price: 4.4,
    image:
      "https://images.unsplash.com/photo-1476283640833-a4964edad217?q=80&w=2038&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 13,
    name: 'Vanilla Bean Latte',
    description: 'Smooth latte with the natural sweetness of vanilla bean. A classic indulgence.',
    price: 4.3,
    image: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  
];

// latestOfferingsData.jsx

const latestOfferings = [
  {
    id: 14,
    name: 'Caramel Macchiato',
    description: 'Espresso with steamed milk and caramel syrup.',
    price: 4.99,
    imageUrl: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    sizes: ['Small', 'Medium', 'Large'],
    ingredients: ['Espresso', 'Steamed Milk', 'Caramel Syrup'],
    caffeineContent: 'Medium',
  },
  {
    id: 15,
    name: 'Vanilla Latte',
    description: 'Espresso with frothed milk and vanilla flavoring.',
    price: 5.49,
    imageUrl: 'https://images.unsplash.com/photo-1542192477-a60644b01f5c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    sizes: ['Small', 'Medium', 'Large'],
    ingredients: ['Espresso', 'Frothed Milk', 'Vanilla Flavoring'],
    caffeineContent: 'Low',
  },
  {
    id: 16,
    name: 'Cold Brew Coffee',
    description: 'Smooth and refreshing cold-brewed coffee.',
    price: 3.99,
    imageUrl: 'https://images.unsplash.com/photo-1625242662341-5e92c5101338?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    sizes: ['Regular', 'Large'],
    ingredients: ['Cold Brew Coffee'],
    caffeineContent: 'High',
  },
  {
    id: 17,
    name: 'Iced Mocha',
    description: 'Espresso with chocolate syrup and cold milk.',
    price: 5.99,
    imageUrl: 'https://images.unsplash.com/photo-1515755254959-4bde0f3185f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    sizes: ['Regular', 'Large'],
    ingredients: ['Espresso', 'Chocolate Syrup', 'Cold Milk'],
    caffeineContent: 'High',
  },
  {
    id: 18,
    name: 'Hazelnut Cappuccino',
    description: 'Espresso with steamed milk and hazelnut flavor.',
    price: 6.29,
    imageUrl: 'https://images.unsplash.com/photo-1511993839919-722684ee21f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    sizes: ['Small', 'Medium'],
    ingredients: ['Espresso', 'Steamed Milk', 'Hazelnut Flavor'],
    caffeineContent: 'Medium',
  },
  {
    id: 19,
    name: 'Cinnamon Dolce Latte',
    description: 'Espresso with steamed milk and cinnamon dolce syrup.',
    price: 5.79,
    imageUrl: 'https://images.unsplash.com/photo-1698947622919-c43774670527?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    sizes: ['Small', 'Medium', 'Large'],
    ingredients: ['Espresso', 'Steamed Milk', 'Cinnamon Dolce Syrup'],
    caffeineContent: 'Medium',
  },
  {
    id: 20,
    name: 'Mint Chocolate Chip Frappuccino',
    description: 'Blended coffee with mint syrup and chocolate chips.',
    price: 6.99,
    imageUrl: 'https://images.unsplash.com/photo-1514508985285-52fa488e199a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    sizes: ['Regular', 'Large'],
    ingredients: ['Blended Coffee', 'Mint Syrup', 'Chocolate Chips'],
    caffeineContent: 'High',
  },
  {
    id: 21,
    name: 'Maple Pecan Latte',
    description: 'Espresso with steamed milk, maple syrup, and pecan flavor.',
    price: 6.49,
    imageUrl: 'https://images.unsplash.com/photo-1476283640833-a4964edad217?q=80&w=2038&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    sizes: ['Small', 'Medium', 'Large'],
    ingredients: ['Espresso', 'Steamed Milk', 'Maple Syrup', 'Pecan Flavor'],
    caffeineContent: 'Medium',
  },
  {
    id: 22,
    name: 'Irish Cream Cold Brew',
    description: 'Cold brew coffee with Irish cream flavor.',
    price: 4.79,
    imageUrl: 'https://images.unsplash.com/photo-1471922597728-92f81bfe2445?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    sizes: ['Regular', 'Large'],
    ingredients: ['Cold Brew Coffee', 'Irish Cream Flavor'],
    caffeineContent: 'High',
  },
  
];




export { menuItems, handpickedItems, latestOfferings };
