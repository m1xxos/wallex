import { useState } from 'react';
import { Banks } from '../../tools';
import Heading from '../../ui/Heading';
import SimpleList from '../../ui/SimpleList';
import SmallHeading from '../../ui/SmallHeading';
import styles from './addAccountView.module.scss';
import BigButton from '../../ui/BigButton';
import axios from 'axios';
import { useAuthStore } from '../../stores/authStore';
import { useNavigate } from 'react-router-dom';
type Props = {};

function AddAccountView({}: Props) {
  const token = useAuthStore((state) => state.token);
  const [currency, setCurrency] = useState<number>();
  const [bank, setBank] = useState<number>();
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  async function setAccount() {
    let res;
    if (currency !== undefined && bank !== undefined && checked)
      res = await axios.post(
        `${process.env.REACT_APP_BACK_DOMAIN}/api/bank/account/`,
        { name: Math.round(Math.random() * 10000), currency: currency },
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        },
      );
    if (res?.status !== 200) {
      return navigate('/');
    }
  }

  return (
    <div className={styles.container}>
      <Heading title="Добавление счёта" />
      <div className={styles.group}>
        <SmallHeading>выберите валюту</SmallHeading>
        <SimpleList
          list={[
            { id: -1, value: 'валюта' },
            { id: 1, value: '₽ — российские рубли' },
            { id: 2, value: '₹ — индийские рупии' },
            { id: 3, value: '₪ — израильские шекели' },
          ]}
          onSet={(item: { id: number; value: string }) => {
            setCurrency(item.id);
          }}
        />

        {currency !== undefined && currency !== -1 && (
          <>
            <SmallHeading>выберите банк</SmallHeading>
            <SimpleList
              list={[
                { id: Banks[0].id, value: Banks[0].name },
                ...Banks.filter((bank) => bank.currency === currency).map((bank) => ({
                  id: bank.id,
                  value: bank.name,
                })),
              ]}
              onSet={(item: { id: number; value: string }) => {
                setBank(item.id);
              }}
            />
          </>
        )}

        {bank !== undefined && bank !== -1 && (
          <label style={{ display: 'flex', gap: '5px' }}>
            <input type="checkbox" onChange={(e) => setChecked(e.currentTarget.checked)} />
            согласие на передачу и обработку персональных данных
          </label>
        )}

        {checked && <BigButton title="создать новый счёт" onClick={setAccount} />}
      </div>
    </div>
  );
}

export default AddAccountView;
