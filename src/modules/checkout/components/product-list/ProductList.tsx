import React from 'react';
import './ProductList.scss';
import { Product } from '../product/Product';
import { useAppSelector } from '../../../../global/hooks/StoreHook';

export function ProductList() {
  const products = useAppSelector((state) => state.products);
  return (
    <div className={'content-products'}>
      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
}
