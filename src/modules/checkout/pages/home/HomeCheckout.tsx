import React from 'react';
import { CheckoutLayout } from '../../layouts/CheckoutLayout';
import { ProductList } from '../../components/product-list/ProductList';

export function HomeCheckout() {
  return (
    <CheckoutLayout>
      <h1 className={'title-primary'}>Nuestro menú</h1>
      <ProductList />
    </CheckoutLayout>
  );
}
