import Link from 'next/link';
import Image from '../common/Image/Image';

const PrimaryButton = ({ title, icon, href, externalLink, area, onClick, id, isActive, customClass }) => {
    const innerContent = () => (
        <>
            {icon && <Image src={icon} width={40} height={40} />}
            {title && title}
        </>
    );

    const variants = {
      default: 'text-cyan-700 hover:text-orange-500',
      white: 'text-white hover:text-orange-500'
  };

    return href ? (
        <>
            <Link href={href} taget={externalLink ? '_blank' : undefined}>
                {innerContent()}
            </Link>
        </>
    ) : (
        <button
            type="button"
            className={`w-fit py-3 px-8 lg:text-[20px] rounded-xl duration-300 ${customClass} ${
                !isActive ? 'text-cyan-700 bg-white border-2 border-cyan-700' : 'bg-cyan-700 text-white border-2 border-transparent'
            }`}
            onClick={onClick}
            role="button"
            id={id}
            area-aria-label={area}>
            {innerContent()}
        </button>
    );
};

export default PrimaryButton;
