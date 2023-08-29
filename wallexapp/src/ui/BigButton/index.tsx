import styles from './bigButton.module.scss';
type Props = {
  title: string;
};

function BigButton({ title }: Props) {
  return (
    <button className={styles.container}>
      <p>{title}</p>
    </button>
  );
}

export default BigButton;
