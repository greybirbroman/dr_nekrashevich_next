import { motion as m} from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { socialLinksList } from '../../utils/constants';
import { socialLinksVariants } from '@/utils/motion';

function SocialLinksBar() {
  return (
    <m.ul 
    variants={socialLinksVariants}
    initial='hidden'
    whileInView='show'
    className='flex w-full items-center justify-center sm:absolute sm:bottom-0 sm:bg-slate-100/50'>
      {socialLinksList.map((link) => (
          <li key={link.id} className='flex items-center rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-500 duration-300 hover:cursor-pointer p-2'>
            <Link
              href={link.linkHref}
              target='_blank'
              aria-label={link.label}
            >
              <Image
                src={link.icon}
                alt={link.title}
                className=''
                width={60}
                height={60}
                quality={100}
              />
            </Link>
          </li>
      ))}
    </m.ul>
  );
}
export default SocialLinksBar;
