import Image from 'next/image';
import Link from 'next/link';
import ContactDetails from '../ContactDetails/ContactDetails';
import Toothbrush from '../../public/no-background-toothbrush.webp';

function Footer() {
  const year = new Date().getFullYear();

  const footerLinks = [
    {
      id: 'icons8',
      link: 'https://icons8.com',
      title: 'Icons by icon8',
    },
    {
      id: 'site_owner',
      link: '/',
      title: 'Некрашевич М.С.',
    },
  ];

  return (
    <footer className='flex flex-col items-center bg-cyan-700 text-white relative overflow-hidden'>
      <Image
        src={Toothbrush}
        alt='Зубная щетка, изображение'
        width={426}
        height={640}
        quality={80}
        className='absolute bottom-0 right-0 md:w-[250px] sm:w-[250px]'
      />
      <ContactDetails />
      <ul className='flex flex-col items-center z-10'>
        {footerLinks.map((item) => (
          <li className=''>
            <Link target='_blank' href={item.link} className='text-[16px] lg:text-[18px]'>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <p className='text-[16px] lg:text-[18px]'>&#169;{year}</p>
    </footer>
  );
}
export default Footer;
