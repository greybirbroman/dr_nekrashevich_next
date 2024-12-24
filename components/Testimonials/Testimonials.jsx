'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SwiperSlide } from 'swiper/react';
import { SectionTitle } from '..';
import Slider from '../common/SimpleSlider/SimpleSlider';
import useIsMobileResolution from '@/utils/hooks/useIsMobileResolition';
import sectionData from '../../data/testimonials-section.json';
import VisuallyHidden from '../common/VisuallyHidden/VisuallyHidden';

const Testimonials = ({ list }) => {
    const { id, title, yandexLink, yandexImage, starImage, quoteImage } = sectionData;
    const isSliderResolution = useIsMobileResolution(1279);
    const isMobileResolution = useIsMobileResolution(992);

    const stars = Array(5).fill(null);

    const swiperConfig = {
        slidesPerView: 1,
        spaceBetween: 12,
        autoHeight: true
    };

    const renderContent = (item) => {
        return (
            <li className="flex flex-col justify-between rounded-xl bg-white lg:max-w-[490px] min-h-[275px] lg:min-h-[300px] h-full">
                <blockquote
                    dangerouslySetInnerHTML={{ __html: item.description }}
                    className="p-[20px] md:p-[24px] text-sm-base md:text-sm-md lg:text-sm-lg flex-grow first-letter:text-cyan-700 first-letter:font-bold first-letter:float-left first-letter:text-[3em] first-letter:leading-[0.8] first-letter:mr-[0.1em]"
                />
                <div className="flex justify-between items-center bg-cyan-700 text-white h-[100px] p-4 rounded-bl-xl">
                    <div className="flex bg-white rounded-full hover:scale-110 duration-300">
                        <Link href={yandexLink.href} target="_blank">
                            <Image
                                {...yandexImage}
                                width={isMobileResolution ? 40 : 60}
                                height={isMobileResolution ? 40 : 60}
                                className="max-w-[100%] h-auto hover:scale-110 transition-transform duration-300 ease-in-out"
                            />
                        </Link>
                        <VisuallyHidden>{yandexLink.VisuallyHidden}</VisuallyHidden>
                    </div>
                    <div className="flex flex-col items-center gap-1 ">
                        <cite className="italic text-ui-md lg:text-ui-lg">{item.author}</cite>
                        <time className="text-ui-sm">{item.published.replace(/-/g, '.')}</time>
                        <div className="flex">
                            {stars.map((_, index) => (
                                <Image
                                    key={index}
                                    {...starImage}
                                    width={isMobileResolution ? 15 : 30}
                                    height={isMobileResolution ? 15 : 30}
                                    className="max-w-[100%] h-auto"
                                />
                            ))}
                        </div>
                    </div>
                    <Image
                        {...quoteImage}
                        width={isMobileResolution ? 40 : 60}
                        height={isMobileResolution ? 40 : 60}
                        className="max-w-[100%] h-auto"
                    />
                </div>
            </li>
        );
    };

    return (
        <section id={id} className="p-sm md:p-md lg:py-lg lg:px-0 cursor-default bg-light-bg rounded-[14px] relative w-full">
            <SectionTitle title={title} />
            {isSliderResolution ? (
                <Slider id={id} swiperOptions={swiperConfig}>
                    {list?.map((item) => (
                        <SwiperSlide key={item._id}>
                            {renderContent(item)}
                        </SwiperSlide>
                    ))}
                </Slider>
            ) : (
                <ul className="flex flex-wrap justify-center gap-10">
                    {list?.map((item) => item && <React.Fragment key={item._id}>{renderContent(item)}</React.Fragment>)}
                </ul>
            )}
        </section>
    );
};

export default Testimonials;
