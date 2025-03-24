'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import VisuallyHidden from '../common/VisuallyHidden/VisuallyHidden';

const PrimaryLink = ({ title, href, size = 'sm', variant, className }) => {
    const router = useRouter();

    const handleClick = (e) => {
        // Проверяем, является ли ссылка якорной (начинается с # или содержит #)
        if (href.startsWith('#') || (href.includes('#') && href.split('#')[0] === window.location.pathname)) {
            e.preventDefault();
            const targetId = href.split('#')[1];
            const elem = document.getElementById(targetId);
            if (elem) {
                elem.scrollIntoView({ behavior: 'smooth' });
                router.push(href, { scroll: false });
            }
        }
    };
 
    const variants = {
        cyan: 'text-cyan-700 hover:text-orange-500',
        white: 'text-white hover:text-orange-500'
    };

    const sizes = {
        sm: 'text-sm-base md:text-md-base lg:text-ui-lg',
        md: 'text-sm-md md:text-md-md lg:text-md-lg'
    };

    const classList = `${sizes[size]} ${variants[variant]} ${className} transition-colors duration-300`;

    return href ? (
        <>
            <Link href={href} onClick={handleClick} className={classList} dangerouslySetInnerHTML={{ __html: title }} />
            <VisuallyHidden>{title}</VisuallyHidden>
        </>
    ) : (
        <>
            <p className={classList} dangerouslySetInnerHTML={{ __html: title }} />
            <VisuallyHidden>{title}</VisuallyHidden>
        </>
    );
};

export default PrimaryLink;
