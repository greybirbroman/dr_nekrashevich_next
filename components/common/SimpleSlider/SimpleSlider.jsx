'use client'

import { Swiper } from 'swiper/react'
import { A11y, Keyboard, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import styles from './SimpleSlider.module.css'

const Slider = ({ id, children, swiperOptions, className = '' }) => {
  const paginationClass = `pagination-${id}`

  return (
    <div className={`relative w-full ${styles.Container} ${className}`}>
      <div className={styles.BleedViewport}>
        <Swiper
          modules={[Pagination, A11y, Keyboard]}
          keyboard={{ enabled: true, onlyInViewport: true }}
          a11y={{
            enabled: true,
            paginationBulletMessage: 'Перейти к слайду {{index}}',
          }}
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
      </div>
      <div
        className={`${styles.Pagination} ${paginationClass}`}
        role="group"
        aria-label="Переключение слайдов"
      />
    </div>
  )
}

export default Slider
