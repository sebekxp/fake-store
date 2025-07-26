import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import type { Product } from '@/features/products/types/product.types';

export interface CartItem {
  product: Product;
  quantity: number;
}

export const cartItemsAtom = atomWithStorage<CartItem[]>('cart-items', []);

export const cartTotalAtom = atom(get => {
  const cartItems = get(cartItemsAtom);
  return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
});

export const cartItemCountAtom = atom(get => {
  const cartItems = get(cartItemsAtom);
  return cartItems.reduce((total, item) => total + item.quantity, 0);
});

export const addToCartAtom = atom(null, (get, set, product: Product) => {
  const cartItems = get(cartItemsAtom);
  const index = cartItems.findIndex(item => item.product.id === product.id);
  const newCart = [...cartItems];

  if (index !== -1) {
    const existingItem = newCart[index];
    newCart[index] = { ...existingItem, quantity: existingItem.quantity + 1 };
  } else {
    newCart.push({ product, quantity: 1 });
  }

  set(cartItemsAtom, newCart);
});

export const updateCartItemQuantityAtom = atom(
  null,
  (get, set, { productId, newQuantity }: { productId: number; newQuantity: number }) => {
    const cartItems = get(cartItemsAtom);

    if (newQuantity <= 0) {
      set(
        cartItemsAtom,
        cartItems.filter(item => item.product.id !== productId)
      );
      return;
    }

    set(
      cartItemsAtom,
      cartItems.map(item =>
        item.product.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  }
);

export const removeFromCartAtom = atom(null, (get, set, productId: number) => {
  const cartItems = get(cartItemsAtom);
  set(
    cartItemsAtom,
    cartItems.filter(item => item.product.id !== productId)
  );
});
