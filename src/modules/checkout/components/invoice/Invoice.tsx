import React from 'react';
import './Invoice.scss';

export function Invoice() {
  return (
    <ul>
      <li>
        <p className={'invoice-title'}>Subtotal</p>
        <p>$45.000</p>
      </li>
      <li>
        <p className={'invoice-title'}>Propina</p>
        <p>$5.000</p>
      </li>
      <li>
        <p className={'invoice-title'}>
          <strong>Total</strong>
        </p>
        <p>
          <strong>$50.000</strong>
        </p>
      </li>
    </ul>
  );
}
