import Gmail from '../public/gmail-icon.svg'
import Telegram from '../public/telegram-icon.svg'
import VK from '../public/vk-icon.svg'

export const navTabs = [
  {
    id: 1,
    title: 'Обо мне',
    link: '#about',
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
    link: '#work',
    aria: 'Переход к секции "Образование"',
  },
];

export const footerNavList = [
  {
    id: 1,
    title: 'В начало',
    link: '#home',
    area: 'Переход к началу страницы'
  },
  {
    id: 2,
    title: 'Обо мне',
    link: '#about',
    area: 'Переход к секции "Обо мне"'
  },
  {
    id: 3,
    title: 'Отзывы',
    link: '#testimonials',
    area: 'Переход к секции "Отзывы"'
  },
  {
    id: 4,
    title: 'Мои работы',
    link: '#galery',
    area: 'Переход к галерее работ'
  },
]

export const adressList = [
  {
    id: 1,
    title: 'Адрес',
    text: '197198, Санкт-Петербург, ул. Пионерская, д. 8',
  },
  {
    id: 2,
    title: 'E-mail',
    text: 'clinic@denteria.ru',
  },
  {
    id: 3,
    title: 'Телефон',
    text: '+7(812)209-1607',
  },
  {
    id: 4,
    title: 'Режим работы',
    text: 'Пн-Вс 09:00-21:00',
  },
  {
    id: 5,
    title: 'Связаться с администратором',
    text: '',
  },
];

export const workHours = [
  {
    id: 1,
    day: 'Понедельник: ',
    hours: '9:00 - 15:00'
  },
  {
    id: 2,
    day: 'Вторник: ',
    hours: '15:00 - 21:00'
  },
  {
    id: 3,
    day: 'Четверг: ',
    hours: '9:00 - 18:00'
  },
  {
    id: 4,
    day: 'Пятница: ',
    hours: '15:00 - 21:00'
  },
  {
    id: 5,
    day: 'Суббота: ',
    hours: '12:00 - 18:00'
  },
  {
    id: 6,
    day: 'Воскресенье: ',
    hours: '9:00 - 15:00'
  },
]

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
  