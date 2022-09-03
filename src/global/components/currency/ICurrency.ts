import { LanguagesEnum } from '../../enums/LanguagesType';
import { CountryEnum } from '../../enums/CountryType';
import { CurrencyEnum } from './CurrencyType';

export interface ICurrency {
  amount: number;
  lang: LanguagesEnum;
  country: CountryEnum;
  currency: CurrencyEnum;
  minimumFractionDigits: number;
  isCents: boolean;
}
