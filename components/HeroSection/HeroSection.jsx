import Image from 'next/image';
import SocialLinksBar from '../SocialLinksBar/SocialLinksBar';
import MainImage from '../../public/main-image.JPG';

const HeroSection = () => {

  const experience = new Date().getFullYear() - 2013;
  return (
    <section className='flex flex-col items-center justify-center w-full h-screen relative px-10 md:px-5 sm:px-3 cursor-default'>
      <Image
        src={MainImage}
        fill
        sizes='100vw'
        priority
        quality={100}
        alt='main_image'
        className='-z-10 opacity-85 object-cover lg:object-contain'
      />
      <div className='w-full flex flex-col items-center lg:items-start'>
        <h1 className='text-[32px] md:text-[44px] lg:text-[64px] font-[900] lg:text-left text-center bg-clip-text text-transparent bg-gradient-to-l from-cyan-900 to-cyan-500'>
          Некрашевич <br /> Марина Сергеевна
        </h1>
        <h2 className='text-gray-500 sm:text-[14px] text-[24px]'>
          Врач-стоматолог-терапевт /<br className='flex' />
          врач-стоматолог детский
        </h2>
        <span className='font text-cyan-700 sm:text-[16px] text-[20px]'>
          Стаж {experience} лет
        </span>
      </div>
      <SocialLinksBar className={'flex justify-center items-center w-full absolute bottom-0'}/>
    </section>
  );
};

export default HeroSection;
