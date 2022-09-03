import React from 'react';
import { ISummaryItem } from './ISummaryItem';
import './SummaryItem.scss';
import removeIcon from '../../../../assets/remove.svg';
import { Currency } from '../../../../global/components/currency/Currency';
import { CurrencyEnum } from '../../../../global/components/currency/CurrencyType';
import { CountryEnum } from '../../../../global/enums/CountryType';
import { LanguagesEnum } from '../../../../global/enums/LanguagesType';

export function SummaryItem(props: ISummaryItem) {
  return (
    <div className={'summary-item-container'}>
      <div className={'image-product'}>
        <img src={props.cover} alt={props.name} />
      </div>
      <div className={'description-product shadow-1'}>
        <h3>{props.name}</h3>
        <span className={'currency'}>
          <Currency
            amount={props.amount || 0}
            currency={CurrencyEnum.COP}
            country={CountryEnum.CO}
            isCents={true}
            lang={LanguagesEnum.EN}
            minimumFractionDigits={0}
          />
        </span>
        <img className={'icon-remove'} src={removeIcon} alt={'icon remove'} />
      </div>
    </div>
  );
}
