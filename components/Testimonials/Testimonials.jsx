'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionTitle, PrimaryButton, MotionListItem } from '..';
import useIsMobileResolution from '@/utils/hooks/useIsMobileResolition';
import { testimonials } from '@/utils/testimonials';
import { testimonialsVariants } from '@/utils/motion';

const Testimonials = ({ list }) => {
  const [visibleCount, setVisibleCount] = useState(1);
  const isMobileResolution = useIsMobileResolution(992);
  const isNotShowAll = visibleCount < testimonials.length;
  const stars = Array(5).fill(null);

  const handleShowAll = () => {
    if (isNotShowAll) {
      setVisibleCount(testimonials.length);
    } else {
      setVisibleCount(1);
    }
  };

  useEffect(() => {
    if (isMobileResolution) {
      setVisibleCount(1);
    } else {
      setVisibleCount(testimonials.length);
    }
  }, [isMobileResolution]);

  return (
    <section
      id='testimonials'
      className='px-4 md:px-8 lg:px-12 cursor-default flex flex-col items-center bg-slate-50'
    >
      <SectionTitle title='отзывы' />

      <ul className='flex sm:flex-col flex-wrap justify-center gap-10'>
        {list.length > 0 &&
          list.slice(0, visibleCount).map((item) => (
            <li
              key={item._id}
              className='shadow-xl rounded-xl overflow-hidden max-w-[490px] flex flex-col justify-between bg-white'
            >
              <blockquote className='p-4 sm:text-[16px] text-[20px] font-normal text-gray-700 leading-8'>
                &#8220;{item.description}&#8221;
              </blockquote>
              <div className='flex justify-between items-center bg-cyan-700 text-white h-[100px] p-4'>
                <div className='flex bg-white rounded-full hover:scale-110 duration-300'>
                  <Link
                    href='https://yandex.ru/profile/149051823874'
                    target='_blank'
                  >
                    <Image
                      src='https://yastatic.net/s3/home-static/_/Z/6/nfVezDRqofwQZ5e669DSK84Tw.svg'
                      alt='Яндекс, логотип'
                      width={60}
                      height={60}
                      className='max-w-[100%] h-auto'
                    />
                  </Link>
                </div>
                <div className='flex flex-col items-center'>
                  <cite className='italic'>{item.author}</cite>
                  <time className='text-[14px]'>
                    {item.published.replace(/-/g, '.')}
                  </time>
                  <div className='flex'>
                    {stars.map((_, index) => (
                      <Image
                        key={index}
                        src='/star.svg'
                        alt='Изображение, звезда, рейтинг'
                        width={60}
                        height={60}
                        className='w-auto h-auto'
                      />
                    ))}
                  </div>
                </div>
                <Image
                  src='/quote.svg'
                  alt='Изображение, ковычки, цитата'
                  width={60}
                  height={60}
                  className='w-[60px] h-[60px]'
                />
              </div>
            </li>
          ))}
      </ul>
      {isMobileResolution && (
        <PrimaryButton
          title={isNotShowAll ? 'Показать все' : 'Cкрыть'}
          isActive={!isNotShowAll}
          onClick={handleShowAll}
          customClass='mt-8 sm:mt-4'
        />
      )}
    </section>
  );
};

export default Testimonials;
