'use client'

import { SwiperSlide } from 'swiper/react'

import SectionTitle from '../SectionTitle/SectionTitle'
import Slider from '../common/SimpleSlider/SimpleSlider'
import sliderStyles from '../common/SimpleSlider/SimpleSlider.module.css'
import sectionData from '../../data/testimonials-section.json'

const swiperOptions = {
  slidesPerView: 1.15,
  spaceBetween: 16,
  breakpoints: {
    768: { slidesPerView: 2, spaceBetween: 24 },
    1280: { slidesPerView: 2, spaceBetween: 24 },
  },
}

const formatDate = (date) => date.replace(/-/g, '.')

const TestimonialCard = ({ item }) => (
  <article className="flex h-full min-h-[300px] flex-col justify-between rounded-2xl border border-brand-100 bg-surface p-4 md:min-h-[320px] md:p-8">
    <blockquote className="whitespace-pre-line text-sm-base leading-[1.7] text-secondary md:text-md-base">
      {item.description}
    </blockquote>
    <footer className="mt-8 flex flex-wrap items-end gap-x-4 gap-y-3 border-t border-brand-100 pt-6">
      <div className="min-w-0 flex-1">
        <cite className="block truncate text-ui-md font-bold not-italic text-primary">
          {item.author}
        </cite>
        <time
          dateTime={item.published}
          className="mt-1 block text-text3-md text-tertiary"
        >
          {formatDate(item.published)}
        </time>
      </div>
      <span
        aria-label="Оценка 5 из 5"
        className="text-lg-lg tracking-[0.12em] text-accent"
      >
        <span aria-hidden="true">★★★★★</span>
      </span>
    </footer>
  </article>
)

const Testimonials = ({ list }) => {
  const { id, title } = sectionData

  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="bg-light-bg px-gutter-sm py-12 sm:px-gutter-md md:px-gutter-md md:py-16 lg:px-gutter-lg lg:py-24"
    >
      <div className="mx-auto max-w-site">
        <SectionTitle id={`${id}-title`} title={title} />
        {list.length > 0 ? (
          <Slider
            id={id}
            swiperOptions={swiperOptions}
            className={`${sliderStyles.EqualHeightCards} ${sliderStyles.MobileBleed}`}
          >
            {list.map((item) => (
              <SwiperSlide key={item._id} className="h-auto">
                <TestimonialCard item={item} />
              </SwiperSlide>
            ))}
          </Slider>
        ) : (
          <p className="rounded-2xl border border-brand-100 bg-surface p-6 text-center text-secondary">
            Отзывы появятся здесь позже.
          </p>
        )}
      </div>
    </section>
  )
}

export default Testimonials
