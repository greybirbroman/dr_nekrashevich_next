'use client';
import Link from 'next/link';
import { SocialLinksBar, MotionTextBar, YandexMap, PrimaryButton } from '../';
import PrimaryLink from '../PrimaryLink/PrimaryLink';
import { useYandexMap } from '@/utils/hooks/useYandexMap';

function ContactDetails({ data }) {
    const { openMap, toggleMap } = useYandexMap();
    const { motionTextBar, contactsList, workHoursList, navList, buttons } = data;
    const InfoBlock = ({ children, title }) => {
        return (
            <div className=" z-10">
                <h6 className="font-semibold uppercase text-ui-sm md:text-ui-md lg:text-ui-lg">{title}</h6>
                {children}
            </div>
        );
    };

    return (
        <section id="work" className="cursor-default bg-cyan-700 text-white w-full">
            <div className="p-sm md:p-md lg:p-lg">
                <MotionTextBar {...motionTextBar}>
                    <SocialLinksBar className="flex justify-end" />
                </MotionTextBar>

                <div className="flex flex-wrap items-start justify-start gap-10 lg:gap-32 pt-sm md:pt-md lg:pt-lg">
                    <InfoBlock title="Контакты клиники:">
                        <ul className="flex flex-col tracking-normal gap-2 pt-8 sm:pt-4">
                            {contactsList.map((item, i) => (
                                <li key={i} className="flex flex-col gap-2">
                                    <p
                                        className="text-cyan-300 text-ui-sm md:text-ui-md lg:text-ui-lg"
                                        dangerouslySetInnerHTML={{ __html: item.title ?? '' }}
                                    />
                                    <PrimaryLink {...item} title={item.text} />
                                </li>
                            ))}
                        </ul>
                        <ul className='flex gap-4'>

                        {buttons.map((button, i) => (
                            <PrimaryButton key={i} {...button} />
                        ))}
                        </ul>
                    </InfoBlock>
                    <InfoBlock title="Часы приема:">
                        <ul className="flex flex-col tracking-normal gap-2 pt-8 pb-8 sm:pb-4 sm:pt-4">
                            {workHoursList.map((item, i) => (
                                <li key={i} className="flex items-end gap-2">
                                    <p className="text-cyan-300 text-ui-sm md:text-ui-md lg:text-ui-lg">{item.day}</p>
                                    <time className="text-text3-sm md:text-text3-md lg:text-text3-lg">{item.hours}</time>
                                </li>
                            ))}
                        </ul>
                    </InfoBlock>
                    <InfoBlock title="Навигация">
                        <ul className="flex flex-col tracking-normal gap-1 lg:gap-2 pt-8 pb-8 sm:pb-4 sm:pt-4">
                            {navList.map((item, i) => (
                                <li key={i}>
                                    <PrimaryLink {...item} variant={'white'} className={`text-ui-sm md:text-ui-md lg:text-ui-lg`} />
                                </li>
                            ))}
                        </ul>
                    </InfoBlock>
                </div>
                {openMap && <YandexMap />}
            </div>
        </section>
    );
}
export default ContactDetails;
