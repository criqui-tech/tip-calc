import React from 'react';
import { Button } from '../../../../global/components/buttons/Button';
import {
  ButtonColorTypes,
  ButtonSizeTypes
} from '../../../../global/components/buttons/ButtonTypes';
import './Product.scss';
import { IProduct } from './IProduct';

export function Product(props: IProduct) {
  const onClickCustomButton = () => {
    console.log('clicked');
  };

  return (
    <div className={'box-product'}>
      <div className={'image-product'}>
        <img src={props.cover} alt={props.name} />
      </div>
      <div className={'description-product shadow-1'}>
        <h3>{props.name}</h3>
        <span className={'currency'}>{props.amount}</span>
        <p>{props.description}</p>
        <Button
          type={ButtonColorTypes.PRIMARY}
          size={ButtonSizeTypes.MD}
          callBack={onClickCustomButton}>
          Añadir
        </Button>
      </div>
    </div>
  );
}
