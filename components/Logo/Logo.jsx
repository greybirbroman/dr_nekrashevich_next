import Link from 'next/link';
import Image from '../common/Image/Image';
import LogoImage from '/public/logo.svg';

const Logo = () => {
    return (
        <Link href="/" className="relative">
            <Image
                src={LogoImage}
                alt="Некрашевич Марина Сергеевна - лого"
                title="Некрашевич М.С."
                width={150}
                height={150}
                className="w-[100px] md:w-[150px]"
            />
        </Link>
    );
};

export default Logo;
