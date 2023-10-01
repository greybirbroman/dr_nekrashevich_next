import preventHashLink from '../../utils/functions';

const PrimaryLink = ({ title, href, type }) => {
  const handleClick = (event) => {
    event.preventDefault();
    preventHashLink(href);
  };

  const DynamicClassRender = (type) => {
    if (type === 'light') {
      return 'from-cyan-300 to-white';
    } else {
      return 'from-cyan-700 to-cyan-500';
    }
  };

  return (
    <a
      href={href}
      className={`font-semibold bg-clip-text text-transparent bg-gradient-to-r ${DynamicClassRender(
        type
      )} hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 duration-150 lg:text-[20px]`}
      onClick={handleClick}
    >
      {title}
    </a>
  );
};

export default PrimaryLink;
