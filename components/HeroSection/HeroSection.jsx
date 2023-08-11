import Image from 'next/image';
import SocialLinksBar from '../SocialLinksBar/SocialLinksBar';
import MainImage from '../../public/assets/main-image.jpg';

const HeroSection = () => {

  const experience = new Date().getFullYear() - 2013;
  return (
    <section className='flex flex-col items-center justify-center w-full h-screen relative px-10 md:px-5 sm:px-3'>
      <Image
        src={MainImage}
        priority={true}
        quality={100}
        //fill={true}
        alt='main_image'
        className='-z-10 opacity-85 object-cover absolute'
      />
      <div className='w-full flex flex-col items-center'>
        <h1 className='text-gray-900 text-[32px] md:text-[44px] lg:text-[52px] font-bold text-center'>
          Некрашевич <br className='flex lg:hidden' /> Марина Сергеевна
        </h1>
        <h2 className='text-gray-700 sm:text-[16px] text-[24px]'>
          Врач-стоматолог-терапевт /<br className='flex lg:hidden' />{' '}
          врач-стоматолог детский
        </h2>
        <span className='font-mono text-cyan-700 sm:text-[16px] text-[20px]'>
          Стаж {experience} лет
        </span>
      </div>
      <SocialLinksBar/>
    </section>
  );
};

export default HeroSection;
