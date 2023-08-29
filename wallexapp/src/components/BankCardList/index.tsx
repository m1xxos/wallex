import { useState } from 'react';
import styles from './bankCardList.module.scss';
import CurrencyExhangeCardButton from '../CurrencyExchangeCardButton';
import BankCardListButton from '../BankCardListButton';
import { WalletType } from '../../tools';
import { useCurrencyStore } from '../../stores/currencyStore';
interface Props {
  from?: boolean;
  walletId?: number;
  wallets: WalletType[];
  onSet: Function;
}

function BankCardList({ wallets, walletId, onSet, from = false }: Props) {
  const [opened, setOpened] = useState(false);
  const exFrom = useCurrencyStore((state) => state.exFrom);
  const exTo = useCurrencyStore((state) => state.exTo);
  return (
    <div className={styles.container}>
      {opened && (
        <div
          onClick={() => {
            setOpened(false);
          }}
          className={styles.podlozhka}></div>
      )}
      {wallets && (
        <CurrencyExhangeCardButton
          walletId={walletId}
          wallets={wallets as WalletType[]}
          onClick={() => setOpened(!opened)}
          from={from}
        />
      )}
      <div className={styles.list} style={{ height: opened ? 'fit-content' : '0px' }}>
        {wallets &&
          (from
            ? wallets
                .filter((wallet) => wallet.id !== exTo)
                .map((wallet) => (
                  <BankCardListButton
                    key={wallet.id}
                    wallet={wallet}
                    onClick={() => {
                      onSet(wallet.id);
                      setOpened(false);
                    }}
                  />
                ))
            : wallets
                .filter((wallet) => wallet.id !== exFrom)
                .map((wallet) => (
                  <BankCardListButton
                    key={wallet.id}
                    wallet={wallet}
                    onClick={() => {
                      onSet(wallet.id);
                      setOpened(false);
                    }}
                  />
                )))}
      </div>
    </div>
  );
}

export default BankCardList;
