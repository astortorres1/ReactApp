const cart = {
  items: [],

  addItem: (product) => {
    const existingItem = cart.items.find(item => item.id === product.id);

    if (existingItem) {
      // Si el producto ya está en el carrito, incrementa la cantidad
      existingItem.quantity += 1;
    } else {
      // Si el producto no está en el carrito, agrégalo con cantidad 1
      cart.items.push({ ...product, quantity: 1 });
    }
  },
  
  removeItem: (productId) => {
    const indexToRemove = cart.items.findIndex(item => item.id === productId);
    
    if (indexToRemove !== -1) {
      // Si la cantidad del producto es mayor que 1, simplemente reduce la cantidad en 1
      if (cart.items[indexToRemove].quantity > 1) {
        cart.items[indexToRemove].quantity -= 1;
      } else {
        // Si la cantidad del producto es 1, elimina completamente el elemento del carrito
        cart.items.splice(indexToRemove, 1);
      }
    }
  },

  getTotalItems: () => {
    // Suma todas las cantidades de los productos en el carrito
    return cart.items.reduce((total, item) => total + item.quantity, 0);
  },

  getTotalPrice: () => {
    // Multiplica el precio de cada producto por su cantidad y luego suma todos los subtotales
    return cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
};

export default cart;
