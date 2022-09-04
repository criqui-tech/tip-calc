import { PayloadAction } from '@reduxjs/toolkit';
import { ISummaryItem } from '../../modules/checkout/components/summary-item/ISummaryItem';

export const CartReducer = {
  add: (state: Array<ISummaryItem>, action: PayloadAction<ISummaryItem>) => {
    state.push(action.payload);
  },
  remove: (state: Array<ISummaryItem>, action: PayloadAction<number>) => {
    const match = state.find((product) => product.id === action.payload);
    const index = state.indexOf(match as ISummaryItem);
    state.splice(index, 1);
  }
};
