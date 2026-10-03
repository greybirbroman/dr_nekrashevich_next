'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import { SwiperSlide } from 'swiper/react'

import ReferenceSectionHeading from '../ReferenceSectionHeading/ReferenceSectionHeading'
import ModalControls from '../ModalWindow/ModalControls/ModalControls'
import ModalWindow from '../ModalWindow/ModalWindow'
import Slider from '../common/SimpleSlider/SimpleSlider'
import sliderStyles from '../common/SimpleSlider/SimpleSlider.module.css'
import sectionData from '../../data/galery-section.json'

const swiperOptions = {
  slidesPerView: 1.15,
  spaceBetween: 16,
  slidesOffsetAfter: 20,
  breakpoints: {
    701: { slidesOffsetAfter: 28 },
    768: { slidesPerView: 2, spaceBetween: 24, slidesOffsetAfter: 0 },
    1051: { slidesPerView: 3, spaceBetween: 24, slidesOffsetAfter: 0 },
  },
}

const Galery = ({ list }) => {
  const [selectedIndex, setSelectedIndex] = useState(null)
  const openerRef = useRef(null)
  const { id, emptyMessage } = sectionData
  const selectedImage = selectedIndex === null ? null : list[selectedIndex]

  const moveSelection = (direction) => {
    setSelectedIndex((currentIndex) => {
      if (currentIndex === null || list.length === 0) return currentIndex
      return (currentIndex + direction + list.length) % list.length
    })
  }

  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
    className="relative bg-light-bg py-14 md:py-[72px] desktop:py-[90px]"
  >
      <span id="works" aria-hidden="true" className="absolute top-0" />
      <div className="site-container">
        <ReferenceSectionHeading
          id={`${id}-title`}
          kicker="04 / ПРАКТИКА"
          title="Результат моей работы."
          description="Реальные фотографии лечения из моей практики."
        />
        {list.length > 0 ? (
          <Slider id={id} swiperOptions={swiperOptions} className={sliderStyles.MobileBleed}>
            {list.map((item, index) => (
              <SwiperSlide key={item._id} className="h-auto">
                <button
                  type="button"
                  aria-label={`Открыть работу: ${item.title}`}
                  onClick={(event) => {
                    openerRef.current = event.currentTarget
                    setSelectedIndex(index)
                  }}
                  data-motion-reveal
                  className="group block w-full min-w-0 text-left focus-visible:outline-brand-700"
                >
                  <span className="relative block aspect-[4/3] w-full overflow-hidden rounded-[24px] bg-brand-50">
                    <Image
                      src={item.image}
                      alt=""
                      aria-hidden="true"
                      width={1600}
                      height={1200}
                      sizes="(min-width: 1051px) 31vw, (min-width: 768px) 48vw, calc(100vw - 5rem)"
                      quality={85}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                    />
                  </span>
                  <span className="mt-4 flex min-w-0 items-center justify-between gap-3 px-1 text-left text-ui-md font-semibold text-primary">
                    <span className="min-w-0 break-words">{item.title}</span>
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-2xl leading-none transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    >
                      ↗
                    </span>
                  </span>
                </button>
              </SwiperSlide>
            ))}
          </Slider>
        ) : (
          <p className="rounded-3xl border border-brand-100/80 bg-light-bg px-5 py-7 text-center text-secondary shadow-soft sm:px-6 md:py-8">
            {emptyMessage}
          </p>
        )}
      </div>

      <ModalWindow
        isOpen={selectedIndex !== null && Boolean(selectedImage)}
        onClose={() => setSelectedIndex(null)}
        returnFocusRef={openerRef}
      >
        {selectedImage && (
          <div className="relative flex h-full w-full items-center justify-center">
            <ModalControls
              onLeftClick={() => moveSelection(-1)}
              onRightClick={() => moveSelection(1)}
            />
            <Image
              src={selectedImage.image}
              alt={selectedImage.title}
              width={selectedImage.imageWidth}
              height={selectedImage.imageHeight}
              unoptimized
              style={{
                width: 'auto',
                height: 'auto',
                maxWidth: 'calc(100vw - 2rem)',
                maxHeight: 'calc(100dvh - 2rem)',
              }}
              className="object-contain"
            />
            <p className="absolute inset-x-4 bottom-4 rounded-xl bg-primary/80 px-4 py-3 text-center text-ui-md font-semibold text-white backdrop-blur-sm md:inset-x-12 md:bottom-6">
              {selectedImage.title}
            </p>
          </div>
        )}
      </ModalWindow>
    </section>
  )
}

export default Galery
