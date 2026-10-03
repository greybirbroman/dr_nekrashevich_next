import Image from 'next/image'

import SocialLinksBar from '@/components/SocialLinksBar/SocialLinksBar'

const HeroSection = () => (
  <section
    aria-labelledby="hero-title"
    className="relative isolate bg-light-bg"
  >
    <div className="site-container grid gap-8 pb-12 pt-24 md:gap-10 md:pt-[110px] desktop:min-h-[760px] desktop:grid-cols-[0.95fr_1.05fr] desktop:items-center desktop:gap-[4.25rem] desktop:pb-16 desktop:pt-[132px]">
      <div data-motion="hero-copy" className="order-1 min-w-0">
        <p className="mb-5 inline-flex items-center gap-3 text-text3-md font-bold uppercase tracking-[0.16em] text-brand-700 md:text-ui-sm">
          {/* <span aria-hidden="true" className="h-px w-8 bg-primary" /> */}
          Врач-стоматолог · Санкт-Петербург
        </p>
        <h1
          id="hero-title"
          className="max-w-[13ch] font-display text-[clamp(2.75rem,4.5vw,4.25rem)] leading-[1.2] tracking-[-0.045em] text-primary"
        >
          <span className="block">Бережно к зубам.</span>
          <span className="mt-0.5 block text-brand-muted">Внимательно</span>
          <span className="block text-brand-muted">к вам.</span>
        </h1>
        <p className="mt-6 text-ui-md font-bold leading-snug text-primary md:mt-7 md:text-lg-base">
          Некрашевич Марина Сергеевна
        </p>
        <p className="mt-4 max-w-[39ch] text-sm-base leading-[1.65] text-secondary md:text-md-base">
          Стоматолог-терапевт для взрослых и детей. Бережное лечение и понятный
          план заботы о здоровье зубов.
        </p>
        <SocialLinksBar className="mt-6 flex flex-wrap items-center gap-3" />
        <p className="mt-5 inline-flex items-center gap-2.5 text-ui-sm text-secondary">
          <span aria-hidden="true" className="font-display text-xl text-brand-muted">✦</span>
          Практикую с 2013 года
        </p>
      </div>

      <div
        data-motion="hero-image"
        className="relative order-2 min-h-[410px] overflow-hidden rounded-[120px_16px_16px_16px] bg-brand-100 desktop:min-h-[565px] desktop:rounded-[180px_16px_16px_16px]"
      >
        <Image
          src="/hero-image-2.webp"
          alt="Марина Некрашевич, врач-стоматолог"
          fill
          priority
          sizes="(min-width: 1051px) 50vw, calc(100vw - 40px)"
          className="object-cover object-[center_36%] grayscale"
        />
        <span className="absolute right-4 top-4 rounded-full bg-white/90 px-4 py-2.5 text-ui-sm text-primary backdrop-blur-sm sm:right-6 sm:top-6 sm:px-5">
          Приём взрослых и детей
        </span>
        <div className="absolute inset-x-0 bottom-0 flex min-h-[96px] items-center justify-between gap-4 bg-brand-100 px-6 py-5 text-primary sm:px-8">
          <p className="font-sans text-lg-base font-medium leading-snug md:text-lg-md">
            Ваш врач.<br />На вашей стороне.
          </p>
          <span aria-hidden="true" className="shrink-0 font-sans text-5xl leading-none">✳</span>
        </div>
      </div>
    </div>
  </section>
)

export default HeroSection
