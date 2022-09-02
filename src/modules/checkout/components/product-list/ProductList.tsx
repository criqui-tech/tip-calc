import React from 'react';
import './ProductList.scss';
import { Product } from '../product/Product';
import { PRODUCTS } from '../../constants/products';

export function ProductList() {
  return (
    <div className={'content-products'}>
      {PRODUCTS.map((product) => {
        return (
          <Product
            amount={product.amount}
            cost={product.amount}
            cover={product.cover}
            description={product.description}
            name={product.name}
          />
        );
      })}
    </div>
  );
}
