import { ISummaryItem } from '../summary-item/ISummaryItem';

export interface IInvoice {
  subTotal: number;
  baseTipPercentage: number;
  tip: number;
  total?: number;
}

export interface ICalculateInvoice {
  tip: number;
  items: Array<ISummaryItem | any>;
}
