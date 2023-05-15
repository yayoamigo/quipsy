import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  price: number;
  quantity: number;
  id: number;
  uniqueId: string;
    name: string;
    img: string;
}

interface CartState {
  products: Product[];
  quantity: number;
  total: number;
}

const initialState: CartState = {
  products: [],
  quantity: 0,
  total: 0,
};

const generateUniqueId = (): string => {
  // Generate a unique identifier using a library or custom logic
    const uniqueId = Date.now().toString(36);
    return uniqueId;
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<{ price: number; quantity: number; id: number, name: string, img: string }>) => {
      const { price, quantity, id, name, img } = action.payload;
      const uniqueId = generateUniqueId();

      state.quantity += 1;
      state.products.push({ price, quantity, id, uniqueId, name, img });
      state.total += price * quantity;
    },
    removeItem: (state, action: PayloadAction<{ uniqueId: string; price: number; quantity: number; }>) => {
      const { uniqueId, price, quantity } = action.payload;

      const newProducts = state.products.filter((product) => product.uniqueId != uniqueId);
      state.products = newProducts;
      state.quantity -= quantity;
      if(state.total > 0){
      state.total -= price * quantity;
      } else {
            state.total = 0;
      }

      
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
