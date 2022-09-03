import React from 'react';
import { Button } from '../../../../global/components/buttons/Button';
import {
  ButtonColorTypes,
  ButtonSizeTypes
} from '../../../../global/components/buttons/ButtonTypes';
import './Product.scss';
import { IProduct } from './IProduct';
import { Currency } from '../../../../global/components/currency/Currency';
import { CurrencyEnum } from '../../../../global/components/currency/CurrencyType';
import { CountryEnum } from '../../../../global/enums/CountryType';
import { LanguagesEnum } from '../../../../global/enums/LanguagesType';
import { useAppDispatch } from '../../../../global/hooks/StoreHook';
import { update } from '../../../../global/features/products/ProductSlice';

export function Product(props: IProduct) {
  const dispatch = useAppDispatch();

  const onClickCustomButton = () => {
    if (!props.isAddToCheckout) {
      dispatch(
        update({
          ...props,
          isAddToCheckout: true
        })
      );
    }
  };

  return (
    <div className={'box-product animate__animated animate__fadeIn'}>
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
        <p>{props.description}</p>
        <Button
          type={ButtonColorTypes.PRIMARY}
          size={ButtonSizeTypes.MD}
          isDisabled={!!props.isAddToCheckout}
          callBack={onClickCustomButton}>
          Añadir
        </Button>
      </div>
    </div>
  );
}
