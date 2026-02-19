import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cartItems: [], totalQuantity: 0, totalPrice: 0 },
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const exist = state.cartItems.find(p => p.id === item.id);
      if (exist) exist.quantity += 1;
      else state.cartItems.push({ ...item, quantity: 1 });
      state.totalQuantity += 1;
      state.totalPrice += item.price;
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const item = state.cartItems.find(p => p.id === id);
      if (!item) return;
      state.totalQuantity -= item.quantity;
      state.totalPrice -= item.price * item.quantity;
      state.cartItems = state.cartItems.filter(p => p.id !== id);
    }
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
