import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  //crear el estado inicial
  items: [],

  //--ACCIONES
  addProduct: (product) => {
    const { items } = get();
    const existingProduct = items.findIndex((item) => item._id === product.id);

    if (existingProduct !== -1) {
      const updatedItems = [...items];
      updatedItems[existingProduct].quantity += 1;
      set({ items: updatedItems });
    } else {
      set({ items: [...items, { ...product, quantity: 1 }] });
    }
  },

  removeProduct: (productId) => {
    set((state) => ({
      items: state.items.filter((item) => item._id !== productId),
    }));
  },

  incrementQuantity: (productId) => {
    set((state) => ({
      items: state.items.map((item) =>
        item._id === productId ? { ...item, quantity: item.quantity + 1 } : item
      ),
    }));
  },

  decrementQuantity: (productId) => {
    set((state) => ({
      items: state.items
        .map((item) =>
          item._id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0),
    }));
  },

  //aqui van los selectores (estado derivado)

  //los selectores nosa dan datos calculados del estado
  getTotalItems: () => {
    const { items } = get();
    return items.reduce((total, item) => total + item.quantity, 0);
  },

  getTotalPrice: () => {
    const { items } = get();
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  },
}));
