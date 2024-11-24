import CardTitle from '../CardTitle/CardTitle';
import icon from '../../public/list-icon.png';
import Image from 'next/image';

const Card = ({ title, list, flex }) => {
    return (
        <article className="shadow-xl rounded-2xl p-[24px] w-full h-full">
            <CardTitle title={title} />
            <div className="flex flex-col items-center"></div>
            <ul className="flex flex-col font-normal gap-2 tracking-tight lg:tracking-normal">
                {list.map((item, index) => (
                    <li key={item.id ? item.id : index} className={`${flex} gap-2 md:gap-3 lg:gap-4`}>
                        {item.year && <div className="w-20 rounded-xl bg-cyan-700 text-center font py-2 px-2 text-white">{item.year}</div>}
                        {title === 'Образование' && (
                            <span className="text-cyan-700 text-ui-sm md:text-ui-md lg:text-ui-lg">{item.span}</span>
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
                                {item.text ? item.text : item}
                                {item.span && title !== 'Образование' && (
                                    <span className="text-cyan-700 text-sm md:text-md lg:text-lg pl-2">{item.span}</span>
                                )}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </article>
    );
};

export default Card;
