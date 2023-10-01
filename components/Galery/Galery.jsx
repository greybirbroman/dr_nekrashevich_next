'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { SectionTitle, ModalWindow, ModalControls, PrimaryButton } from '../';
import useIsMobileResolution from '@/utils/hooks/useIsMobileResolition';

const Galery = ({ list }) => {
  const isMobile = useIsMobileResolution(992);
  const [isPreview, setIsPreview] = useState(false);
  const [itemsOnPage, setItemsOnPage] = useState(isMobile ? 1 : 3);
  const isNotShowAll = itemsOnPage < list.length;
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState({});

  useEffect(() => {
    setSelectedImage(list[selectedImageIndex]);
  }, [selectedImageIndex, list]);

  const handleLeftClick = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? list.length - 1 : prevIndex - 1
    );
  };

  const handleRightClick = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === list.length - 1 ? 0 : prevIndex + 1
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

  const previewImage = (id, index) => {
    setIsPreview(true);
    const selected = list.find((item) => item._id === id);
    setSelectedImage(selected);
    setSelectedImageIndex(index);
  };

  return (
    <section
      id='galery'
      className='relative w-full p-4 md:p-8 lg:p-12 bg-slate-50'
    >
      <SectionTitle title='Галерея работ' />
      <div className='w-full flex flex-col items-center'>
        <ul className='relative max-w-5xl flex flex-wrap justify-center gap-8 sm:gap-4 my-8 sm:my-4'>
          {list.length > 0 ? (
            list.slice(0, itemsOnPage).map((item, index) => (
              <li
                key={item._id}
                className='flex cursor-pointer shadow-xl rounded-xl overflow-hidden relative text-white text-[14px] min-w-[300px] min-h-[250px]'
              >
                <Image
                  id={item._id}
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes='300px'
                  quality={100}
                  onClick={() => previewImage(item._id, index)}
                  className='object-cover hover:scale-105 duration-300 h-auto'
                />
              </li>
            ))
          ) : (
            <p>{'Работы будут добавлены позже...'}</p>
          )}
        </ul>
        <PrimaryButton
          title={isNotShowAll ? 'Показать все' : 'Свернуть'}
          onClick={handleShowAll}
        />
      </div>

      <ModalWindow isOpen={isPreview} onClose={() => setIsPreview(false)}>
        {selectedImage && (
          <>
            <ModalControls
              onLeftClick={handleLeftClick}
              onRightClick={handleRightClick}
            />
            <Image
              src={selectedImage.image}
              alt={selectedImage.title}
              width={1000}
              height={1000}
              quality={100}
              className='object-contain'
            />
            <div className='bg-gradient-to-b from-transparent to-black/70 w-full h-[150px] absolute bottom-0 flex flex-col items-center justify-end pb-2 cursor-default'>
              <span className='flex items-end justify-center text-white'>
                {selectedImage.title}
              </span>
            </div>
          </>
        )}
      </ModalWindow>
    </section>
  );
};

export default Galery;
