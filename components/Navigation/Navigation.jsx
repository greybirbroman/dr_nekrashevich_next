'use client'

import PrimaryLink from '../PrimaryLink/PrimaryLink'
import { useNavigationMenu } from '@/utils/hooks/useNavigationMenu'
import styles from './Navigation.module.css'

const MenuList = ({ onClick, list, isMenuVisible }) => (
  <ul
    id="mobile-navigation"
    aria-label="Основная навигация"
    aria-hidden={!isMenuVisible}
    inert={!isMenuVisible}
    className={`absolute right-0 top-[calc(100%-0.5rem)] z-40 flex min-w-56 max-w-[calc(100vw-2.5rem)] flex-col gap-1 rounded-2xl border border-brand-100 bg-surface p-3 shadow-soft md:top-[calc(100%-1.25rem)] desktop:hidden ${styles.MenuPanel} ${isMenuVisible ? styles.MenuPanelOpen : ''}`}
  >
    {list.map((tab) => (
      <li key={tab.id}>
        <PrimaryLink
          href={tab.link}
          title={tab.title}
          variant="brand"
          className={`rounded-xl px-4 py-3 font-semibold ${styles.MenuLink}`}
          onClick={onClick}
        />
      </li>
    ))}
  </ul>
)

const Navigation = ({ list }) => {
  const {
    menuRef,
    triggerRef,
    openMenu,
    closeMenu,
    isMenuVisible,
  } = useNavigationMenu()

  return (
    <nav ref={menuRef} aria-label="Основная навигация" className="static order-2 desktop:relative desktop:order-2">
      <button
        ref={triggerRef}
        type="button"
        className={`relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-100 bg-white/90 text-primary shadow-sm transition-colors hover:bg-brand-50 focus-visible:outline-brand-700 desktop:hidden ${styles.MenuButton}`}
        aria-label={isMenuVisible ? 'Закрыть меню' : 'Открыть меню'}
        aria-expanded={isMenuVisible}
        aria-controls="mobile-navigation"
        onClick={isMenuVisible ? closeMenu : openMenu}
      />

      <MenuList
        list={list}
        isMenuVisible={isMenuVisible}
        onClick={closeMenu}
      />

      <ul className="hidden items-center gap-[30px] desktop:flex">
        {list.map((tab) => (
          <li key={tab.id}>
            <PrimaryLink
              href={tab.link}
              title={tab.title}
              variant="brand"
              className="inline-flex min-h-10 items-center font-medium text-sm-base hover:text-brand-muted"
            />
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
