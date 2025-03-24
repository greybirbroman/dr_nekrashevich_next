'use client';

import { useState, useEffect, useRef } from 'react';

export const useNavigationMenu = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const menuRef = useRef();

    const closeMenu = () => {
        setIsMenuVisible(false);
    };

    const openMenu = () => {
        setIsMenuVisible(true);
    };

    const handleClickOutsideMenu = (event) => {
        if (!menuRef) return;

        if (menuRef.current && !menuRef.current.contains(event.target)) {
            closeMenu();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutsideMenu);
        document.addEventListener('resize', closeMenu);

        return () => {
            document.removeEventListener('mousedown', handleClickOutsideMenu);
            document.removeEventListener('resize', closeMenu);
        };
    }, []);

    return {
        menuRef,
        isMenuVisible,
        closeMenu,
        openMenu
    };
};
