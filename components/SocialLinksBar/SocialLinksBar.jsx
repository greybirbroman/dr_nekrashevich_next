import React from 'react';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import Image from '../common/Image/Image';
import { socialLinksList } from '../../utils/constants';
import { socialLinksVariants } from '@/utils/motion';
import VisuallyHidden from '../common/VisuallyHidden/VisuallyHidden';

const MotionList = dynamic(() => import('../MotionList/MotionList'));

function SocialLinksBar({ className }) {
    return (
        <MotionList variants={socialLinksVariants} className={`${className} gap-2`}>
            {socialLinksList.map((link) => (
                <li key={link.id} className="hover:scale-110 transition-transform duration-300 ease-in-out">
                    <Link href={link.linkHref} target="_blank" aria-label={link.label}>
                        <Image src={link.icon} alt={link.title} width={60} height={60} className='w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px]'/>
                        <VisuallyHidden>{link.title}</VisuallyHidden>
                    </Link>
                </li>
            ))}
        </MotionList>
    );
}
export default SocialLinksBar;
