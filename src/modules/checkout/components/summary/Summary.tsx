import React from 'react';
import './Summary.scss';
import { UserNavBar } from '../user-nav-bar/UserNavBar';
import { Button } from '../../../../global/components/buttons/Button';
import {
  ButtonColorTypes,
  ButtonSizeTypes
} from '../../../../global/components/buttons/ButtonTypes';
import { EmptyData } from '../empty-data/EmptyData';
import { SummaryItem } from '../summary-item/SummaryItem';
import { PRODUCTS } from '../../constants/Products';
import { IProduct } from '../product/IProduct';
import { Invoice } from '../invoice/Invoice';
import { CouponForm } from '../cupon-form/CouponForm';

export function Summary() {
  const onClickCustomButton = () => {
    console.log('clicked');
  };

  const productSelectList: Array<IProduct> = PRODUCTS.filter(
    (item) => item.id === 3 || item.id === 7
  );
  return (
    <aside>
      <UserNavBar />
      {productSelectList && productSelectList.length > 0 ? (
        <div>
          <div className={'container-summary'}>
            <h3 className={'sub-title'}>Mi orden</h3>
            <div className={'summary-items sections-summary '}>
              {productSelectList.map((product) => {
                return (
                  <SummaryItem
                    key={product.id}
                    name={product.name}
                    cover={product.cover}
                    amount={product.amount || 0}
                  />
                );
              })}
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
              type={ButtonColorTypes.FLAT_PRIMARY}
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
