'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { SwiperSlide } from 'swiper/react';
import { SectionTitle, ModalWindow, ModalControls } from '../';
import sectionData from '../../data/galery-section.json';
import Slider from '../common/SimpleSlider/SimpleSlider';

const Galery = ({ list }) => {
    const [isPreview, setIsPreview] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState({});
    const { id, title, emptyMessage } = sectionData;

    useEffect(() => {
        setSelectedImage(list[selectedImageIndex]);
    }, [selectedImageIndex, list]);

    const handleLeftClick = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? list.length - 1 : prevIndex - 1));
    };

    const handleRightClick = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex === list.length - 1 ? 0 : prevIndex + 1));
    };

    const previewImage = (id, index) => {
        setIsPreview(true);
        const selected = list.find((item) => item._id === id);
        setSelectedImage(selected);
        setSelectedImageIndex(index);
    };

    const swiperConfig = {
        observer: true,
        observeParents: true,
        breakpoints: {
            375: {
                slidesPerView: 1.1,
                spaceBetween: 12
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 16
            },
            1280: {
                slidesPerView: 3,
                spaceBetween: 16
            }
        }
    };

    if (!list.length) return emptyMessage ? <p dangerouslySetInnerHTML={{ __html: emptyMessage }} /> : null;
    return (
        <section id={id} className="p-sm md:p-md lg:py-lg lg:px-0 relative">
            <SectionTitle title={title} />

            <Slider id={id} swiperOptions={swiperConfig}>
                {list?.map((item, index) => (
                    <SwiperSlide key={index} className="text-white text-[14px] min-w-[300px] min-h-[300px]">
                        <Image
                            id={item._id}
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="300px"
                            quality={95}
                            onClick={() => previewImage(item._id, index)}
                            className="object-cover max-w-[100%] h-auto rounded-[14px]"
                        />
                    </SwiperSlide>
                ))}
            </Slider>

            <ModalWindow isOpen={isPreview} onClose={() => setIsPreview(false)}>
                {selectedImage && (
                    <>
                        <ModalControls onLeftClick={handleLeftClick} onRightClick={handleRightClick} />
                        <Image
                            src={selectedImage.image}
                            alt={selectedImage.title}
                            width={1000}
                            height={1000}
                            quality={100}
                            className="object-contain"
                        />
                        <div className="bg-gradient-to-b from-transparent to-black/70 w-full h-[150px] absolute bottom-0 flex flex-col items-center justify-end pb-2 cursor-default">
                            <span className="flex items-end justify-center text-white">{selectedImage.title}</span>
                        </div>
                    </>
                )}
            </ModalWindow>
        </section>
    );
};

export default Galery;
