import styles from './bklb.module.scss';
import { BankType, Banks, WalletType, Wallets } from '../../tools';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  wallet: WalletType;
}

function BankCardListButton({ wallet, ...attrs }: Props) {
  let bank = Banks.find((bank) => bank.id === wallet.bankId) as BankType;
  return (
    <button className={styles.container} {...attrs} style={{ background: bank.color }}>
      <div className={styles.text}>
        <h1>
          <span>1414 1414 1414</span> {wallet.number}
        </h1>
      </div>
      <div className={styles.bankLogo}>{bank.logo}</div>
    </button>
  );
}

export default BankCardListButton;
