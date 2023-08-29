import { useState } from 'react';
import styles from './simpleList.module.scss';

type listItem = {
  id: number;
  value: string;
};

type Props = {
  list: listItem[];
  onSet: Function;
};

function SimpleList({ list, onSet }: Props) {
  const [opened, setOpened] = useState(false);
  const [value, setValue] = useState(list[0].value);
  return (
    <div className={styles.container}>
      {opened && (
        <div
          className={styles.podlozhka}
          onClick={() => {
            setOpened(false);
          }}></div>
      )}
      <button
        className={styles.button}
        onClick={() => {
          setOpened(!opened);
        }}>
        <p>{value}</p>
      </button>
      <div className={styles.list} style={{ height: opened ? 'fit-content' : '0px' }}>
        {list.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setValue(item.value);
              onSet(item);
              setOpened(false);
            }}>
            <p>{item.value}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default SimpleList;
