import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import { navTabs } from '@/utils/constants';

function Header() {
  return (
    <header
      id='home'
      className='absolute inset-x-0 top-4 z-30 mx-auto flex h-20 w-full max-w-site items-center justify-between px-gutter-sm md:top-4 md:h-24 md:px-gutter-md lg:px-gutter-lg'
    >
      <Logo />
      <Navigation list={navTabs} />
    </header>
  );
}
export default Header;
