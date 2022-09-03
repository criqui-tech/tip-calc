import React from 'react';
import { Button } from '../../../../global/components/buttons/Button';
import {
  ButtonColorTypes,
  ButtonSizeTypes
} from '../../../../global/components/buttons/ButtonTypes';
import './Coupon.scss';

export function CouponForm() {
  const onClickCustomButton = () => {
    console.log('clicked');
  };

  return (
    <div>
      <h3 className={'sub-title'}>Propina</h3>
      <div className={'container-coupon'}>
        <div className={'input-context'}>
          <input className={'custom-input'} type={'text'} />
        </div>
        <div className={'action-content'}>
          <Button
            type={ButtonColorTypes.WITH_INPUT}
            size={ButtonSizeTypes.LG}
            callBack={onClickCustomButton}
            isBlock={true}
            isDisabled={true}>
            Aplicar
          </Button>
        </div>
      </div>
    </div>
  );
}
