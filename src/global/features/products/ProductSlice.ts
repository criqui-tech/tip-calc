import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../../modules/checkout/components/product/IProduct';
import { PRODUCTS } from '../../../modules/checkout/constants/Products';
import { ProductReducer } from '../../reducers/ProductReducer';

const initialState: Array<IProduct> = PRODUCTS;

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: ProductReducer
});

// Action creators are generated for each case reducer function
export const { update } = productsSlice.actions;

export default productsSlice.reducer;
