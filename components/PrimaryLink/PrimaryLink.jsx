import preventHashLink from '../../utils/functions';
import { motion as m } from 'framer-motion';

const PrimaryLink = ({ title, href, className, hoverColor }) => {
  const handleClick = (event) => {
    event.preventDefault();
    preventHashLink(href);
  };

  //const combinedClassName = customClass ? customClass : styles.link;

  return (
    <m.a
      whileHover={{
        scale: 1.1,
        color: hoverColor,
      }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 20,
        duration: 1,
      }}
      whileTap={{ scale: 0.9 }}
      href={href}
      className={className}
      onClick={handleClick}
    >
      {title}
    </m.a>
  );
};

export default PrimaryLink;
