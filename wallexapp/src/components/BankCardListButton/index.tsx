import styles from './bklb.module.scss';
import { Banks } from '../../tools';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLButtonElement> {}

function BankCardListButton({ ...attrs }: Props) {
  let bank = Banks[0];
  return (
    <button className={styles.container} {...attrs} style={{ background: bank.color }}>
      <div className={styles.text}>
        <h1>
          <span>1414 1414 1414</span> 1337
        </h1>
      </div>
      <div className={styles.bankLogo}>{bank.logo}</div>
    </button>
  );
}

export default BankCardListButton;
