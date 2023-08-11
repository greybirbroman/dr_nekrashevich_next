import { motion } from 'framer-motion';

function HeaderLink({ text, link }) {
  return (
    <li>
      <motion.a
        className='inline-flex py-3 px-5 sm:px-3 bg-cyan-700 rounded-full text-white'
        whileHover={{
          scale: 1.1,
          color: 'rgb(6, 182, 212)',
          backgroundColor: 'rgb(255, 255, 255)',
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 20,
          duration: 1,
        }}
        whileTap={{ scale: 0.9 }}
        href={link}
        rel='noreferrer'
      >
        {text}
      </motion.a>
    </li>
  );
}
export default HeaderLink;
