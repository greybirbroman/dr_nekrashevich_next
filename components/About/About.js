import Education from './Education/Education';
import Specialization from './Specialization/Specialization';
import Instruments from './Instruments/Instruments';
import { motion as m } from 'framer-motion'
import { sectionListVariants } from '@/utils/motion';

function About() {

  const aboutArr = [<Education/>, <Specialization />, <Instruments />]

  return (
    <section
      id='about'
      className='p-4 md:p-8 lg:p-12'
    >
      <ul className='grid grid-cols-1 lg:grid-cols-3 gap-5 text-gray-700 text-md md:text-lg lg:text-xl'>
        {aboutArr.map((item, index) => (
          <m.li
          key={index}
          variants={sectionListVariants}
          initial='hidden'
          whileInView='visible'
          custom={index}
          >
            {item}
          </m.li>
        ))}
      </ul>
    </section>
  );
}
export default About;
