import Image from 'next/image';
import Work from '../Work/Work';
import Toothbrush from '../../public/no-background-toothbrush.webp';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='flex flex-col items-center z-10 bg-cyan-700 text-white relative overflow-hidden'>
      <Image
        src={Toothbrush}
        alt='Зубная щетка, изображение'
        width={500}
        height={500}
        quality={100}
        className='absolute right-0 w-auto h-auto xs:w-[150px] xs:bottom-0 sm:w-[150px] sm:bottom-0 md:w-[200px] md:bottom-0'
      />
      <Work />
      <a
        target='_blank'
        href='https://icons8.com'
        rel='noreferrer'
        className='text-xs'
      >
        Icons by icon8
      </a>
      <div className='flex items-center justify-center'>
        <a
          className='text-xs'
          href='https://github.com/greybirbroman'
          target='_blank'
          rel='noreferrer'
        >
          Некрашевич М.С.
        </a>
        <p className='text-xs mr-1'>&#169;{year}</p>
      </div>
    </footer>
  );
}
export default Footer;
