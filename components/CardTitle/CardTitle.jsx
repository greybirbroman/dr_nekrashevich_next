import { motion } from 'framer-motion';

function CardTitle({ title }) {
  return (
    <h4 
    // initial={{
    //   y: -50,
    //   opacity: 0
    // }}
    // whileInView={{
    //   y: 0,
    //   opacity: 1,
    // }}
    // transition={{
    //   duration: 1,
    //   type: 'spring',
    //   delay: 1,
    // }}
    className='education text-xl shadow-lg lg:text-2xl font-[400] text-gray-700 uppercase mb-10 lg:mb-20 bg-slate-100 rounded-xl w-fit py-3 px-3 even:'>
      {title}
    </h4>
  );
}
export default CardTitle;
