import { PRODUCTS } from '../modules/checkout/constants/Products';
import { IProduct } from '../modules/checkout/components/product/IProduct';
import { ProductReducer } from '../global/reducers/ProductReducer';

const state: Array<IProduct> = PRODUCTS;

describe('Product reducer tests', () => {
  it('Function add to update product', () => {
    const productToUpdate: IProduct = {
      id: 1,
      isAddToCheckout: true
    };
    ProductReducer.update(state, { type: 'product/update', payload: productToUpdate });

    const productToUpdateAfterReducer = state.find((item) => item.id === 1);

    expect(productToUpdateAfterReducer?.isAddToCheckout).toBe(true);
  });
});
