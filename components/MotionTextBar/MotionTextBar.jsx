'use client';
import { motion as m } from 'framer-motion';
import { socialLinksVariants } from '@/utils/motion';

const MotionTextBar = ({ title, subtitle, children }) => {
  return (
    <m.div
      variants={socialLinksVariants}
      initial='hidden'
      whileInView='show'
      className='lg:max-w-3xl w-full bg-white py-2 px-8 rounded-xl text-gray-700'
    >
      <h5 className='font-black text-[30px]'>{title}</h5>
      <p className='text-[16px] font-normal'>{subtitle}</p>
      {children}
    </m.div>
  );
};

export default MotionTextBar;
