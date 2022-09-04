import React, { PropsWithRef, useState } from 'react';
import './SummaryItem.scss';
import removeIcon from '../../../../assets/remove.svg';
import { Currency } from '../../../../global/components/currency/Currency';
import { CurrencyEnum } from '../../../../global/components/currency/CurrencyType';
import { CountryEnum } from '../../../../global/enums/CountryType';
import { LanguagesEnum } from '../../../../global/enums/LanguagesType';
import { ISummaryItem } from './ISummaryItem';
import { useAppDispatch } from '../../../../global/hooks/StoreHook';
import { removeToCart } from '../../../../global/features/summary/CartSlice';
import { batch } from 'react-redux';
import { updateProduct } from '../../../../global/features/products/ProductSlice';

export function SummaryItem(props: PropsWithRef<{ product: ISummaryItem }>) {
  const { product } = props;
  const dispatch = useAppDispatch();

  const [defaultAnimatedClass, setAnimateClassState] = useState('animate__flipInX');

  const removeItem = () => {
    setAnimateClassState('animate__flipOutX');
    batch(() => {
      setTimeout(() => {
        dispatch(removeToCart(product.id || 0));
        dispatch(updateProduct({ id: product.id, isAddToCheckout: false }));
      }, 700);
    });
  };

  return (
    <div className={`summary-item-container animate__animated ${defaultAnimatedClass}`}>
      <div className={'image-product'}>
        <img src={product.cover} alt={product.name} />
      </div>
      <div className={'description-product shadow-1'}>
        <h3>{product.name}</h3>
        <span className={'currency'}>
          <Currency
            amount={product.amount || 0}
            currency={CurrencyEnum.COP}
            country={CountryEnum.CO}
            isCents={true}
            lang={LanguagesEnum.EN}
            minimumFractionDigits={0}
          />
        </span>
        <img onClick={removeItem} className={'icon-remove'} src={removeIcon} alt={'icon remove'} />
      </div>
    </div>
  );
}
