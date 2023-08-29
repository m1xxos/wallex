import { PropsWithChildren, useEffect } from 'react';
import { Link, redirect } from 'react-router-dom';
import styles from './footerButton.module.scss';

interface Props extends PropsWithChildren {
  path: string;
  title: string;
  active?: boolean;
  setPath: Function;
}

function FooterButton({ path, setPath, title, children, active = false }: Props) {
  return (
    <Link
      to={path}
      onClick={() => {
        setPath(path);
      }}
      className={
        window.location.pathname === path
          ? styles.container + ' ' + styles.active
          : styles.container
      }>
      {children}
      <p>{title}</p>
      <div className={styles.line}></div>
    </Link>
  );
}

export default FooterButton;
