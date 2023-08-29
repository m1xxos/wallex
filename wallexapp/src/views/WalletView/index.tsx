import styles from './walletView.module.scss';
import Heading from '../../ui/Heading';
import BankAccountCardsContainer from '../../components/BankAccountCardsContainer';
import SmallHeading from '../../ui/SmallHeading';
import { ReactComponent as ExpandSVG } from '../../assets/expand-small.svg';
type Props = {};

function WalletView({}: Props) {
  return (
    <div className={styles.container}>
      <Heading title="Мои финансы" />
      <div className={styles.group}>
        <div className={styles.heading}>
          <SmallHeading>счета всех валют</SmallHeading>
          <ExpandSVG />
        </div>
        <BankAccountCardsContainer />
      </div>
    </div>
  );
}

export default WalletView;
