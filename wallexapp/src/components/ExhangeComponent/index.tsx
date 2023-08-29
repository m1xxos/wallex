import BigButton from '../../ui/BigButton';
import BankCardList from '../BankCardList';
import styles from './exchangeComponent.module.scss';
type Props = {};

function ExhangeComponent({}: Props) {
  return (
    <div className={styles.container}>
      <BankCardList from />
      <BankCardList />
      <p>ЦБ РФ · 29.08.2023 · 1 ₽ = 0,870565 ₹</p>
      <BigButton title="выполнить обмен" />
    </div>
  );
}

export default ExhangeComponent;
