import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import { navTabs } from '@/utils/constants';

function Header() {
  return (
    <header
      id='home'
      className='absolute inset-x-0 top-0 z-30 flex h-20 w-full items-center justify-between px-gutter-sm md:h-24 md:px-gutter-md lg:px-gutter-lg'
    >
      <Logo />
      <Navigation list={navTabs} />
    </header>
  );
}
export default Header;
