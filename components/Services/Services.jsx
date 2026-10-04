import ReferenceSectionHeading from '../ReferenceSectionHeading/ReferenceSectionHeading'
import sectionData from '../../data/about-section.json'

const serviceCards = [
  {
    title: 'Лечение кариеса',
    description: 'Бережное лечение зубов.',
  },
  {
    title: 'Эндодонтия',
    description: 'Лечение нервных каналов под микроскопом.',
  },
  {
    title: 'Повторное лечение каналов',
    description:
      'Повторное эндодонтическое лечение, извлечение отломков инструментов из корневого канала под микроскопом.',
  },
  {
    title: 'Профессиональная гигиена',
    description:
      'Удаление налета снижает риск развития кариеса и заболеваний десен.',
  },
]

const equipment = [
  {
    title: 'OPMI pico MORA',
    description: 'Дентальный микроскоп · Carl Zeiss, Германия',
  },
  {
    title: 'Doctor Smile',
    description: 'Диодный лазер · Lambda S.p.A., Италия',
  },
  {
    title: 'CEREC MC XL Premium Package',
    description: 'CAD/CAM система · Dentsply Sirona, Германия',
  },
]

function Services() {
  const specialization = sectionData.list.find(
    (item) => item.id === 'specialization',
  )

  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="bg-section-soft py-14 md:py-[72px] desktop:py-[90px]"
    >
      <div className="site-container">
        <ReferenceSectionHeading
          id="services-title"
          kicker="02 / ЛЕЧЕНИЕ"
          title="Забота в каждой детали."
          description="От профилактики и лечения кариеса до сложной работы под микроскопом."
          className="desktop:mb-10"
        />

        <div className="grid gap-4 md:grid-cols-2 desktop:grid-cols-4 desktop:gap-4">
          {serviceCards.map((service, index) => (
            <a
              key={service.title}
              href="#contact"
              aria-label={`Обсудить лечение: ${service.title}`}
              data-motion-reveal
              className="group grid min-h-[292px] min-w-0 cursor-pointer grid-rows-[auto_1fr_auto] rounded-2xl bg-white p-6 transition-[translate,background-color] duration-300 ease-out hover:-translate-y-3 hover:bg-section-card focus-visible:-translate-y-3 focus-visible:bg-section-card focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-700 sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-ui-sm text-secondary">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span aria-hidden="true" className="text-2xl leading-none text-primary">
                  ↗
                </span>
              </div>
              <div className="min-w-0 self-center py-5">
                <h3 className="font-display text-[1.5rem] leading-[1.4] tracking-[-0.02em] text-primary">
                  {service.title}
                </h3>
                <p className="mt-3 break-words text-sm-base leading-[1.65] text-secondary">
                  {service.description}
                </p>
              </div>
              <span className="flex items-center justify-between gap-3 text-ui-sm font-bold text-primary transition-colors group-hover:text-brand-muted group-focus-visible:text-brand-muted">
                Обсудить лечение
                <span aria-hidden="true">→</span>
              </span>
            </a>
          ))}
        </div>

        {specialization && (
          <div className="mt-10 border-t border-brand-100 pt-8 md:mt-11 md:pt-9">
            <p className="mb-6 inline-flex items-center gap-3 text-text3-md font-bold uppercase tracking-[0.16em] text-brand-700">
              <span aria-hidden="true" className="h-px w-6 bg-primary" />
              ТЕХНОЛОГИИ, КОТОРЫЕ ПОМОГАЮТ
            </p>
            <ul className="grid gap-5 md:grid-cols-3 md:gap-8">
              {equipment.map((item) => (
                <li key={item.title} className="min-w-0">
                  <p className="break-words text-ui-sm font-bold leading-snug text-primary">
                    {item.title}
                  </p>
                  <p className="mt-2 break-words text-ui-sm leading-relaxed text-secondary">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}

export default Services
