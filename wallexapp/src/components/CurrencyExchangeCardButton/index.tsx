import styles from './currex.module.scss';
import { BankType, Banks, WalletType } from '../../tools';
import { HTMLAttributes } from 'react';
import { useCurrencyStore } from '../../stores/currencyStore';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  wallets: WalletType[];
  walletId?: number;
  from?: boolean;
}

function CurrencyExhangeCardButton({ wallets, walletId, from, ...attrs }: Props) {
  const exFrom = useCurrencyStore((state) => state.exFrom);
  const exTo = useCurrencyStore((state) => state.exTo);

  let wallet = walletId
    ? (wallets.find((wallet) => wallet.id === (from ? exFrom : exTo)) as WalletType)
    : from !== undefined
    ? wallets && (wallets.find((wallet) => wallet.id === (from ? exFrom : exTo)) as WalletType)
    : wallets[0];
  let bank = wallet && (Banks.find((bank) => bank.id === wallet.bankId) as BankType);
  return (
    bank && (
      <button className={styles.container} {...attrs} style={{ background: bank.color }}>
        <div className={styles.text}>
          <p>
            {from ? 'со счёта' : 'на счёт'} <span>1414 1414 1414</span> {wallet.number}:
          </p>
          <div className={styles.input}>
            <h1
              contentEditable
              onClick={(e) => {
                e.stopPropagation();
              }}>
              {wallet.value}
            </h1>
            <h1>{wallet.currency}</h1>
          </div>
        </div>
        <div className={styles.bankLogo}>{bank.logo}</div>
      </button>
    )
  );
}

export default CurrencyExhangeCardButton;
