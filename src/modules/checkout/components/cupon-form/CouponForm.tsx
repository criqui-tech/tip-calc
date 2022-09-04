import React, { useEffect, useState } from 'react';
import { Button } from '../../../../global/components/buttons/Button';
import {
  ButtonSizeTypes,
  ButtonTemplateTypes,
  ButtonType
} from '../../../../global/components/buttons/ButtonTemplateTypes';
import './Coupon.scss';
import { useForm } from 'react-hook-form';
import { ICouponForm } from './ICouponForm';
import { PercentageValidator } from '../../../../global/forms/validators/PercentageValidator';
import { useAppDispatch } from '../../../../global/hooks/StoreHook';
import { calculateTip } from '../../../../global/features/summary/InvoiceSlice';

export function CouponForm() {
  const { register, formState, handleSubmit } = useForm<ICouponForm>({
    mode: 'onChange',
    defaultValues: { tip: 0 }
  });
  const [isValidForm, setIsValidFormState] = useState(formState.isValid);
  const [isDirtyForm] = useState(formState.dirtyFields);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsValidFormState(formState.isValid);
  }, [formState.isValid]);

  const onSubmitForm = (formData: ICouponForm) => {
    console.log('clicked', formData);
    dispatch(calculateTip(formData.tip));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <h3 className={'sub-title'}>Propina</h3>
        <div className={'container-coupon'}>
          <div className={'input-context'}>
            <input
              className={'custom-input'}
              type={'number'}
              {...register('tip', { required: true, validate: PercentageValidator })}
            />
          </div>
          <div className={'action-content'}>
            <Button
              type={ButtonType.SUBMIT}
              template={ButtonTemplateTypes.WITH_INPUT}
              size={ButtonSizeTypes.LG}
              isBlock={true}
              isDisabled={!isValidForm}>
              Aplicar
            </Button>
          </div>
        </div>
        <div className={'container-error'}>
          {isDirtyForm && formState.errors?.tip?.type === 'required' && (
            <p>El campo nombre es requerido</p>
          )}
          {isDirtyForm && formState.errors?.tip?.type === 'validate' && (
            <p>El campo nombre debe estar entre 0 y 100</p>
          )}
        </div>
      </form>
    </div>
  );
}
