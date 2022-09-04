import { ButtonSizeTypes, ButtonTemplateTypes, ButtonType } from './ButtonTemplateTypes';

export interface IButton {
  children?: any;
  type: ButtonType;
  template: ButtonTemplateTypes;
  size: ButtonSizeTypes;
  isBlock?: boolean;
  callBack?: any;
  isDisabled?: boolean;
}
