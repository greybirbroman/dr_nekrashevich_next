'use client'

import { SwiperSlide } from 'swiper/react'

import ReferenceSectionHeading from '../ReferenceSectionHeading/ReferenceSectionHeading'
import Slider from '../common/SimpleSlider/SimpleSlider'
import sliderStyles from '../common/SimpleSlider/SimpleSlider.module.css'
import sectionData from '../../data/testimonials-section.json'

const swiperOptions = {
  speed: 500,
  slidesPerView: 1.08,
  spaceBetween: 16,
  slidesOffsetAfter: 20,
  breakpoints: {
    701: { slidesOffsetAfter: 28 },
    768: { slidesPerView: 2, spaceBetween: 22, slidesOffsetAfter: 0 },
    1280: { slidesPerView: 2, spaceBetween: 22, slidesOffsetAfter: 0 },
  },
}

const formatDate = (date) => (date ? date.replace(/-/g, '.') : '')

const TestimonialCard = ({ item }) => (
  <article className="relative flex h-full min-h-[320px] min-w-0 flex-col rounded-2xl bg-white p-5 sm:p-6 md:min-h-[296px] md:p-7 desktop:p-8">
    <div className="flex items-center justify-between gap-4">
      <span aria-label="Оценка 5 из 5" className="text-2xl tracking-[0.08em] text-brand-muted">
        <span aria-hidden="true">★★★★★</span>
      </span>
      <span className="shrink-0 text-text3-md text-secondary">Яндекс Карты</span>
    </div>
    <blockquote className="mt-6 min-w-0 break-words pb-5 text-sm-base leading-[1.8] text-secondary md:mt-7 md:text-md-base">
      {item.description}
    </blockquote>
    <footer className="mt-auto flex items-center gap-3 border-t border-brand-100 pt-5 md:pt-6">
      <span
        aria-hidden="true"
        className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-light-bg font-display text-xl text-primary"
      >
        {item.author?.trim()?.charAt(0) || 'П'}
      </span>
      <div className="min-w-0 flex-1">
        <cite className="block break-words text-ui-sm font-bold not-italic text-primary">
          {item.author}
        </cite>
        {item.published && (
          <time dateTime={item.published} className="mt-1 block text-text3-md text-secondary">
            {formatDate(item.published)}
          </time>
        )}
      </div>
      <span aria-hidden="true" className="shrink-0 font-display text-4xl leading-none text-brand-100">
        ”
      </span>
    </footer>
  </article>
)

const Testimonials = ({ list }) => {
  const { id } = sectionData

  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="relative bg-light-bg py-14 md:py-[72px] desktop:py-[90px]"
    >
      <span id="reviews" aria-hidden="true" className="absolute top-0" />
      <div className="site-container">
        <ReferenceSectionHeading
          id={`${id}-title`}
          kicker="03 / ОТЗЫВЫ"
          title="Когда становится спокойно."
          description="Слова пациентов — о том, что действительно важно."
        />
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
          <p className="rounded-2xl border border-brand-100 bg-white px-5 py-7 text-center text-secondary sm:px-6 md:py-8">
            Отзывы появятся здесь позже.
          </p>
        )}
      </div>
    </section>
  )
}

export default Testimonials
