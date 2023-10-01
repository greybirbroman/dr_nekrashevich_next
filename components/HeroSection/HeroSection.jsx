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
      <div className='w-full flex flex-col items-center lg:items-start'>
        <h1 className='text-[32px] md:text-[44px] lg:text-[64px] font-bold lg:text-left text-center bg-clip-text text-transparent bg-gradient-to-l from-cyan-900 to-cyan-500'>
          Некрашевич <br /> Марина Сергеевна
        </h1>
        <h2 className='text-gray-500 text-xl lg:text-2xl'>
          Врач-стоматолог-терапевт /<br className='flex' />
          врач-стоматолог детский
        </h2>
        <span className='font text-cyan-700 sm:text-[16px] text-[20px]'>
          Стаж {experience} лет
        </span>
      </div>
      <SocialLinksBar
        className={
          'flex justify-center items-center gap-2 w-full absolute bottom-0'
        }
      />
    </section>
  );
};

export default HeroSection;
