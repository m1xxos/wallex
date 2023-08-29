import { Banks, Wallets } from '../../tools';
import SmallBankCard from '../SmallBankCard';
import styles from './bankAccountCard.module.scss';
type Props = {
  walletId: number;
};

function BankAccountCard({ walletId }: Props) {
  let wallet = Wallets[walletId];
  let bank = Banks[wallet.bankId];
  console.log(bank);
  return (
    <div className={styles.container} style={{ background: bank.color }}>
      <div className={styles.bankLogo}>{bank.logo}</div>
      <p>{wallet.value + ' ' + wallet.currency}</p>
      <div className={styles.cards}>
        <SmallBankCard />
      </div>
      <h1 className={styles.currencySymbol}>{wallet.currency}</h1>
    </div>
  );
}

export default BankAccountCard;
