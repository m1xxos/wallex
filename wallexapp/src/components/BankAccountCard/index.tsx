import { BankType, Banks, WalletType, Wallets } from '../../tools';
import SmallBankCard from '../SmallBankCard';
import styles from './bankAccountCard.module.scss';
type Props = {
  wallet: WalletType;
};

function BankAccountCard({ wallet }: Props) {
  let bank = Banks.find((bank) => bank.id === wallet.bankId) as BankType;
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
