import { ReactComponent as SberLogo } from './assets/sberlogo.svg';
import { ReactComponent as IndiasBankLogo } from './assets/indialogo.svg';
import { ReactComponent as IsraelsBankLogo } from './assets/israellogo.svg';

type BankType = {
  id: number;
  name: string;
  logo: JSX.Element;
  color: string;
};
export const Banks: Readonly<BankType>[] = [
  {
    id: 0,
    name: 'sber',
    logo: <SberLogo />,
    color: 'rgba(104, 197, 95, 0.80)',
  },
  {
    id: 1,
    name: 'india',
    logo: <IndiasBankLogo />,
    color: 'rgba(86, 145, 227, 0.80)',
  },
  {
    id: 2,
    name: 'israel',
    logo: <IsraelsBankLogo />,
    color: 'rgb(233, 72, 77, 0.80)',
  },
];

export const Wallets = [
  {
    id: 0,
    bankId: 0,
    value: '86 554',
    currency: '₽',
  },
  {
    id: 1,
    bankId: 1,
    value: '650 554',
    currency: '₹',
  },
  {
    id: 2,
    bankId: 2,
    value: '2 554',
    currency: '₪',
  },
];
