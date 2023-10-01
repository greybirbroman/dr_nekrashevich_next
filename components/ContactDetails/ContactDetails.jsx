'use client'
import Link from 'next/link';
import {
  SocialLinksBar,
  MotionTextBar,
  YandexMap
} from '../';
import PrimaryLink from '../PrimaryLink/PrimaryLink';
import MUILinksBar from '../MUILinksBar/MUILinksBar';
import { useYandexMap } from '@/utils/hooks/useYandexMap';
import { adressList, workHours, footerNavList } from '../../utils/constants';

function ContactDetails() {
  const { openMap, toggleMap } = useYandexMap()

  const textBarData = {
    title: 'Записаться',
    subtitle:
      'По всем интересующим вопросам напишите мне сообщение в любой удобной для Вас социальной сети',
  };

  const InfoBlock = ({ children, title }) => {
    return (
      <div className='pt-8 pb-8 sm:pb-4 sm:pt-4 z-10'>
        <h6 className='font-semibold lg:text-[20px]'>{title}</h6>
        {children}
      </div>
    );
  };

  return (
    <section id='work' className='cursor-default bg-cyan-700 text-white w-full'>
      <div className='p-4 md:p-8 lg:p-12'>
        <MotionTextBar
          title={textBarData.title}
          subtitle={textBarData.subtitle}
        >
          <SocialLinksBar className='flex justify-end' />
        </MotionTextBar>

        <div className='flex flex-wrap items-start justify-start sm:gap-10 gap-20'>
          <InfoBlock title='Контакты клиники:'>
            <ul className='flex flex-col tracking-normal gap-2 pt-8 sm:pt-4'>
              {adressList.map((listItem) => (
                <li key={listItem.id} className='lg:text-[18px]'>
                  <p className='text-cyan-300'>{listItem.title}</p>
                  {listItem.text.includes('@') ? (
                    <Link
                      className='hover:text-cyan-500 duration-75'
                      target='_blank'
                      href='https://denteria.ru/staff/nekrashevich-marina-sergeevna/'
                    >
                      {listItem.text}
                    </Link>
                  ) : (
                    <p className='text-white-700'>{listItem.text}</p>
                  )}
                </li>
              ))}
            </ul>
            <MUILinksBar onClick={toggleMap} />
          </InfoBlock>
          <InfoBlock title='Часы приема:'>
            <ul className='flex flex-col tracking-normal gap-2 pt-8 pb-8 sm:pb-4 sm:pt-4'>
              {workHours.map((item) => (
                <li key={item.id} className='flex gap-2 lg:text-[18px]'>
                  <p className='text-cyan-300'>{item.day}</p>
                  <time>{item.hours}</time>
                </li>
              ))}
            </ul>
          </InfoBlock>
          <InfoBlock title='Навигация'>
            <ul className='flex flex-col tracking-normal gap-2 pt-8 pb-8 sm:pb-4 sm:pt-4'>
              {footerNavList.map((item) => (
                <li key={item.id} className='lg:text-[18px]'>
                  <PrimaryLink
                    type='light'
                    href={item.link}
                    title={item.title}
                  />
                </li>
              ))}
            </ul>
          </InfoBlock>
        </div>
        {openMap && <YandexMap />}
      </div>
    </section>
  );
}
export default ContactDetails;
