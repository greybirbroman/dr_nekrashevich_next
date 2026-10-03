'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import { SwiperSlide } from 'swiper/react'

import SectionTitle from '../SectionTitle/SectionTitle'
import ModalControls from '../ModalWindow/ModalControls/ModalControls'
import ModalWindow from '../ModalWindow/ModalWindow'
import Slider from '../common/SimpleSlider/SimpleSlider'
import sectionData from '../../data/galery-section.json'

const swiperOptions = {
  slidesPerView: 1.05,
  spaceBetween: 14,
  breakpoints: {
    768: { slidesPerView: 2, spaceBetween: 18 },
    1280: { slidesPerView: 3, spaceBetween: 22 },
  },
}

const Galery = ({ list }) => {
  const [selectedIndex, setSelectedIndex] = useState(null)
  const openerRef = useRef(null)
  const { id, title, emptyMessage } = sectionData
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
      className="mx-auto max-w-7xl px-5 py-14 sm:px-7 md:px-8 md:py-20 lg:px-10 lg:py-24"
    >
      <SectionTitle id={`${id}-title`} title={title} />
      {list.length > 0 ? (
        <Slider id={id} swiperOptions={swiperOptions}>
          {list.map((item, index) => (
            <SwiperSlide key={item._id} className="h-auto">
              <button
                type="button"
                aria-label={`Открыть работу: ${item.title}`}
                onClick={(event) => {
                  openerRef.current = event.currentTarget
                  setSelectedIndex(index)
                }}
                className="group relative block aspect-[4/3] w-full overflow-hidden rounded-[1.5rem] bg-brand-100 text-left shadow-soft focus-visible:outline-brand-700"
              >
                <Image
                  src={item.image}
                  alt=""
                  aria-hidden="true"
                  width={1600}
                  height={1200}
                  sizes="(min-width: 1280px) 31vw, (min-width: 768px) 48vw, 92vw"
                  quality={85}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/85 to-transparent px-5 pb-5 pt-14 text-ui-md font-semibold text-white"
                >
                  {item.title}
                </span>
              </button>
            </SwiperSlide>
          ))}
        </Slider>
      ) : (
        <p className="rounded-2xl border border-brand-100 bg-surface p-6 text-center text-secondary">
          {emptyMessage}
        </p>
      )}

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
              width={1600}
              height={1200}
              sizes="(min-width: 1024px) 80vw, 92vw"
              quality={90}
              className="max-h-[82vh] w-auto max-w-[92vw] rounded-xl object-contain"
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
