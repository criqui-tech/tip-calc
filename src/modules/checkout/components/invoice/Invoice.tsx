import React from 'react';
import './Invoice.scss';
import { useAppSelector } from '../../../../global/hooks/StoreHook';
import { Currency } from '../../../../global/components/currency/Currency';
import { LanguagesEnum } from '../../../../global/enums/LanguagesType';
import { CountryEnum } from '../../../../global/enums/CountryType';
import { CurrencyEnum } from '../../../../global/components/currency/CurrencyType';

export function Invoice() {
  const invoice = useAppSelector((state) => state.invoice);

  return (
    <ul>
      <li>
        <p className={'invoice-title'}>Subtotal</p>
        <p>
          <Currency
            amount={invoice.subTotal}
            lang={LanguagesEnum.EN}
            country={CountryEnum.CO}
            currency={CurrencyEnum.COP}
            minimumFractionDigits={2}
            isCents={true}
          />
        </p>
      </li>
      <li>
        <p className={'invoice-title'}>Propina</p>
        <p>
          <Currency
            amount={invoice.tip}
            lang={LanguagesEnum.EN}
            country={CountryEnum.CO}
            currency={CurrencyEnum.COP}
            minimumFractionDigits={2}
            isCents={true}
          />
        </p>
      </li>
      <li>
        <p className={'invoice-title'}>
          <strong>Total</strong>
        </p>
        <p>
          <strong>
            <Currency
              amount={invoice.total || 0}
              lang={LanguagesEnum.EN}
              country={CountryEnum.CO}
              currency={CurrencyEnum.COP}
              minimumFractionDigits={2}
              isCents={true}
            />
          </strong>
        </p>
      </li>
    </ul>
  );
}
