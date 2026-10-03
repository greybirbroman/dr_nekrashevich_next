import CardTitle from '../CardTitle/CardTitle'

type AboutCardListItem =
  | string
  | {
      id?: string | number
      year?: string
      text?: string
      span?: string
    }

interface AboutCardProps {
  title: string
  list: AboutCardListItem[]
}

const AboutCard = ({ title, list }: AboutCardProps) => (
  <article className="h-full rounded-[1.75rem] border border-brand-100 bg-surface p-5 shadow-soft md:p-6 lg:p-7">
    <CardTitle title={title} />
    <ul className="flex flex-col gap-4 text-sm-base text-secondary md:text-md-base">
      {list.map((item, index) => (
        <li
          key={typeof item === 'string' ? index : item.id ?? index}
          className="flex items-start gap-3"
        >
          {typeof item === 'string' ? (
            <span
              aria-hidden="true"
              className="mt-[0.65em] h-2 w-2 shrink-0 rounded-full bg-accent"
            />
          ) : (
            item.year && (
              <span className="shrink-0 rounded-full bg-brand-100 px-3 py-1.5 text-ui-sm font-bold text-brand-800">
                {item.year}
              </span>
            )
          )}
          <div className="min-w-0">
            <p className="leading-relaxed text-primary">
              {typeof item === 'string' ? item : item.text}
            </p>
            {typeof item !== 'string' && item.span && (
              <p className="mt-1 text-text3-md font-semibold text-brand-700">
                {item.span}
              </p>
            )}
          </div>
        </li>
      ))}
    </ul>
  </article>
)

export default AboutCard
