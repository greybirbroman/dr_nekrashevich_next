import { motion } from 'framer-motion';

function CardTitle({ title }) {
  return (
    <motion.h3 
    initial={{
      y: -50,
      opacity: 0
    }}
    whileInView={{
      y: 0,
      opacity: 1,
    }}
    transition={{
      duration: 1,
      type: 'spring',
      delay: 1,
    }}
    className='education text-xl shadow-lg lg:text-2xl font-medium uppercase mb-10 lg:mb-20 bg-slate-100 rounded-xl w-fit py-3 px-3 bg-opacity-80'>
      {title}
    </motion.h3>
  );
}
export default CardTitle;
