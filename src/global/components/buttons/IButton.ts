import { ButtonColorTypes, ButtonSizeTypes } from './ButtonTypes';

export interface IButton {
  children?: any;
  type: ButtonColorTypes;
  size: ButtonSizeTypes;
  isBlock?: boolean;
  callBack: any;
  isDisabled?: boolean;
}
