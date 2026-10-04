import ReferenceSectionHeading from '../ReferenceSectionHeading/ReferenceSectionHeading'
import sectionData from '../../data/about-section.json'

function About() {
  const education = sectionData.list.find((item) => item.id === 'education')

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="bg-light-bg py-14 md:py-[72px] desktop:py-[90px]"
    >
      <div className="site-container">
        <ReferenceSectionHeading
          id="about-title"
          kicker="01 / ЗНАКОМСТВО"
          title="Доверие начинается со знакомства."
          className="desktop:mb-14"
        />

        <div className="grid gap-10 desktop:grid-cols-[0.9fr_1.1fr] desktop:gap-[105px]">
          <div data-motion-reveal className="max-w-[34rem]">
            <p className="text-lg-base leading-[1.5] text-primary md:text-lg-md">
              Я — Марина Сергеевна,
              <br className="hidden sm:block" /> ваш стоматолог-терапевт.
            </p>
            <p className="mt-5 max-w-[48ch] text-sm-base leading-[1.75] text-secondary md:mt-6 md:text-md-base">
              Лечу взрослых и подростков. Помогаю разобраться в состоянии зубов и
              понять план лечения — спокойно и последовательно.
            </p>
            <a
              href="#services"
              className="mt-7 inline-flex min-h-9 items-center gap-4 border-b border-primary pb-1 text-ui-sm font-bold text-primary transition-colors hover:text-brand-700"
            >
              Как я могу помочь
              <span aria-hidden="true" className="text-lg leading-none">↗</span>
            </a>
          </div>

          {education && (
            <article data-motion-reveal className="min-w-0">
              <h3 className="mb-6 font-display text-h3-md leading-snug text-primary md:mb-7 md:text-h3-lg">
                {education.title}
              </h3>
              <ol className="flex flex-col border-t border-brand-100">
                {education.list.map((item) => (
                  <li
                    key={item.id}
                    className="grid min-w-0 grid-cols-[56px_minmax(0,1fr)] gap-4 border-b border-brand-100 py-5 last:border-b-0 md:grid-cols-[64px_minmax(0,1fr)] md:gap-5 md:py-6"
                  >
                    <span className="mt-0.5 inline-flex h-9 w-14 items-center justify-center rounded-full bg-brand-100 text-ui-sm font-bold text-primary md:w-16">
                      {item.year}
                    </span>
                    <div className="min-w-0">
                      <p className="break-words text-sm-base leading-[1.55] text-primary md:text-md-base">
                        {item.text}
                      </p>
                      <p className="mt-1.5 text-ui-sm text-brand-muted">
                        {item.span}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </article>
          )}
        </div>
      </div>
    </section>
  )
}

export default About
