import Image from 'next/image';
import dynamic from 'next/dynamic';
const SocialLinksBar = dynamic(() => import('@/components/SocialLinksBar/SocialLinksBar'));
import HeroImage from '../../public/hero-image-2.webp';
import BasePlaceholder from '../../public/placeholder.jpg';

const HeroSection = () => {
    const experience = new Date().getFullYear() - 2013;

    const heroData = {
        title: `Некрашевич <br/> Марина Сергеевна`,
        subtitle: ` врач-стоматолог<br/>врач-стоматолог детский`,
        experience: `Стаж ${experience} лет`
    };

    return (
        <section className="flex flex-col items-center justify-center w-full h-[100svh] relative cursor-default pb-sm md:pb-md lg:pb-lg">
            <Image
                src={HeroImage}
                width={600}
                height={900}
                placeholder='blur'
                priority
                blurDataURL={BasePlaceholder.blurDataURL}
                alt="Фотография, врач стоматолог, Некрашевич Марина Сергеевна"
                className="-z-10 object-cover lg:object-contain absolute w-full h-full"
            />
            <div className="h-full w-full flex flex-col items-center justify-end lg:items-start lg:justify-center">
                <h1
                    className="text-h1-sm md:text-h1-md lg:text-h1-lg font-bold lg:text-left text-center bg-clip-text text-transparent bg-gradient-to-l from-cyan-900 to-cyan-500 mb-2"
                    dangerouslySetInnerHTML={{ __html: heroData.title }}
                />
                <h2
                    className="text-secondary text-sm-base md:text-sm-md lg:text-sm-lg sm:text-center md:text-center mb-2"
                    dangerouslySetInnerHTML={{ __html: heroData.subtitle }}
                />

                <span className="font text-cyan-700 text-yu-base md:text-ui-md lg:text-ui-lg">{heroData.experience}</span>
            </div>
                <SocialLinksBar className={'flex justify-center items-center self-center gap-2 max-w-3xl'} />
        </section>
    );
};

export default HeroSection;
