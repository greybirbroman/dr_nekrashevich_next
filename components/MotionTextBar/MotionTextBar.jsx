'use client';
import { motion as m } from 'framer-motion';
import { socialLinksVariants } from '@/utils/motion';

const MotionTextBar = ({ title, subtitle, children }) => {
  return (
    <m.div
      variants={socialLinksVariants}
      initial='hidden'
      whileInView='show'
      className='lg:max-w-3xl w-full bg-white py-2 px-8 sm:px-2 rounded-xl text-gray-900'
    >
      <h5 className='font-black text-[28px] md:text-[32px] lg:text-[36px]'>{title}</h5>
      <p className='md:text-[18px] lg:text-[20px]'>{subtitle}</p>
      {children}
    </m.div>
  );
};

export default MotionTextBar;
