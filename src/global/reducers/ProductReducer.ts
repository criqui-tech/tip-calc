import { PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../modules/checkout/components/product/IProduct';

export const ProductReducer = {
  update: (state: Array<IProduct>, action: PayloadAction<IProduct>) => {
    const match = state.find((product) => product.id === action.payload.id);
    const index = state.indexOf(match as IProduct);
    state[index] = {
      ...match,
      ...action.payload
    };
  }
};
