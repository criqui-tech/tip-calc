import React, { useEffect } from 'react';
import './Summary.scss';
import { UserNavBar } from '../user-nav-bar/UserNavBar';
import { Button } from '../../../../global/components/buttons/Button';
import {
  ButtonSizeTypes,
  ButtonTemplateTypes,
  ButtonType
} from '../../../../global/components/buttons/ButtonTemplateTypes';
import { EmptyData } from '../empty-data/EmptyData';
import { SummaryItem } from '../summary-item/SummaryItem';
import { Invoice } from '../invoice/Invoice';
import { CouponForm } from '../cupon-form/CouponForm';
import { useAppDispatch, useAppSelector } from '../../../../global/hooks/StoreHook';
import { calculateInvoice } from '../../../../global/features/summary/InvoiceSlice';

export function Summary() {
  const onClickCustomButton = () => {
    console.log('clicked');
  };

  const dispatch = useAppDispatch();
  const productSelectList = useAppSelector((state) => state.cart);
  const globalInvoice = useAppSelector((state) => state.invoice);
  useEffect(() => {
    console.log('init', productSelectList);
    dispatch(
      calculateInvoice({
        tip: globalInvoice.baseTipPercentage || 0,
        items: productSelectList
      })
    );
  });

  return (
    <aside>
      <UserNavBar />
      {productSelectList && productSelectList.length > 0 ? (
        <div>
          <div>
            <h3 className={'top-title'}>Mi orden</h3>
            <div className={'summary-items scrollbar-custom-gray sections-summary '}>
              <div>
                {productSelectList.map((product) => {
                  return <SummaryItem key={product.id} product={product} />;
                })}
              </div>
            </div>
            <div className={'redeem-coupon sections-summary '}>
              <CouponForm />
            </div>
            <div className={'container-invoice sections-summary '}>
              <Invoice />
            </div>
          </div>

          <div className={'action-container-button'}>
            <Button
              type={ButtonType.BUTTON}
              template={ButtonTemplateTypes.FLAT_PRIMARY}
              size={ButtonSizeTypes.LG}
              isBlock={true}
              callBack={onClickCustomButton}>
              Procesar compra
            </Button>
          </div>
        </div>
      ) : (
        <div className={'container-summary vertical-flex'}>
          <EmptyData />
        </div>
      )}
    </aside>
  );
}
