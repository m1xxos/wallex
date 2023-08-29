import { useEffect, useState } from 'react';
import BigButton from '../../ui/BigButton';
import BankCardList from '../BankCardList';
import styles from './topupComponent.module.scss';
import axios from 'axios';
import { useAuthStore } from '../../stores/authStore';
import { useNavigate } from 'react-router-dom';
import { WalletType } from '../../tools';
type Props = {};

function TopupComponent({}: Props) {
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
  const [walletId, setWalletId] = useState<number | undefined>(
    wallets ? (wallets[0] as WalletType).id : undefined,
  );
  const [value, setValue] = useState<string>();
  const navigate = useNavigate();
  async function Topup() {
    await axios.post(
      `${process.env.REACT_APP_BACK_DOMAIN}/api/bank/account/topup`,
      {
        amount: Number(value),
        account: walletId,
      },
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      },
    );
    return navigate('/');
  }
  return (
    <div className={styles.container}>
      <input
        type="text"
        style={{ height: '40px', fontSize: '20px', width: '100%' }}
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
      <BankCardList
        from
        wallets={wallets as WalletType[]}
        onSet={setWalletId}
        walletId={wallets && (wallets[0] as WalletType).id}
      />
      {walletId !== undefined && <BigButton title="пополнить счёт" onClick={Topup} />}
    </div>
  );
}

export default TopupComponent;
