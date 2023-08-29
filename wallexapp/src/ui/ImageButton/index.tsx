import { PropsWithChildren } from 'react';
import styles from './imageButton.module.scss';

interface Props extends PropsWithChildren {}

function ImageButton({ children }: Props) {
  return <button className={styles.container}>{children}</button>;
}

export default ImageButton;
