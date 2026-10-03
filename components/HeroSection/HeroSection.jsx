import Image from 'next/image'

import SocialLinksBar from '@/components/SocialLinksBar/SocialLinksBar'

const HeroSection = () => (
  <section
    aria-labelledby="hero-title"
    className="relative isolate min-h-[100svh] overflow-hidden bg-primary tablet:bg-brand-50"
  >
    <div className="relative isolate mx-auto grid min-h-[100svh] max-w-site overflow-hidden tablet:min-h-[min(900px,100svh)] tablet:grid-cols-[1fr_0.9fr] tablet:items-center">
      <div
        data-motion="hero-image"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden tablet:relative tablet:col-start-2 tablet:row-start-1 tablet:h-[min(70svh,680px)] tablet:min-h-[420px] tablet:rounded-2xl tablet:bg-surface tablet:shadow-soft lg:rounded-2xl lg:min-h-[560px]"
      >
        <Image
          src="/hero-image-2.webp"
          alt="Марина Некрашевич, врач-стоматолог"
          fill
          priority
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover object-[center_36%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/5 tablet:from-primary/10 tablet:via-transparent tablet:to-transparent"
        />
        <div className="absolute left-5 top-24 rounded-full border border-white/70 bg-white/85 px-4 py-2 text-ui-sm font-semibold text-primary backdrop-blur-sm tablet:bottom-6 tablet:left-6 tablet:top-auto">
          Приём взрослых и детей
        </div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full flex-col justify-end px-gutter-sm pb-8 pt-24 sm:px-gutter-md md:px-gutter-md md:pb-10 tablet:col-start-1 tablet:row-start-1 tablet:min-h-[min(900px,100svh)] tablet:justify-center tablet:pt-24 tablet:pb-10 lg:px-gutter-lg">
        <div data-motion="hero-copy" className="tablet:max-w-2xl">
          <p className="mb-4 inline-flex items-center gap-2 text-ui-sm font-bold uppercase tracking-[0.14em] text-brand-100 tablet:text-brand-700 md:text-ui-md">
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
            Врач-стоматолог · Санкт-Петербург
          </p>
          <h1
            id="hero-title"
            className="max-w-[20ch] font-display text-h1-sm leading-[0.98] tracking-[-0.045em] text-white md:text-h1-md tablet:text-primary lg:text-h1-lg"
          >
            Некрашевич
            <span className="mt-2 block text-brand-300 tablet:text-brand-700">
              Марина Сергеевна
            </span>
          </h1>
          <p className="mt-6 max-w-lg text-md-base text-white/90 sm:text-md-md tablet:text-secondary lg:mt-6 lg:text-md-lg">
            Стоматолог-терапевт для взрослых и детей. Бережное лечение и
            понятный план заботы о здоровье зубов.
          </p>
          <p className="mt-6 text-ui-md font-semibold text-white tablet:text-primary">
            Практикует с 2013 года
          </p>
          <SocialLinksBar className="mt-8 flex items-center gap-3 lg:mt-12" />
        </div>
      </div>
    </div>
  </section>
)

export default HeroSection
