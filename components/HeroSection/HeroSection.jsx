// import Image from 'next/image';
import Image from '../common/Image/Image';
import dynamic from 'next/dynamic';
const SocialLinksBar = dynamic(() => import('@/components/SocialLinksBar/SocialLinksBar'));
import HeroImage from '/public/hero-image-2.webp';

const HeroSection = () => {
    const experience = new Date().getFullYear() - 2013;

    const heroData = {
        title: `Некрашевич <br/> Марина Сергеевна`,
        subtitle: ` врач-стоматолог<br/>врач-стоматолог детский`,
        experience: `Стаж ${experience} лет`
    };

    return (
        <section className="flex flex-col items-center justify-center w-full h-screen relative cursor-default">
            <div>
                <Image
                    src={HeroImage}
                    fill
                    priority
                    alt="Фотография, врач стоматолог, Некрашевич Марина Сергеевна"
                    className="-z-10 object-cover lg:object-contain absolute w-full h-screen"
                />
            </div>
            <div className="h-full w-full flex flex-col items-center justify-end lg:items-start lg:justify-center mb-4 md:mb-6 lg:mb-0">
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
            <SocialLinksBar className={'flex justify-center items-center self-center gap-2 max-w-3xl mb-4 md:mb-6'} />
        </section>
    );
};

export default HeroSection;
