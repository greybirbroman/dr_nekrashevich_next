import MapDisclosure from '../MapDisclosure/MapDisclosure'
import PrimaryButton from '../PrimaryButton/PrimaryButton'
import SocialLinksBar from '../SocialLinksBar/SocialLinksBar'

const FieldLabel = ({ children }) => (
  <p className="mb-2 text-text3-md font-bold uppercase tracking-[0.12em] text-brand-100/75">
    {children}
  </p>
)

function ContactDetails({ data }) {
  const { contactsList, workHoursList, buttons } = data
  const address = contactsList.find((item) => item.title === 'Адрес')
  const email = contactsList.find((item) => item.title === 'E-mail')
  const phone = contactsList.find((item) => item.title === 'Телефон')
  const clinicHours = contactsList.find((item) => item.title === 'Режим работы')
  const adminLinks = buttons.filter((button) => button.href)
  const hasMap = buttons.some((button) => button.isMap)
  const displayPhone = phone?.text?.replace(
    /\+7\s*\(812\)\s*209-?16-?07/,
    '+7 (812) 209-16-07',
  )

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative bg-brand-900 text-white">
      <span id="work" aria-hidden="true" className="absolute top-0" />
      <div className="site-container py-14 md:py-[72px] desktop:py-[90px]">
        <div className="grid gap-7 border-b border-white/15 pb-9 md:gap-8 md:pb-10 desktop:grid-cols-[minmax(0,1fr)_300px] desktop:items-center desktop:gap-12">
          <div className="min-w-0">
            <p className="mb-4 inline-flex items-center gap-3 text-text3-md font-bold uppercase tracking-[0.16em] text-brand-100">
              <span aria-hidden="true" className="h-px w-6 bg-brand-100" />
              05 / ЗАПИСЬ НА ПРИЁМ
            </p>
            <h2
              id="contact-title"
              className="max-w-[23ch] font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.35] tracking-[-0.035em] text-white"
            >
              <span className="block">Первый шаг к здоровой</span>
              <span className="block">
                улыбке — <em className="not-italic text-brand-100">просто написать.</em>
              </span>
            </h2>
            <p className="mt-5 max-w-[55ch] text-sm-base leading-[1.7] text-white/75 md:text-md-base">
              По всем интересующим вопросам свяжитесь с клиникой. Администратор
              поможет подобрать время приёма.
            </p>
          </div>
          {phone?.href && (
            <a
              href={phone.href}
              className="inline-flex min-h-[60px] w-fit max-w-full items-center justify-between gap-5 whitespace-nowrap rounded-xl bg-brand-100 px-6 py-4 text-ui-sm font-bold text-primary transition-colors hover:bg-white focus-visible:outline-white desktop:w-[300px]"
            >
              Позвонить в клинику
              <span aria-hidden="true" className="text-2xl leading-none">↗</span>
            </a>
          )}
        </div>

        <div className="grid gap-9 pt-8 md:grid-cols-2 md:gap-8 desktop:grid-cols-3 desktop:gap-12 desktop:pt-10">
          <section aria-labelledby="clinic-location-title" className="min-w-0">
            <h3 id="clinic-location-title" className="mb-6 text-ui-md font-bold text-white">
              Где я принимаю
            </h3>
            {address && (
              <div>
                <FieldLabel>Адрес клиники</FieldLabel>
                <address className="max-w-[30ch] break-words text-sm-base not-italic leading-[1.65] text-white md:text-md-base">
                  {address.text}
                </address>
                <div className="mt-3">
                  {hasMap && <MapDisclosure />}
                </div>
              </div>
            )}
            {clinicHours && (
              <div className="mt-6">
                <FieldLabel>Режим работы клиники</FieldLabel>
                <p className="text-sm-base text-white md:text-md-base">{clinicHours.text}</p>
              </div>
            )}
            {adminLinks.length > 0 && (
              <div className="mt-6">
                <FieldLabel>Связаться с администратором</FieldLabel>
                <ul className="flex items-center gap-3">
                  {adminLinks.map((button) => (
                    <li key={button.area}>
                      <PrimaryButton
                        {...button}
                        customClass="!h-14 !w-14 !border-0 !bg-white hover:!bg-brand-100"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>

          <section aria-labelledby="contact-channel-title" className="min-w-0">
            <h3 id="contact-channel-title" className="mb-6 text-ui-md font-bold text-white">
              На связи
            </h3>
            {phone && (
              <div>
                <FieldLabel>Телефон</FieldLabel>
                <a href={phone.href} className="break-words text-lg-base text-white hover:text-brand-100 md:text-lg-md">
                  {displayPhone}
                </a>
              </div>
            )}
            {email && (
              <div className="mt-5">
                <FieldLabel>E-mail</FieldLabel>
                <a href={email.href} className="break-words text-lg-base text-white hover:text-brand-100 md:text-lg-md">
                  {email.text}
                </a>
              </div>
            )}
            <p className="mb-3 mt-6 text-sm-base text-white/65">Связаться со мной напрямую</p>
            <SocialLinksBar variant="inverse" className="flex flex-wrap items-center gap-3" />
          </section>

          <section aria-labelledby="doctor-hours-title" className="min-w-0">
            <h3 id="doctor-hours-title" className="mb-6 text-ui-md font-bold text-white">
              Часы моего приёма
            </h3>
            <ul className="flex flex-col gap-3">
              {workHoursList.map((item) => (
                <li key={item.day} className="grid grid-cols-[minmax(0,1fr)_auto] gap-3 text-sm-base md:text-md-base">
                  <span className="min-w-0 break-words text-white/65">
                    {item.day.trim().replace(/:\s*$/, '')}
                  </span>
                  <span className="whitespace-nowrap text-white">
                    {item.hours.replace(/\s*-\s*/, '–')}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </section>
  )
}

export default ContactDetails
