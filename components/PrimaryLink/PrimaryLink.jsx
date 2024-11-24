import preventHashLink from '../../utils/functions';
import VisuallyHidden from '../common/VisuallyHidden/VisuallyHidden';

const PrimaryLink = ({ title, href, size = 'sm', variant, className }) => {
    const handleClick = (event) => {
        event.preventDefault();
        preventHashLink(href);
    };

    const variants = {
        cyan: 'text-cyan-700 hover:text-orange-500',
        white: 'text-white hover:text-orange-500'
    };

    const sizes = {
        sm: 'text-sm-base md:text-md-base lg:text-ui-lg',
        md: 'text-sm-md md:text-md-md lg:text-md-lg'
    };

    return (
        <>
            <a href={href} className={`${sizes[size]} ${variants[variant]} ${className} transition-colors duration-300`} onClick={handleClick}>
                {title}
            </a>
            <VisuallyHidden>{title}</VisuallyHidden>
        </>
    );
};

export default PrimaryLink;
