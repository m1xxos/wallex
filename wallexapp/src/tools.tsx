import { ReactComponent as SberLogo } from './assets/sberlogo.svg';
import { ReactComponent as IndiasBankLogo } from './assets/indialogo.svg';
import { ReactComponent as IsraelsBankLogo } from './assets/israellogo.svg';

export type BankType = {
  id: number;
  name: string;
  logo: JSX.Element;
  color: string;
  currency: number;
};

export const Currencies = [
  {
    id: 0,
    name: '₽',
  },
  {
    id: 1,
    currency: '₹',
  },
  {
    id: 2,
    currency: '₪',
  },
];
export const Banks: Readonly<BankType>[] = [
  {
    id: -1,
    name: 'банк',
    logo: <SberLogo />,
    color: 'rgba(104, 197, 95, 0.80)',
    currency: -1,
  },
  {
    id: 0,
    name: 'Сбербанк',
    logo: <SberLogo />,
    color: 'rgba(104, 197, 95, 0.80)',
    currency: 1,
  },
  {
    id: 1,
    name: 'Банк Индии',
    logo: <IndiasBankLogo />,
    color: 'rgba(86, 145, 227, 0.80)',
    currency: 2,
  },
  {
    id: 2,
    name: 'Израильский банк',
    logo: <IsraelsBankLogo />,
    color: 'rgb(233, 72, 77, 0.80)',
    currency: 3,
  },
];

export type WalletType = {
  id: number;
  bankId: number;
  number: string;
  value: string;
  currency: string;
};

export const Wallets: WalletType[] = [
  {
    id: 0,
    bankId: 0,
    number: '2002',
    value: '86 554',
    currency: '₽',
  },
  {
    id: 1,
    bankId: 1,
    number: '2288',
    value: '650 554',
    currency: '₹',
  },
  {
    id: 2,
    bankId: 2,
    number: '1337',
    value: '2 554',
    currency: '₪',
  },
];
