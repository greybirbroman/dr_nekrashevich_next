'use client';
import { SectionTitle, AboutCard, MotionListItem } from '..';

import {
  specializationList,
  educationlist,
  instrumentslist,
} from '@/utils/constants';
import { sectionListVariants } from '@/utils/motion';

function About() {
  const sectionDataList = [
    {
      id: 'education',
      title: 'Образование',
      list: educationlist,
      flex: 'flex flex-col gap-3',
    },
    {
      id: 'specialization',
      title: 'Специализация',
      list: specializationList,
      flex: 'flex items-baseline',
    },
    {
      id: 'instruments',
      title: 'Оборудование',
      list: instrumentslist,
      flex: 'flex items-baseline',
    },
  ];

  return (
    <section id='about' className='p-4 md:p-8 lg:p-12 cursor-default'>
      <SectionTitle title='обо мне' />
      <ul className='grid grid-cols-1 lg:grid-cols-3 gap-5 text-gray-700 text-md md:text-lg lg:text-x'>
        {sectionDataList.map((item, index) => (
          <MotionListItem
            key={item.id}
            variants={sectionListVariants}
            custom={index}
          >
            <AboutCard title={item.title} list={item.list} flex={item.flex} />
          </MotionListItem>
        ))}
      </ul>
    </section>
  );
}
export default About;
