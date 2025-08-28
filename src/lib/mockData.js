// Mock data for products
export const products = [
  {
    id: "1",
    name: "Wireless Bluetooth Headphones",
    description: "High-quality wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
    price: 129.99,
    image: "/api/placeholder/400/300",
    category: "Electronics",
    stock: 50,
  },
  {
    id: "2",
    name: "Smart Fitness Watch",
    description: "Track your fitness goals with this advanced smartwatch featuring heart rate monitoring, GPS, and water resistance.",
    price: 199.99,
    image: "/api/placeholder/400/300",
    category: "Wearables",
    stock: 30,
  },
  {
    id: "3",
    name: "Mechanical Gaming Keyboard",
    description: "RGB backlit mechanical keyboard with customizable keys and anti-ghosting technology for gaming enthusiasts.",
    price: 89.99,
    image: "/api/placeholder/400/300",
    category: "Gaming",
    stock: 25,
  },
  {
    id: "4",
    name: "Wireless Charging Pad",
    description: "Fast wireless charging pad compatible with all Qi-enabled devices. Sleek design with LED indicator.",
    price: 29.99,
    image: "/api/placeholder/400/300",
    category: "Accessories",
    stock: 100,
  },
  {
    id: "5",
    name: "Portable Power Bank",
    description: "20000mAh portable charger with fast charging technology and multiple USB ports for all your devices.",
    price: 49.99,
    image: "/api/placeholder/400/300",
    category: "Accessories",
    stock: 75,
  },
  {
    id: "6",
    name: "Smart Home Security Camera",
    description: "1080p HD camera with night vision, motion detection, and smartphone app control for home security.",
    price: 79.99,
    image: "/api/placeholder/400/300",
    category: "Security",
    stock: 40,
  },
];


let productList = [...products];

export const getProducts = () => {
  return productList;
};

export const getProductById = (id) => {
  return productList.find(product => product.id === id);
};

export const addProduct = (newProduct) => {
  const product = {
    ...newProduct,
    id: (productList.length + 1).toString(),
    image: "/api/placeholder/400/300",
  };
  productList.push(product);
  return product;
};

export const updateProduct = (id, updatedProduct) => {
  const index = productList.findIndex(product => product.id === id);
  if (index !== -1) {
    productList[index] = { ...productList[index], ...updatedProduct };
    return productList[index];
  }
  return null;
};

export const deleteProduct = (id) => {
  const index = productList.findIndex(product => product.id === id);
  if (index !== -1) {
    productList.splice(index, 1);
    return true;
  }
  return false;
};
