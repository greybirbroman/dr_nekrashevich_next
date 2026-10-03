import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import { navTabs } from '@/utils/constants';

function Header() {
  return (
    <header
      id='home'
      className='site-container absolute inset-x-0 top-0 z-30 flex h-20 items-center justify-between gap-4 md:h-[110px]'
    >
      <Logo />
      <a
        href='#contact'
        aria-label='Записаться на приём'
        className='group order-1 desktop:order-3 inline-flex min-h-11 shrink-0 items-center gap-4 border-b border-primary px-0.5 text-sm-base font-bold text-primary transition-colors hover:text-brand-700 focus-visible:outline-brand-700 sm:gap-6'
      >
        <span>Записаться</span>
        <span aria-hidden='true' className='text-2xl leading-none'>↗</span>
      </a>
      <Navigation list={navTabs} />
    </header>
  );
}
export default Header;
