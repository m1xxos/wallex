import { Wallets } from '../../tools';
import AddBankAccountButton from '../AddBankAccountButton';
import BankAccountCard from '../BankAccountCard';
import styles from './bankAccountCardsContainer.module.scss';

type Props = {};

function BankAccountCardsContainer({}: Props) {
  return (
    <div className={styles.container}>
      {Wallets.map((wallet) => (
        <BankAccountCard walletId={wallet.id} />
      ))}
      <AddBankAccountButton />
    </div>
  );
}

export default BankAccountCardsContainer;
