'use client';
import React, { useEffect, useState, useRef } from 'react';
import { Swiper } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './SimpleSlider.module.css';

const Slider = ({ id, children, swiperOptions }) => {
    const [swiper, setSwiper] = useState(null);
    const paginationRef = useRef(null);

    useEffect(() => {
        if (swiper) {
            window.addEventListener('resize', () => {
                swiper.update();
            });
        }
        return () => {
            if (swiper) {
                window.removeEventListener('resize', swiper.update);
            }
        };
    }, [swiper]);

    return (
        <div className={`relative w-full h-full ${styles.Container}`}>
            <Swiper
                onSwiper={setSwiper}
              
                modules={[Pagination]}
                pagination={{
                    el: `.${styles.Pagination}`,
                    clickable: true,
                    bulletClass: styles.Bullet,
                    bulletActiveClass: styles.BulletActive
                }}
                {...swiperOptions}>
                {children}
            </Swiper>
            <div ref={paginationRef} className={`${styles.Pagination} pagination-${id}`}></div>
        </div>
    );
};

export default Slider;
