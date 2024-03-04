import IconMore from '@/assets/icons/more.svg';

import styles from './Header.module.scss';

const Dummy = {
  image: null,
  user: '파블로 항공',
};

export const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.userInfo}>
        {Dummy.image ? (
          <img className={styles.profile} src={Dummy.image} alt="profile" />
        ) : (
          <div className={styles.profile} />
        )}
        <span>{Dummy.user}</span>
      </div>
      <img className={styles.moreButton} src={IconMore} alt="more" />
    </header>
  );
};
