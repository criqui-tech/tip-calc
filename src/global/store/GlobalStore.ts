import { configureStore } from '@reduxjs/toolkit';
import productsSlice from '../features/products/ProductSlice';
import cartSlice from '../features/summary/CartSlice';
import invoiceSlice from '../features/summary/InvoiceSlice';

export const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
    invoice: invoiceSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
