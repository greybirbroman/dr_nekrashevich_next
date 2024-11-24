'use client';
import Link from 'next/link';
import { SocialLinksBar, MotionTextBar, YandexMap } from '../';
import PrimaryLink from '../PrimaryLink/PrimaryLink';
import MUILinksBar from '../MUILinksBar/MUILinksBar';
import { useYandexMap } from '@/utils/hooks/useYandexMap';
import { adressList, workHours, footerNavList } from '../../utils/constants';

function ContactDetails() {
    const { openMap, toggleMap } = useYandexMap();

    const textBarData = {
        title: 'Записаться',
        subtitle: 'По всем интересующим вопросам напишите мне сообщение в любой удобной для Вас социальной сети'
    };

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
                <MotionTextBar title={textBarData.title} subtitle={textBarData.subtitle}>
                    <SocialLinksBar className="flex justify-end" />
                </MotionTextBar>

                <div className="flex flex-wrap items-start justify-start gap-10 lg:gap-32 pt-sm md:pt-md lg:pt-lg">
                    <InfoBlock title="Контакты клиники:">
                        <ul className="flex flex-col tracking-normal gap-2 pt-8 sm:pt-4">
                            {adressList.map((listItem) => (
                                <li key={listItem.id} className="flex flex-col gap-2">
                                    <p className="text-cyan-300 text-ui-sm md:text-ui-md lg:text-ui-lg">{listItem.title}</p>
                                    {listItem.text.includes('@') ? (
                                        <Link
                                            className="hover:text-cyan-500 duration-300 ease-in-out text-text3-sm md:text-text3-md lg:text-text3-lg"
                                            target="_blank"
                                            href="https://denteria.ru/staff/nekrashevich-marina-sergeevna/">
                                            {listItem.text}
                                        </Link>
                                    ) : (
                                        <p className="text-white text-text3-sm md:text-text3-md lg:text-text3-lg">{listItem.text}</p>
                                    )}
                                </li>
                            ))}
                        </ul>
                        <MUILinksBar onClick={toggleMap} />
                    </InfoBlock>
                    <InfoBlock title="Часы приема:">
                        <ul className="flex flex-col tracking-normal gap-2 pt-8 pb-8 sm:pb-4 sm:pt-4">
                            {workHours.map((item) => (
                                <li key={item.id} className="flex items-end gap-2">
                                    <p className="text-cyan-300 text-ui-sm md:text-ui-md lg:text-ui-lg">{item.day}</p>
                                    <time className="text-text3-sm md:text-text3-md lg:text-text3-lg">{item.hours}</time>
                                </li>
                            ))}
                        </ul>
                    </InfoBlock>
                    <InfoBlock title="Навигация">
                        <ul className="flex flex-col tracking-normal gap-1 lg:gap-2 pt-8 pb-8 sm:pb-4 sm:pt-4">
                            {footerNavList.map((item) => (
                                <li key={item.id}>
                                    <PrimaryLink
                                        variant={'white'}
                                        href={item.link}
                                        title={item.title}
                                        className={`text-ui-sm md:text-ui-md lg:text-ui-lg`}
                                    />
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
