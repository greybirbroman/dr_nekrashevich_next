import Image from 'next/image';
import Link from 'next/link';
import ContactDetails from '../ContactDetails/ContactDetails';
import Toothbrush from '../../public/no-background-toothbrush.webp';

function Footer() {
    const year = new Date().getFullYear();

    const footerLinks = [
        {
            id: 'site_owner',
            link: '/',
            title: 'Некрашевич М.С.'
        }
    ];

    return (
        <footer className="flex flex-col bg-cyan-700 text-white pb-sm md:pb-md lg:pb-lg lg:px-0 overflow-hidden w-full relative">
            <Image
                src={Toothbrush}
                alt="Зубная щетка, изображение"
                width={426}
                height={640}
                quality={80}
                placeholder='blur'
                className="absolute bottom-0 right-0 md:w-[250px] sm:w-[250px]"
            />
            <ContactDetails />
            <div className="px-sm md:px-md lg:px-lg flex flex-wrap items-start justify-between z-10 text-text3-sm md:text-text3-md lg:text-text3-lg">
                <ul className="flex items-center gap-2">
                    {footerLinks.map((item) => (
                        <li className="">
                            <Link target="_blank" href={item.link} className="text-text3-sm md:text-text3-md lg:text-text3-lg">
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className='flex flex-col items-center gap-1'>
                    <Link target="_blank" href={'https://icons8.com'}>
                        {'Icons by icon8'}
                    </Link>
                    <p>&#169;{year}</p>
                </div>
                <p>made by Roman Fedorov</p>
            </div>
        </footer>
    );
}
export default Footer;
