import React from 'react';
import './Button.scss';
import { IButton } from './IButton';
import { ButtonSizeTypes, ButtonTemplateTypes, ButtonType } from './ButtonTemplateTypes';

export function Button(props: IButton) {
  return (
    <div>
      {props.type === ButtonType.BUTTON ? (
        <button
          onClick={props.callBack}
          className={`
                    custom-button 
                    ${props.template || ButtonTemplateTypes.PRIMARY} 
                    ${props.size || ButtonSizeTypes.MD}
                    ${props.isBlock ? 'block' : ''}
                    ${props.isDisabled ? 'is-disabled' : ''}
            `}>
          {props.children}
        </button>
      ) : (
        <input
          type={'submit'}
          className={`
                    custom-button 
                    ${props.template || ButtonTemplateTypes.PRIMARY} 
                    ${props.size || ButtonSizeTypes.MD}
                    ${props.isBlock ? 'block' : ''}
                    ${props.isDisabled ? 'is-disabled' : ''}
            `}
          value={props.children}
        />
      )}
    </div>
  );
}
