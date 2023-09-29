'use client';
import React, { useRef } from 'react';
import ModalOverlay from './ModalOverlay/ModalOverlay';
import Image from 'next/image';
import { motion as m } from 'framer-motion'

const Modal = ({ children, isOpen, onClose }) => {
  const modalRef = useRef(null);

  if (!isOpen) return null;

  return (
    <section className='fixed inset-0 flex justify-center items-center z-20 p-2'>
      <ModalOverlay onClose={onClose} />
      <m.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
        className={`flex flex-col items-center relative bg-transparent shadow-lg rounded-lg z-30 transition-all max-w-[75vw] max-h-auto overflow-hidden`}
        ref={modalRef}
      >
       
        <div
          className='bg-black/70 absolute top-2 right-2 cursor-pointer p-2 flex items-center justify-center rounded-full hover:scale-110 duration-75 z-50'
          onClick={onClose}
        >
          <button type='button'>
            <Image
              src='/close_icon.svg'
              alt='Закрыть, иконка'
              width={30}
              height={30}
            />
          </button>
        </div>
        {children}
      </m.div>
    </section>
  );
};

export default React.memo(Modal);
