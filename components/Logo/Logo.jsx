import Link from 'next/link';
import Image from 'next/image';
import LogoImage from '../../public/logo.svg';

const Logo = () => {
  return (
    <Link href='/' className='relative'>
      <Image
        src={LogoImage}
        alt='Некрашевич Марина Сергеевна - лого'
        title='Некрашевич М.С.'
        width={150}
        height={150}
        quality={100}
      />
    </Link>
  );
};

export default Logo;
