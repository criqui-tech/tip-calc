import { createSlice } from '@reduxjs/toolkit';
import { IInvoice } from '../../../modules/checkout/components/invoice/IInvoice';
import { InvoiceReducer } from '../../reducers/InvoiceReducer';

const initialState: IInvoice = {
  tip: 0,
  subTotal: 0,
  baseTipPercentage: 0,
  total: 0
};

export const invoiceSlice = createSlice({
  name: 'invoice',
  initialState,
  reducers: InvoiceReducer
});

export const { calculateInvoice, calculateTip } = invoiceSlice.actions;

export default invoiceSlice.reducer;
