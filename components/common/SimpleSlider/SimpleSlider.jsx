'use client'

import { Swiper } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import styles from './SimpleSlider.module.css'

const Slider = ({ id, children, swiperOptions }) => {
  const paginationClass = `pagination-${id}`

  return (
    <div className={`relative w-full ${styles.Container}`}>
      <Swiper
        modules={[Pagination]}
        pagination={{
          el: `.${paginationClass}`,
          clickable: true,
          bulletClass: styles.Bullet,
          bulletActiveClass: styles.BulletActive,
        }}
        {...swiperOptions}
      >
        {children}
      </Swiper>
      <div
        className={`${styles.Pagination} ${paginationClass}`}
        role="group"
        aria-label="Переключение слайдов"
      />
    </div>
  )
}

export default Slider
