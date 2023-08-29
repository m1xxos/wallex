import { Link } from 'react-router-dom';
import styles from './addBankAccountButton.module.scss';

type Props = {};

function AddBankAccountButton({}: Props) {
  return (
    <Link to="/add/account" className={styles.container}>
      <p>+</p>
    </Link>
  );
}

export default AddBankAccountButton;
