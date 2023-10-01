'use client';
import ModalPortal from './ModalPortal';
import { motion as m } from 'framer-motion';
import { modalVariants } from '@/utils/motion';
import Image from 'next/image';

const ModalWindow = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <ModalPortal wrapperId='react-portal-container'>
        <div className='fixed inset-0 z-40 flex items-center justify-center'>
          <div
            className='absolute inset-0 bg-black/50 backdrop-blur-[3px]'
            onClick={onClose}
          />
          <m.div
            variants={modalVariants}
            initial='hidden'
            animate='show'
            className='relative max-w-[90vw] max-h-[90vh] lg:max-w-[75vw] lg:max-h-[75vh] bg-transparent rounded-lg overflow-hidden mx-4'
          >
            <Image
              src='/close_icon.svg'
              alt='Иконка, закрыть'
              width={40}
              height={40}
              className='absolute right-2 top-2 cursor-pointer hover:scale-105'
              onClick={onClose}
            />
            {children}
          </m.div>
        </div>
      </ModalPortal>
    </>
  );
};

export default ModalWindow;
