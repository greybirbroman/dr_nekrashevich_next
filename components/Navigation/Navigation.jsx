'use client'

import Image from 'next/image'

import PrimaryLink from '../PrimaryLink/PrimaryLink'
import { useNavigationMenu } from '@/utils/hooks/useNavigationMenu'

const MenuList = ({ onClick, list, isMenuVisible }) => (
  <ul
    id="mobile-navigation"
    aria-label="Основная навигация"
    hidden={!isMenuVisible}
    className="absolute right-0 top-[calc(100%+0.75rem)] z-40 flex min-w-56 flex-col gap-1 rounded-2xl border border-brand-100 bg-surface p-3 shadow-soft lg:hidden"
  >
    {list.map((tab) => (
      <li key={tab.id}>
        <PrimaryLink
          href={tab.link}
          title={tab.title}
          variant="brand"
          className="block rounded-xl px-4 py-3 font-semibold hover:bg-brand-50"
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
    <nav ref={menuRef} aria-label="Основная навигация" className="relative">
      <button
        ref={triggerRef}
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-100 bg-white/90 text-primary shadow-sm transition-colors hover:bg-brand-50 focus-visible:outline-brand-700 lg:hidden"
        aria-label={isMenuVisible ? 'Закрыть меню' : 'Открыть меню'}
        aria-expanded={isMenuVisible}
        aria-controls="mobile-navigation"
        onClick={isMenuVisible ? closeMenu : openMenu}
      >
        <Image
          src={isMenuVisible ? '/close_icon.svg' : '/burger-menu.svg'}
          alt=""
          aria-hidden="true"
          width={20}
          height={20}
          loading="eager"
        />
      </button>

      <MenuList
        list={list}
        isMenuVisible={isMenuVisible}
        onClick={closeMenu}
      />

      <ul className="hidden items-center gap-2 rounded-full border border-white/70 bg-white/85 p-2 shadow-soft backdrop-blur-md lg:flex">
        {list.map((tab) => (
          <li key={tab.id}>
            <PrimaryLink
              href={tab.link}
              title={tab.title}
              variant="brand"
              className="inline-flex min-h-10 items-center rounded-full px-4 font-semibold hover:bg-brand-50"
            />
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
