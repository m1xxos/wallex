import { useEffect, useState } from 'react';
import { useAuthStore } from '../../stores/authStore';
import { WalletType } from '../../tools';
import AddBankAccountButton from '../AddBankAccountButton';
import BankAccountCard from '../BankAccountCard';
import styles from './bankAccountCardsContainer.module.scss';
import axios from 'axios';

type Props = {};

function BankAccountCardsContainer({}: Props) {
  const token = useAuthStore((state) => state.token);
  const [wallets, setWallets] = useState<WalletType[]>();
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
      {wallets &&
        wallets.map((wallet) => {
          return <BankAccountCard wallet={wallet} />;
        })}
      <AddBankAccountButton />
    </div>
  );
}

export default BankAccountCardsContainer;
