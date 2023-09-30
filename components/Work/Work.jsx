'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { navigationVariants } from '@/utils/motion';
import { adressList, workHours, footerNavList } from '../../utils/constants';
import SocialLinksBar from '../SocialLinksBar/SocialLinksBar';
import YandexMap from '../YandexMap/YandexMap';
import MUILinksBar from '../MUILinksBar/MUILinksBar';
import Link from 'next/link';
import PrimaryLink from '../PrimaryLink/PrimaryLink';

function Work() {
  const [openMap, setOpenMap] = useState(false);

  const spanMessageData = {
    title: 'Записаться',
    subtitle:
      'По всем интересующим вопросам напишите мне сообщение в любой удобной для Вас социальной сети',
  };

  function toggleMap() {
    setOpenMap((prev) => !prev);
  }

  const InfoBlock = ({ children, title }) => {
    return (
      <div className='pt-8 pb-8 sm:pb-4 sm:pt-4 z-10'>
        <span className='font-[700]'>{title}</span>
        {children}
      </div>
    );
  };

  return (
    <section id='work' className='cursor-default bg-cyan-700 text-white w-full'>
      <div className='p-4 md:p-8 lg:p-12'>
        <motion.div
          variants={navigationVariants}
          initial='hidden'
          whileInView='show'
          className='lg:max-w-[50%] w-full bg-white py-2 px-2 rounded-xl text-gray-700'
        >
          <h3 className='font-black text-[30px]'>{spanMessageData.title}</h3>
          <p className='text-[16px] font-normal'>{spanMessageData.subtitle}</p>
          <SocialLinksBar className='flex justify-end' />
        </motion.div>

        <div className='flex flex-wrap items-start justify-start sm:gap-10 gap-20'>
          <InfoBlock title='Контакты клиники:'>
            <ul className='flex flex-col tracking-normal gap-2'>
              {adressList.map((listItem) => (
                <li key={listItem.id} className='text-[14px]'>
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
                <li key={item.id} className='flex gap-2 text-[14px]'>
                  <p className='text-cyan-300'>{item.day}</p>
                  <span>{item.hours}</span>
                </li>
              ))}
            </ul>
          </InfoBlock>
          <InfoBlock title='Навигация'>
            <ul className='flex flex-col tracking-normal gap-2 pt-8 pb-8 sm:pb-4 sm:pt-4'>
              {footerNavList.map((item) => (
                <li key={item.id}>
                  <PrimaryLink
                    href={item.link}
                    title={item.title}
                    hoverColor='rgb(6, 182, 212)'
                    className='text-white'
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
export default Work;
