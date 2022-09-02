import React from 'react';
import { Header } from '../components/header/Header';
import { Summary } from '../components/summary/Summary';

export function CheckoutLayout(props: any) {
  return (
    <div className={'primary-context'}>
      <Header />
      <div className={'content-layout'}>{props.children}</div>
      <Summary />
    </div>
  );
}
