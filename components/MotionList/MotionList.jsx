'use client';
import { motion as m } from 'framer-motion';

const MotionList = ({ children, variants, custom, className }) => {
    return (
        <m.ul custom={custom} variants={variants} className={className} initial="hidden" whileInView="show" viewport={{ once: true }}>
            {children}
        </m.ul>
    );
};

export default MotionList;
