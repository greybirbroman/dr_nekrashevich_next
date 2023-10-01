'use client';
import styles from './Navigation.module.css';
import Image from 'next/image';
import PrimaryLink from '../PrimaryLink/PrimaryLink';
import { useNavigationMenu } from '@/utils/hooks/useNavigationMenu';

const MenuList = ({ onClick, list }) => {
  return (
    <ul className='absolute right-0 border-2 border-cyan-700 bg-transparent rounded-lg p-2'>
      {list.map((tab) => (
        <li key={tab.id} className='py-2 px-5' onClick={onClick}>
          <PrimaryLink
            href={tab.link}
            title={tab.title}
            onClick={onClick}
          >
            {tab.title}
          </PrimaryLink>
        </li>
      ))}
    </ul>
  );
};

const BurgerButton = ({ onClick }) => {
  return (
    <Image
      className={styles.burgerButton}
      type='button'
      src='/burger-menu.svg'
      width={40}
      height={40}
      id='burger'
      alt='Иконка, меню, бургер'
      aria-label='Иконка, меню, бургер'
      role='button'
      onClick={onClick}
    />
  );
};

const Navigation = ({ list }) => {
  const { menuRef, toggleMenu, isMenuVisible } = useNavigationMenu();

  return (
    <nav className={styles.nav} ref={menuRef}>
      <BurgerButton onClick={toggleMenu} />
      {isMenuVisible && <MenuList onClick={toggleMenu} list={list} />}
      <ul className={styles.navList}>
        {list.map((tab) => (
          <li key={tab.id}>
            <PrimaryLink
              href={tab.link}
              title={tab.title}
             
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
