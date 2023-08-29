import styles from './currex.module.scss';
import { Banks } from '../../tools';
import { HTMLAttributes, useState } from 'react';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  from?: boolean;
}

function CurrencyExhangeCardButton({ from = false, ...attrs }: Props) {
  let bank = Banks[0];
  const [value, setValue] = useState('8000 ₽');
  return (
    <button className={styles.container} {...attrs} style={{ background: bank.color }}>
      <div className={styles.text}>
        <p>
          {from ? 'со счёта' : 'на счёт'} <span>1414 1414 1414</span> 1337:
        </p>
        <div className={styles.input}>
          <h1
            contentEditable
            onClick={(e) => {
              e.stopPropagation();
            }}>
            8000
          </h1>
          <h1>₽</h1>
        </div>
      </div>
      <div className={styles.bankLogo}>{bank.logo}</div>
    </button>
  );
}

export default CurrencyExhangeCardButton;
