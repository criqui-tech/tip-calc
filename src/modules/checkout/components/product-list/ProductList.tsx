import React from 'react';
import './ProductList.scss';
import { Product } from '../product/Product';
import { Products } from '../../constants/Products';

export function ProductList() {
  return (
    <div className={'content-products'}>
      {Products.map((product) => {
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
