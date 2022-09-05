import React, { PropsWithRef } from 'react';
import { Button } from '../../../../global/components/buttons/Button';
import {
  ButtonSizeTypes,
  ButtonTemplateTypes,
  ButtonType
} from '../../../../global/components/buttons/ButtonTemplateTypes';
import './Product.scss';
import { IProduct } from './IProduct';
import { Currency } from '../../../../global/components/currency/Currency';
import { CurrencyEnum } from '../../../../global/components/currency/CurrencyType';
import { CountryEnum } from '../../../../global/enums/CountryType';
import { LanguagesEnum } from '../../../../global/enums/LanguagesType';
import { useAppDispatch } from '../../../../global/hooks/StoreHook';
import { updateProduct } from '../../../../global/features/products/ProductSlice';
import { batch } from 'react-redux';
import { addToCart } from '../../../../global/features/summary/CartSlice';

export function Product(props: PropsWithRef<{ product: IProduct }>) {
  const { product } = props;

  const dispatch = useAppDispatch();

  const addProduct = () => {
    if (!product.isAddToCheckout) {
      batch(async () => {
        await dispatch(
          updateProduct({
            ...product,
            isAddToCheckout: true
          })
        );
        await dispatch(
          addToCart({
            id: product.id,
            name: product.name,
            amount: product.amount || 0,
            cover: product.cover
          })
        );
      });
    }
  };

  return (
    <div className={'box-product animate__animated animate__fadeIn'}>
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
            minimumFractionDigits={2}
          />
        </span>
        <p>{product.description}</p>
        <Button
          type={ButtonType.BUTTON}
          template={ButtonTemplateTypes.PRIMARY}
          size={ButtonSizeTypes.MD}
          isDisabled={!!product.isAddToCheckout}
          callBack={addProduct}>
          Añadir
        </Button>
      </div>
    </div>
  );
}
