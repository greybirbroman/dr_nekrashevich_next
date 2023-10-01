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
    <footer className='flex flex-col items-center z-0 bg-cyan-700 text-white relative overflow-hidden'>
      <Image
        src={Toothbrush}
        alt='Зубная щетка, изображение'
        width={426}
        height={640}
        quality={80}
        className='absolute right-0 bottom-0 w-auto h-auto xs:w-[150px] xs:bottom-0 sm:w-[150px] sm:bottom-0 md:w-[200px] md:bottom-0'
      />
      <ContactDetails />
      <ul className='flex flex-col items-center'>
        {footerLinks.map((item) => (
          <li className=''>
            <Link target='_blank' href={item.link} className='text-xs'>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <p className='text-xs'>&#169;{year}</p>
    </footer>
  );
}
export default Footer;
