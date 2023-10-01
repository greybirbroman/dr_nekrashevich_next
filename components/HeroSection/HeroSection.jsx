import Image from 'next/image';
import SocialLinksBar from '../SocialLinksBar/SocialLinksBar';
import HeroImage from '../../public/hero-image.webp';

const HeroSection = () => {
  const experience = new Date().getFullYear() - 2013;
 
  return (
    <section className='flex flex-col items-center justify-center w-full h-screen relative px-10 md:px-5 sm:px-3 cursor-default'>
      <Image
        src={HeroImage}
        width={600}
        height={900}
        priority
        quality={95}
        alt='Фотография, врач стоматолог, Некрашевич Марина Сергеевна'
        className='-z-10 object-cover lg:object-contain absolute w-full h-screen'
      />
      <div className='w-full h-full flex flex-col pb-20 items-center justify-end lg:items-start md:justify-center lg:justify-center'>
        <h1 className='text-[32px] md:text-[36px] lg:text-[48px] font-bold lg:text-left text-center bg-clip-text text-transparent bg-gradient-to-l from-cyan-900 to-cyan-500'>
          Некрашевич <br /> Марина Сергеевна
        </h1>
        <h2 className='text-gray-500 text-[20px] lg:text-[28px] sm:text-center md:text-center'>
          врач-стоматолог <br className='flex' />
          врач-стоматолог детский
        </h2>
        <span className='font text-cyan-700 text-[18px] lg:text-[20px]'>
          Стаж {experience} лет
        </span>
      <SocialLinksBar
        className={
          'flex justify-center items-center self-center gap-2 max-w-3xl lg:absolute bottom-0'
        }
      />
      </div>
    </section>
  );
};

export default HeroSection;
