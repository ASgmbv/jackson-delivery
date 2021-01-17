import create from "zustand";

const compare = (itemA, itemB) => {
  let a = { ...itemA };
  let b = { ...itemB };
  delete a.quantity;
  delete b.quantity;
  return JSON.stringify(a) === JSON.stringify(b);
};

const useCartStore = create((set, get) => ({
  items: [],
  addItem: (newItem) => {
    const { items } = get();

    const existingCartItem = items.find((item) => {
      return compare(item, newItem);
    });

    if (existingCartItem) {
      return set({
        items: items.map((item) => {
          if (compare(item, newItem)) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        }),
      });
    }

    return set({ items: [...items, { ...newItem, quantity: 1 }] });
  },

  removeItem: (cartItemToRemove) => {
    const { items } = get();

    const existingCartItem = items.find((cartItem) => {
      return compare(cartItemToRemove, cartItem);
    });

    if (existingCartItem.quantity === 1) {
      return set({
        items: items.filter((cartItem) => !compare(cartItemToRemove, cartItem)),
      });
    }

    return set({
      items: items.map((cartItem) =>
        compare(cartItemToRemove, cartItem)
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      ),
    });
  },
  clearItem: (itemToClear) => {
    const { items } = get();
    return set({
      items: items.filter((item) => item.title !== itemToClear.title),
    });
  },
  clearCart: () => {
    return set({
      items: [],
    });
  },
}));

export default useCartStore;
