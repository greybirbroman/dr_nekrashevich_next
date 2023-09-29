'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import SectionTitle from '../SectionTitle/SectionTitle';
import ModalWindow from '../ModalWindow/ModalWindow';
import ModalControls from '../ModalWindow/ModalControls/ModalControls';
import { gallery } from '@/utils/gallery';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import useIsMobileResolution from '@/utils/hooks/useIsMobileResolition';

const GridGalery = () => {
  const isMobile = useIsMobileResolution(992);
  const [isPreview, setIsPreview] = useState(false);
  // const [isActive, setIsActive] = useState(-1)
  const [list, setList] = useState(gallery);
  const [itemsOnPage, setItemsOnPage] = useState(3);
  const isNotShowAll = itemsOnPage < list.length;
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(
    gallery[selectedImageIndex]
  );

  useEffect(() => {
    setSelectedImage(gallery[selectedImageIndex]);
  }, [selectedImageIndex]);

  const togglePreview = (image, index) => {
    setIsPreview((prevState) => !prevState);
    setSelectedImage(image);
    setSelectedImageIndex(index);
  };

  const handleLeftClick = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? gallery.length - 1 : prevIndex - 1
    );
  };

  const handleRightClick = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === gallery.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    if (isMobile) {
      setItemsOnPage(1);
    } else {
      setItemsOnPage(3);
    }
  }, [isMobile]);

  const handleShowAll = () => {
    if (isNotShowAll) {
      setItemsOnPage(list.length);
    } else {
      setItemsOnPage(isMobile ? 1 : 3);
    }
  };

  return (
    <section
      id='galery'
      className='relative w-full p-4 md:p-8 lg:p-12 bg-slate-50'
    >
      <SectionTitle title='Галерея работ' />
      <div className='w-full flex flex-col items-center'>
        <ul className='relative w-full grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 sm:gap-4'>
          {list.slice(0, itemsOnPage).map((item, index) => (
            <li
              key={item.id}
              className='flex cursor-pointer shadow-xl rounded-xl overflow-hidden relative text-white text-[14px] w-[100%] min-h-[250px]'
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                quality={100}
                onClick={() => togglePreview(item, index)}
                className='object-cover hover:scale-105 duration-300 h-full'
              />
            </li>
          ))}
        </ul>
        <PrimaryButton
          title={isNotShowAll ? 'Показать все' : 'Свернуть'}
          onClick={handleShowAll}
        />
      </div>
      {isPreview && (
        <ModalWindow
          isOpen={isPreview}
          onClose={() => setIsPreview(false)}
        >
          {selectedImage && (
            <>
              <ModalControls
                onLeftClick={handleLeftClick}
                onRightClick={handleRightClick}
              />
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={700}
                height={700}
                quality={100}
                className='object-cover w-full flex items-center justify-center'
              />
              <div className='bg-gradient-to-b from-transparent to-black/70 w-full h-[150px] absolute bottom-0 flex flex-col items-center justify-end pb-2 cursor-default'>
                <span className='flex items-end justify-center text-white'>
                  {selectedImage.alt}
                </span>
              </div>
            </>
          )}
        </ModalWindow>
      )}
    </section>
  );
};

export default GridGalery;
