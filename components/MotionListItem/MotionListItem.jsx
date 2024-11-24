'use client';
import { motion as m } from 'framer-motion';

const MotionListItem = ({ children, variants, id, custom, className }) => {
    return (
        <m.li
            key={id}
            custom={custom}
            variants={variants}
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}>
            {children}
        </m.li>
    );
};

export default MotionListItem;
