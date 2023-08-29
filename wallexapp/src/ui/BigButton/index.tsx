import styles from './bigButton.module.scss';
import React from 'react';
interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  title: string;
}

function BigButton({ title, ...attrs }: Props) {
  return (
    <button className={styles.container} {...attrs}>
      <p>{title}</p>
    </button>
  );
}

export default BigButton;
