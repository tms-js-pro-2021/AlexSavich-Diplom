const TOKEN = 'token';
const CART_ITEMS = 'cart_items';

export const setToken = token => {
  localStorage.setItem(TOKEN, token);
};

export const getToken = () => localStorage.getItem(TOKEN);

export const getCartItems = () => {
  const data = localStorage.getItem(CART_ITEMS);
  return data ? JSON.parse(data) : [];
};

export const setItemToCart = item => {
  const cartItems = getCartItems() || [];

  localStorage.setItem(CART_ITEMS, JSON.stringify([...cartItems, item]));
};

export const removeFromCart = itemId => {
  const cartItems = getCartItems() || [];

  localStorage.setItem(
    CART_ITEMS,
    JSON.stringify(cartItems.filter(item => item.id !== itemId))
  );
};
