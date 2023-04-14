import CartBtn from '../CartBtn/CartBtn';
import styles from './Header.module.css';

import icon from './icon.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <img
        className={styles.icon}
        src={icon}
        alt='Pizza icon'
        width={38}
        height={38}
      />
      <div className={styles.titleBlock}>
        <h1 className={styles.title}>react pizza</h1>
        <span className={styles.subtitle}>
          самая вкусная пицца во вселенной
        </span>
      </div>
      <CartBtn />
    </header>
  );
};

export default Header;
