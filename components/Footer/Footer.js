function Footer() {
  const year = new Date().getFullYear();


  return (
    <footer className={`flex flex-col items-center z-10`}>
      <a target="_blank" href="https://icons8.com" rel="noreferrer" className="text-gray-700 text-xs">Icons by icon8</a>
      <div className='flex items-center justify-center'>
        <a
          className='text-gray-700 text-xs'
          href='https://github.com/greybirbroman'
          target='_blank'
          rel='noreferrer'
        >
          Некрашевич М.С.
        </a>
        <p className='text-gray-700 text-xs mr-1'>&#169;{year}</p>
      </div>
    </footer>
  );
}
export default Footer;
