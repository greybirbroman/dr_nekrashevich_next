'use client';

import Image from 'next/image';
import PrimaryLink from '../PrimaryLink/PrimaryLink';
import { useNavigationMenu } from '@/utils/hooks/useNavigationMenu';

const MenuList = ({ onClick, list, isMenuVisible }) => {
    return (
        <ul
            className={`absolute right-0 top-[50px] bg-white rounded-[14px] shadow-md p-[20px] md:p-[24px] flex flex-col gap-2 md:gap-4 transition-all duration-300 ease-in-out ${
                isMenuVisible ? `opacity-100 visible` : ` opacity-0 invisible`
            }`}>
            {list.map((tab) => (
                <li key={tab.id} className="whitespace-nowrap" onClick={onClick}>
                    <PrimaryLink href={tab.link} title={tab.title} variant={'cyan'}>
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
            className={`lg:hidden md:w-[24px] md:h-[24px]`}
            type="button"
            src="/burger-menu.svg"
            width={20}
            height={20}
            id="burger"
            alt="Иконка, меню, бургер"
            aria-label="Иконка, меню, бургер"
            role="button"
            onClick={onClick}
        />
    );
};

const Navigation = ({ list }) => {
    const { menuRef, openMenu, closeMenu, isMenuVisible } = useNavigationMenu();
    return (
        <nav ref={menuRef} className="relative">
            <BurgerButton onClick={isMenuVisible ? closeMenu : openMenu} />
            <MenuList list={list} isMenuVisible={isMenuVisible} onClick={closeMenu} />
            <ul className={`hidden lg:flex items-center gap-2 md:gap-3 lg:gap-4 `}>
                {list.map((tab) => (
                    <li key={tab.id}>
                        <PrimaryLink href={tab.link} title={tab.title} variant={'cyan'} />
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
