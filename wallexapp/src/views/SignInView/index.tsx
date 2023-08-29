import { useState } from 'react';
import BigButton from '../../ui/BigButton';
import styles from './signInView.module.scss';
import axios from 'axios';
import { useAuthStore } from '../../stores/authStore';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as IconSVG } from '../../assets/iconbig.svg';
type Props = {};

function SignInView({}: Props) {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const setToken = useAuthStore((state) => state.setToken);
  function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    const userData = {
      username: username,
      password: password,
    };
    axios
      .post(`${process.env.REACT_APP_BACK_DOMAIN}/api/token/`, userData, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(response.status);
          console.log(response.data);
          setToken(response.data.access);
          navigate('/');
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log('server responded');
        } else if (error.request) {
          console.log('network error');
        } else {
          console.log(error);
        }
      });
  }
  return (
    <div className={styles.container}>
      <form className={styles.form} noValidate>
        <IconSVG />
        <input type="text" value={username} onChange={(e) => setUsername(e.currentTarget.value)} />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <BigButton
          title="Войти"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
        />
      </form>
    </div>
  );
}

export default SignInView;
