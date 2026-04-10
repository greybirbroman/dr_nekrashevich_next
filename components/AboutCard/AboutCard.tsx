import Image from 'next/image'

import icon from '../../public/list-icon.png'
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
  flex?: string
}

const AboutCard = ({ title, list, flex = 'flex' }: AboutCardProps) => {
  return (
    <article className="rounded-2xl p-[24px] w-full h-full shadow-[#0000000D] shadow-xl">
      <CardTitle title={title} />
      <div className="flex flex-col items-center"></div>
      <ul className="flex flex-col font-normal gap-2 tracking-tight lg:tracking-normal">
        {list.map((item, index) => (
          <li
            key={typeof item === 'string' ? index : item.id ?? index}
            className={`${flex} gap-2 md:gap-3 lg:gap-4`}
          >
            {typeof item !== 'string' && item.year && (
              <div className="w-20 rounded-xl bg-cyan-700 text-center font py-2 px-2 text-white">
                {item.year}
              </div>
            )}
            {typeof item !== 'string' && title === 'Образование' && item.span && (
              <span className="text-cyan-700 text-ui-sm md:text-ui-md lg:text-ui-lg">
                {item.span}
              </span>
            )}
            {title !== 'Образование' && (
              <Image
                width={50}
                height={50}
                className="w-[20px]"
                quality={100}
                src={icon}
                alt="Иконка зуба, зуб, стоматология"
              />
            )}
            <div className={flex}>
              <p className="text-sm-base md:text-md lg:text-lg">
                {typeof item === 'string' ? item : item.text}
                {typeof item !== 'string' && item.span && title !== 'Образование' && (
                  <span className="text-cyan-700 text-sm md:text-md lg:text-lg pl-2">
                    {item.span}
                  </span>
                )}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default AboutCard
