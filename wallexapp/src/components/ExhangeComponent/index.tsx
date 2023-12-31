import { useCurrencyStore } from '../../stores/currencyStore';
import BigButton from '../../ui/BigButton';
import BankCardList from '../BankCardList';
import styles from './exchangeComponent.module.scss';
import { useEffect, useState } from 'react';
import { WalletType } from '../../tools';
import axios from 'axios';
import { useAuthStore } from '../../stores/authStore';
type Props = {};

function ExhangeComponent({}: Props) {
  const token = useAuthStore((state) => state.token);
  const [wallets, setWallets] = useState<WalletType[]>();
  const setExFrom = useCurrencyStore((state) => state.setExFrom);
  const setExTo = useCurrencyStore((state) => state.setExTo);
  useEffect(() => {
    (async () => {
      let res = await axios.get(`${process.env.REACT_APP_BACK_DOMAIN}/api/bank/account/`, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
      setWallets(
        res.data.map((wallet: { id: number; name: string; currency: string; amount: number }) => {
          let newWallet: WalletType = {
            id: wallet.id,
            bankId:
              wallet.currency === 'Российский Рубль'
                ? 0
                : wallet.currency === 'Израильский Шекель'
                ? 2
                : 1,
            number: wallet.name,
            value: wallet.amount.toString(),
            currency:
              wallet.currency === 'Российский Рубль'
                ? '₽'
                : wallet.currency === 'Израильский Шекель'
                ? '₪'
                : '₹',
          };
          return newWallet;
        }),
      );
    })();
  }, []);

  return (
    <div className={styles.container}>
      <BankCardList from wallets={wallets as WalletType[]} onSet={setExFrom} />
      <BankCardList wallets={wallets as WalletType[]} onSet={setExTo} />
      <p>ЦБ РФ · 31.08.2023 · 1 ₽ = 0,870565 ₹ · 1 ₽ = 0,04 ₪</p>
      <BigButton title="выполнить обмен" />
    </div>
  );
}

export default ExhangeComponent;
