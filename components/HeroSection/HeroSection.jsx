import Image from 'next/image'
import Link from 'next/link'

import SocialLinksBar from '@/components/SocialLinksBar/SocialLinksBar'

const HeroSection = () => {
  return (
    <section
      aria-labelledby="hero-title"
      className="overflow-hidden bg-brand-50"
    >
      <div className="mx-auto grid min-h-[85svh] max-w-7xl grid-cols-1 items-center gap-7 px-5 pb-8 pt-24 sm:px-7 md:min-h-[88svh] md:gap-8 md:px-8 md:pt-24 tablet:grid-cols-[1fr_0.9fr] tablet:gap-10 tablet:pt-20 lg:min-h-[min(900px,100svh)] lg:gap-12 lg:px-10">
        <div className="order-2 pb-5 md:py-12 tablet:order-1">
          <p className="mb-4 inline-flex items-center gap-2 text-ui-sm font-bold uppercase tracking-[0.14em] text-brand-700 md:text-ui-md">
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
            Врач-стоматолог · Санкт-Петербург
          </p>
          <h1
            id="hero-title"
            className="max-w-[20ch] font-display text-h1-sm leading-[0.98] tracking-[-0.045em] text-primary md:text-h1-md lg:text-h1-lg"
          >
            Некрашевич
            <span className="mt-2 block text-brand-700">
              Марина Сергеевна
            </span>
          </h1>
          <p className="mt-5 max-w-lg text-md-base text-secondary sm:text-md-md lg:mt-6 lg:text-md-lg">
            Стоматолог-терапевт для взрослых и детей. Бережное лечение и
            понятный план заботы о здоровье зубов.
          </p>
          <p className="mt-5 text-ui-md font-semibold text-primary">
            Практикует с 2013 года
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-5 lg:mt-9">
            <Link
              href="#work"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand-700 px-6 py-3 text-ui-md font-bold text-white shadow-soft transition-colors hover:bg-brand-800 focus-visible:outline-brand-700"
            >
              Связаться с клиникой
              <span aria-hidden="true" className="ml-3 text-lg">↗</span>
            </Link>
            <SocialLinksBar className="flex items-center gap-2.5" />
          </div>
        </div>

        <div className="relative order-1 h-[38svh] min-h-[270px] overflow-hidden rounded-[1.75rem] bg-surface shadow-soft sm:h-[44svh] md:h-[min(70svh,680px)] md:min-h-[420px] md:rounded-[2rem] tablet:order-2 lg:min-h-[560px] lg:rounded-[2.5rem]">
          <Image
            src="/hero-image-2.webp"
            alt="Марина Некрашевич, врач-стоматолог"
            fill
            priority
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover object-[center_36%]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"
          />
          <div className="absolute bottom-4 left-4 rounded-full border border-white/70 bg-white/80 px-4 py-2 text-ui-sm font-semibold text-primary backdrop-blur-sm md:bottom-6 md:left-6">
            Приём взрослых и детей
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
