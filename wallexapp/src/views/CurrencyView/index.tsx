import ExhangeComponent from '../../components/ExhangeComponent';
import TopupComponent from '../../components/TopupComponent';
import Heading from '../../ui/Heading';
import SmallHeading from '../../ui/SmallHeading';
import styles from './currencyView.module.scss';

type Props = {};

function CurrencyView({}: Props) {
  return (
    <div className={styles.container}>
      <Heading title="Операции с валютой" />
      <div className={styles.group}>
        <SmallHeading>пополнение счёта</SmallHeading>
        <TopupComponent />
      </div>
      <div className={styles.group}>
        <SmallHeading>обмен валют</SmallHeading>
        <ExhangeComponent />
      </div>
    </div>
  );
}

export default CurrencyView;
