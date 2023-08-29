import styles from './heading.module.scss';

type Props = { title: string };

function Heading({ title }: Props) {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <div className={styles.line}></div>
    </div>
  );
}

export default Heading;
