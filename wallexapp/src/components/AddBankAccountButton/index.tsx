import styles from './addBankAccountButton.module.scss';

type Props = {};

function AddBankAccountButton({}: Props) {
  return (
    <button className={styles.container}>
      <p>+</p>
    </button>
  );
}

export default AddBankAccountButton;
