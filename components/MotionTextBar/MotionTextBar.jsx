'use client';
import { motion as m } from 'framer-motion';
import { socialLinksVariants } from '@/utils/motion';

const MotionTextBar = ({ title, subtitle, children }) => {
  return (
    <m.div
      variants={socialLinksVariants}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true }}
      className='lg:max-w-3xl w-full bg-white py-2 px-8 sm:px-2 rounded-xl'
    >
      <h5 className='font-black text-primary text-h2-sm md:text-h2-md lg:text-h2-lg'>{title}</h5>
      <p className='text-md-base md:text-md-md lg:text-md-lg text-secondary'>{subtitle}</p>
      {children}
    </m.div>
  );
};

export default MotionTextBar;
