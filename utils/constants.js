import Gmail from '../public/gmail-icon.svg';
import Telegram from '../public/telegram-icon.svg';
import VK from '../public/vk-icon.svg';

export const navTabs = [
    {
        id: 1,
        title: 'Обо мне',
        link: '#about',
        aria: 'Переход к секции "Обо мне"'
    },
    {
        id: 2,
        title: 'Лечение',
        link: '#services',
        aria: 'Переход к секции "Услуги и оборудование"'
    },
    {
        id: 3,
        title: 'Отзывы',
        link: '#testimonials',
        aria: 'Переход к секции "Отзывы"'
    },
    {
        id: 4,
        title: 'Работы',
        link: '#galery',
        aria: 'Переход к секции "Работы"'
    },
];


export const socialLinksList = [
    {
        id: 1,
        linkHref: 'mailto:m.nekrashevich@denteria.ru',
        title: 'Gmail',
        label: 'Написать по электронной почте',
        icon: Gmail
    },
    {
        id: 2,
        linkHref: 'https://t.me/MarinaNekrashevich',
        title: 'Telegram',
        label: 'Открыть Telegram',
        icon: Telegram
    },
    {
        id: 3,
        linkHref: 'https://m.vk.com/meowwzilla',
        title: 'VKontakte',
        label: 'Открыть ВКонтакте',
        icon: VK
    }
];



