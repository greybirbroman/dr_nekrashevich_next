import Gmail from '../public/gmail-icon.svg'
import Telegram from '../public/telegram-icon.svg'
import VK from '../public/vk-icon.svg'
export const navTabs = [
  {
    id: 1,
    title: 'Обо мне',
    link: '#specialization',
    aria: 'Переход к секции "Специализация"',
  },
  {
    id: 2,
    title: 'Отзывы',
    link: '#testimonials',
    aria: 'Переход к секции "Отзывы"',
  },
  {
    id: 3,
    title: 'Записаться',
    link: '#footer',
    aria: 'Переход к секции "Образование"',
  },
];

export const socialLinksList = [
    {
      id: 1,
      linkHref: 'mailto:m.nekrashevich@denteria.ru',
      title: 'Gmail, почтовый ящик, почта',
      icon: Gmail,
    },
    {
      id: 2,
      linkHref: 'https://t.me/MarinaNekrashevich',
      title: 'Telegram, месседжер Телеграм',
      icon: Telegram,
    },
    {
      id: 3,
      linkHref: 'https://m.vk.com/meowwzilla',
      title: 'VKontakte, Вконтакте, VK, ВК, социальная сеть',
      icon: VK,
    },
  ];

  export const educationlist = [
    {
      id: 1,
      year: '2012',
      text: 'Саратовский государственный медицинский университет им. В.И. Разумовского (стоматология)',
      span: 'Базовое образование',
    },
    {
      id: 2,
      year: '2013',
      text: 'Саратовский государственный медицинский университет им. В.И. Разумовского (стоматология общей практики)',
      span: 'Интернатура',
    },
  ];
  
  export const instrumentslist = [
    {
      id: 1,
      text: 'Дентальный микроскоп OPMI pico MORA',
      span: '(Carl Zeiss, Германия)',
    },
    {
      id: 2,
      text: 'Диодный лазер Doctor Smile',
      span: '(Lambda S.p.A., Италия)',
    },
    {
      id: 3,
      text: 'CAD/CAM система CEREC MC XL Premium Package',
      span: '(Dentsply Sirona, Германия)',
    },
  ];
  
  
  
  export const specializations = [
    'Лечение взрослых и детей',
    'Лечение кариеса зубов',
    'Лечение подростков под микроскопом',
    'Лечение корневых каналов',
    'Повторное эндодонтическое лечение, извлечение отломков инструментов из корневого канала под микроскопом',
    'Эстетические реставрации, композитные виниры, лазерное отбеливание зубов, внутрикоронковое отбеливание',
  ];
  
  export const specializationList = specializations.map((item, index) => ({id: index, text: item}))
  