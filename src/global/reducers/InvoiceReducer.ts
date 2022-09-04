import { PayloadAction } from '@reduxjs/toolkit';
import { ICalculateInvoice, IInvoice } from '../../modules/checkout/components/invoice/IInvoice';

export const InvoiceReducer = {
  calculateInvoice: (state: IInvoice, action: PayloadAction<ICalculateInvoice>) => {
    state.subTotal = action.payload.items.reduce(
      (previousValue, currentValue) => previousValue + currentValue.amount,
      0
    );
    state.tip = Number((state.subTotal / 100) * state.baseTipPercentage);
    state.total = Number(state.subTotal + state.tip);
  },
  calculateTip: (state: IInvoice, action: PayloadAction<any>) => {
    state.baseTipPercentage = parseInt(action.payload);
    state.tip = Number((state.subTotal / 100) * state.baseTipPercentage);
    state.total = Number(state.subTotal + state.tip);
  }
};
