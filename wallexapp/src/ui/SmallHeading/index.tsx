import React, { PropsWithChildren } from 'react';
import styles from './smallHeading.module.scss';

interface Props extends PropsWithChildren {}

function SmallHeading({ children }: Props) {
  return <h3 className={styles.container}>{children}</h3>;
}

export default SmallHeading;
