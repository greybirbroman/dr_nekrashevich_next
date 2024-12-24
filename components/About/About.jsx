'use client';
import { SectionTitle, AboutCard, MotionListItem } from '..';
import { sectionListVariants } from '@/utils/motion';
import sectionData from '../../data/about-section.json';

function About() {
    const { id, title, list } = sectionData;

    return (
        <section id={id} className="p-sm md:p-md lg:py-lg lg:px-0 cursor-default ">
            <SectionTitle title={title} />
            <ul className="grid grid-cols-1 lg:grid-cols-3 gap-5 text-md md:text-lg">
                {list?.map((item, index) => (
                    <MotionListItem key={item.id} variants={sectionListVariants} custom={index}>
                        <AboutCard title={item.title} list={item.list} flex={item.flex} />
                    </MotionListItem>
                ))}
            </ul>
        </section>
    );
}
export default About;
