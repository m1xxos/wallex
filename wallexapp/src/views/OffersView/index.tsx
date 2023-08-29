import ExhangeComponent from '../../components/ExhangeComponent';
import Heading from '../../ui/Heading';
import SmallHeading from '../../ui/SmallHeading';
import styles from './offersView.module.scss';

type Props = {};

function OffersView({}: Props) {
  return (
    <div className={styles.container}>
      <Heading title="Предложения и бонусы" />
    </div>
  );
}

export default OffersView;
