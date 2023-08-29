import { Outlet } from 'react-router-dom';
import styles from './mainContainer.module.scss';
import { ReactComponent as IconSVG } from '../../assets/icon.svg';
import { ReactComponent as WalletSVG } from '../../assets/wallet.svg';
import { ReactComponent as CurrencySVG } from '../../assets/currency.svg';
import { ReactComponent as HelpSVG } from '../../assets/help.svg';
import { ReactComponent as OffersSVG } from '../../assets/offers.svg';
import ImageButton from '../../ui/ImageButton';
import ProfileImage from '../../assets/profileimage.png';
import FooterButton from '../../ui/FooterButton';
import { useEffect, useState } from 'react';
type Props = {
  footer?: boolean;
};

function MainContainer({ footer = false }: Props) {
  const [pathState, setPath] = useState(window.location.pathname);
  const paths = [
    {
      path: '/',
      title: 'Мои финансы',
      svg: <WalletSVG />,
    },
    {
      path: '/currency',
      title: 'Операции',
      svg: <CurrencySVG />,
    },
    {
      path: '/offers',
      title: 'Предложения',
      svg: <OffersSVG />,
    },
    {
      path: '/help',
      title: 'Помощник',
      svg: <HelpSVG />,
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <IconSVG />
        <h1>wallex</h1>
        <ImageButton>
          <img src={ProfileImage} />
        </ImageButton>
        {/** @todo profile button */}
      </div>
      <Outlet />
      {footer && (
        <div className={styles.footer}>
          {paths.map((path) => {
            return (
              <FooterButton
                title={path.title}
                path={path.path}
                setPath={setPath}
                active={pathState === path.path}>
                {path.svg}
              </FooterButton>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default MainContainer;
