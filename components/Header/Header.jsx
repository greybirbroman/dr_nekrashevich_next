import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import { navTabs } from '@/utils/constants';

function Header() {
  return (
    <header
      id='home'
      className='w-full flex justify-between items-center px-sm md:px-md lg:px-lg absolute top-0 z-10'
    >
      <Logo />
      <Navigation list={navTabs} />
    </header>
  );
}
export default Header;
