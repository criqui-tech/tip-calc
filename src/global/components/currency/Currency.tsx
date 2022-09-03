import React from 'react';
import { ICurrency } from './ICurrency';

export function Currency(props: ICurrency) {
  const { lang, country, isCents, amount: originAmount, currency, minimumFractionDigits } = props;
  const currencyFormat = (): string => {
    const locale = `${lang}-${country}`;
    let amount = originAmount;
    if (isCents) {
      amount = Math.floor(originAmount / 100);
    }
    const formatter = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      minimumFractionDigits,
      useGrouping: true
    });

    return `${formatter.format(amount)}`;
  };

  return <span>{currencyFormat()}</span>;
}
