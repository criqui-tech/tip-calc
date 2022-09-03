import React from 'react';
import './Button.scss';
import { IButton } from './IButton';
import { ButtonColorTypes, ButtonSizeTypes } from './ButtonTypes';

export function Button(props: IButton) {
  return (
    <button
      onClick={props.callBack}
      className={`
                    custom-button 
                    ${props.type || ButtonColorTypes.PRIMARY} 
                    ${props.size || ButtonSizeTypes.MD}
                    ${props.isBlock ? 'block' : ''}
                    ${props.isDisabled ? 'is-disabled' : ''}
            `}>
      {props.children}
    </button>
  );
}
