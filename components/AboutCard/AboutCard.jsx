import CardTitle from '../CardTitle/CardTitle';
import icon from '../../public/list-icon.png';
import Image from 'next/image';

const Card = ({ title, list, flex }) => {
  return (
    <article className='shadow-xl rounded-2xl py-3 px-3 w-full h-full'>
      <CardTitle title={title} />
      <div className='flex flex-col items-center'></div>
      <ul className='flex-col font-normal sm:space-y-2 md:space-y-3 lg:space-y-4 tracking-tight lg:tracking-normal'>
        {list.map((item, index) => (
          <li key={item.id} className={flex}>
            {item.year && (
              <div className='w-20 rounded-xl bg-cyan-700 text-center font py-2 px-2 text-white'>
                {item.year}
              </div>
            )}
            {title !== 'Образование' && (
              <Image
                width={50}
                height={50}
                className='w-[20px]'
                quality={100}
                src={icon}
                alt='Иконка зуба, зуб, стоматология'
              />
            )}
            <div className={flex}>
              <p className='pl-2 sm:text-[16px] text-[20px]'>
                {item.text}
                {item.span && title !== 'Образование' && (
                  <span className='text-cyan-700 font-mono text-sm md:text-md lg:text-lg pl-2'>
                    {item.span}
                  </span>
                )}
              </p>
              {title === 'Образование' && (
                <span className='text-cyan-700 font-mono text-sm md:text-md lg:text-lg pl-2'>
                  {item.span}
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Card;
