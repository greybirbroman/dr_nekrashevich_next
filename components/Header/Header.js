'use client'
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <header id='home'
      className='w-full flex justify-between items-center p-4 md:p-8 lg:p-12 absolute top-0 z-10'
    >
      <Logo />
      <Navigation />
      
    </header>
  );
}
export default Header;
