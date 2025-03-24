import Image from '../common/Image/Image';
import Link from 'next/link';
import ContactDetails from '../ContactDetails/ContactDetails';
import footerData from '../../data/common.json';

function Footer() {
    const year = new Date().getFullYear();
    const { image, owner, author, other, contactsDetails } = footerData.footer;

    return (
        <footer className="flex flex-col bg-cyan-700 text-white pb-sm md:pb-md lg:pb-0 overflow-hidden w-full relative">
            {image && <Image {...image} width={426} height={640} className="absolute bottom-0 right-0 md:w-[250px] sm:w-[250px]" />}
            <ContactDetails data={contactsDetails} />
            <div className="px-sm md:px-md lg:px-lg flex flex-wrap items-start justify-between z-10 text-text3-sm md:text-text3-md lg:text-text3-lg">
                {owner && (
                    <Link target="_blank" href={owner.href} className="text-text3-sm md:text-text3-md lg:text-text3-lg">
                        {owner.title}
                    </Link>
                )}

                <div className="flex flex-col items-center gap-1">
                    <Link {...other}>{other.title}</Link>
                    <p>&#169;{year}</p>
                </div>
                <p>{author}</p>
            </div>
        </footer>
    );
}
export default Footer;
