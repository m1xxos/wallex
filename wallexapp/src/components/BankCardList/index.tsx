import { useState } from 'react';
import styles from './bankCardList.module.scss';
import CurrencyExhangeCardButton from '../CurrencyExchangeCardButton';
import BankCardListButton from '../BankCardListButton';

interface Props {
  from?: boolean;
}

function BankCardList({ from = false }: Props) {
  const [opened, setOpened] = useState(false);
  return (
    <div className={styles.container}>
      <CurrencyExhangeCardButton onClick={() => setOpened(!opened)} from={from} />
      <div className={styles.list} style={{ height: opened ? 'fit-content' : '0px' }}>
        <BankCardListButton
          onClick={() => {
            setOpened(false);
          }}
        />
        <BankCardListButton
          onClick={() => {
            setOpened(false);
          }}
        />
        <BankCardListButton
          onClick={() => {
            setOpened(false);
          }}
        />
      </div>
    </div>
  );
}

export default BankCardList;
