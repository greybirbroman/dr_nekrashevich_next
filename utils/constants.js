import Gmail from '../public/gmail-icon.svg';
import Telegram from '../public/telegram-icon.svg';
import VK from '../public/vk-icon.svg';

export const navTabs = [
    {
        id: 1,
        title: 'Обо мне',
        link: '#about',
        aria: 'Переход к секции "Специализация"'
    },
    {
        id: 2,
        title: 'Отзывы',
        link: '#testimonials',
        aria: 'Переход к секции "Отзывы"'
    },
    {
        id: 3,
        title: 'Работы',
        link: '#galery',
        aria: 'Переход к секции "Галерея"'
    },
    {
        id: 4,
        title: 'Записаться',
        link: '#work',
        aria: 'Переход к секции "Образование"'
    }
];


export const socialLinksList = [
    {
        id: 1,
        linkHref: 'mailto:m.nekrashevich@denteria.ru',
        title: 'Gmail, почтовый ящик, почта',
        icon: Gmail
    },
    {
        id: 2,
        linkHref: 'https://t.me/MarinaNekrashevich',
        title: 'Telegram, месседжер Телеграм',
        icon: Telegram
    },
    {
        id: 3,
        linkHref: 'https://m.vk.com/meowwzilla',
        title: 'VKontakte, Вконтакте, VK, ВК, социальная сеть',
        icon: VK
    }
];






