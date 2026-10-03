import MapDisclosure from '../MapDisclosure/MapDisclosure'
import ContactIntro from '../ContactIntro/ContactIntro'
import PrimaryButton from '../PrimaryButton/PrimaryButton'
import PrimaryLink from '../PrimaryLink/PrimaryLink'
import SocialLinksBar from '../SocialLinksBar/SocialLinksBar'

const InfoBlock = ({ title, children }) => (
  <section>
    <h3 className="text-ui-md font-bold text-white">{title}</h3>
    {children}
  </section>
)

function ContactDetails({ data }) {
  const { motionTextBar, contactsList, workHoursList, navList, buttons } = data
  const contactButtons = buttons.filter((button) => button.href)

  return (
    <section id="work" className="bg-brand-900 text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-7 md:px-8 md:py-16 lg:px-10 lg:py-20">
        <div className="flex flex-col gap-6 border-b border-white/15 pb-8 md:flex-row md:items-end md:justify-between md:pb-10">
          <ContactIntro {...motionTextBar} />
          <SocialLinksBar className="flex items-center gap-2.5" />
        </div>

        <div className="grid grid-cols-1 gap-9 pt-8 sm:grid-cols-2 md:gap-12 md:pt-10 lg:grid-cols-[1.3fr_1fr_0.8fr]">
          <InfoBlock title="Контакты клиники">
            <ul className="mt-5 flex flex-col gap-4">
              {contactsList.map((item) => (
                <li key={`${item.title}-${item.text ?? 'empty'}`}>
                  <p className="text-text3-md font-semibold uppercase tracking-[0.08em] text-brand-300">
                    {item.title}
                  </p>
                  {item.text && (
                    <div className="mt-1 text-sm-base text-white/90 md:text-md-base">
                      {item.href ? (
                        <PrimaryLink
                          href={item.href}
                          title={item.text}
                          variant="white"
                          className="underline decoration-white/30 underline-offset-4 hover:decoration-white"
                        />
                      ) : (
                        item.text
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-3">
              {contactButtons.map((button) => (
                <PrimaryButton key={button.area} {...button} />
              ))}
              {buttons.some((button) => button.isMap) && <MapDisclosure />}
            </div>
          </InfoBlock>

          <InfoBlock title="Часы приёма">
            <ul className="mt-5 flex flex-col gap-3">
              {workHoursList.map((item) => (
                <li
                  key={item.day}
                  className="flex flex-wrap gap-x-2 text-sm-base md:text-md-base"
                >
                  <span className="text-brand-300">{item.day}</span>
                  <span>{item.hours}</span>
                </li>
              ))}
            </ul>
          </InfoBlock>

          <InfoBlock title="Навигация по сайту">
            <ul className="mt-5 flex flex-col items-start gap-3">
              {navList.map((item) => (
                <li key={item.href}>
                  <PrimaryLink
                    {...item}
                    variant="white"
                    className="text-sm-base md:text-md-base"
                  />
                </li>
              ))}
            </ul>
          </InfoBlock>
        </div>
      </div>
    </section>
  )
}

export default ContactDetails
