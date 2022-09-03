import React from 'react';
import './EmptyData.scss';
import iconNotEmpty from '../../../../assets/empty-icon.svg';

export function EmptyData() {
  return (
    <div className={'empty-data-container animate__animated animate__fadeIn'}>
      <img src={iconNotEmpty} alt={'no hay productos'} />
      <p>Aun no añades ningun producto</p>
    </div>
  );
}
