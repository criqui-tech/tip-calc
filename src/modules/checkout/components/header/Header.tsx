import React from 'react';
import './Header.scss';
import logo from '../../../../assets/2x/logo_1@2x.png';

export function Header() {
  return (
    <header>
      <img src={logo} alt={'logo'} />
    </header>
  );
}
