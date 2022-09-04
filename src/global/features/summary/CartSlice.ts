import { createSlice } from '@reduxjs/toolkit';
import { CartReducer } from '../../reducers/CartReducer';
import { ISummaryItem } from '../../../modules/checkout/components/summary-item/ISummaryItem';

const initialState: Array<ISummaryItem> = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: CartReducer
});

export const { add: addToCart, remove: removeToCart } = cartSlice.actions;

export default cartSlice.reducer;
