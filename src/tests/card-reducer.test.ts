import { ISummaryItem } from '../modules/checkout/components/summary-item/ISummaryItem';
import { CartReducer } from '../global/reducers/CartReducer';

const state: Array<ISummaryItem> = [];

describe('Card reducer tests', () => {
  it('Function add to cart', () => {
    const itemToAdd: ISummaryItem = {
      id: 1,
      amount: 2000
    };
    CartReducer.add(state, { type: 'cart/add', payload: itemToAdd });

    expect(state).toEqual([itemToAdd]);
  });

  it('Function remove item', () => {
    CartReducer.remove(state, { type: 'cart/remove', payload: 1 });

    expect(state).toEqual([]);
  });
});
