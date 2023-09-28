'use client';
import styles from './Navigation.module.css';
import { useState, useRef, useEffect } from 'react';
import { navTabs } from '../../utils/constants';
import PrimaryLink from '../PrimaryLink/PrimaryLink';
import Image from 'next/image';

const MenuList = ({ onClick }) => {
  return (
    <ul className='absolute right-0 border-2 border-cyan-700 bg-white rounded-lg p-2'>
      {navTabs.map((tab) => (
        <li
          key={tab.id}
          className='py-2 px-5'
          onClick={onClick}
        >
          <PrimaryLink href={tab.link} title={tab.title} hoverColor='rgb(6, 182, 212)' onClick={onClick}>
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

const Navigation = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuVisible((prevState) => !prevState);
  };

  const handleClickOutsideMenu = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutsideMenu);

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideMenu);
    };
  }, []);

  return (
    <nav className={styles.nav} ref={menuRef}>
      <BurgerButton onClick={toggleMenu} />
      {isMenuVisible && <MenuList onClick={toggleMenu} />}
      <ul className={styles.navList}>
        {navTabs.map((tab) => (
          <li
            key={tab.id}
          >
            <PrimaryLink
              href={tab.link}
              title={tab.title}
              className='inline-flex py-3 px-5 sm:px-3 bg-cyan-700 rounded-full text-white'
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
