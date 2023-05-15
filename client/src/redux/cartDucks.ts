import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  products: [] as { price: number; quantity: number ; id: number }[],
  quantity: 0,
  total: 0
};

// Create interface for state
export interface CartState {
  products: { price: number; quantity: number; id: number }[];
  quantity: number;
  total: number;
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<{ price: number; quantity: number; id: number}>) => {
    const { price, quantity, id } = action.payload;
      state.quantity += 1;
      state.products.push({ price: price, quantity: quantity, id: id });
      state.total += price * quantity;
    }
  }
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
