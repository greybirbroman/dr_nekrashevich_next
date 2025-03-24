import React, { memo } from 'react';
import { default as NextImage } from 'next/image';
import BasePlaceholder from '../../../public/placeholder.jpg';

const defaultOption = {
    src: '/public/placeholder.jpg',
    alt: '',
    quality: 90,
    placeholder: 'blur',
    blurDataURL: BasePlaceholder.blurDataURL
};

const Image = (props) => {
    const options = {
        ...defaultOption,
        ...props,
        src: props.src ?? defaultOption.src
    };

    return <NextImage {...options} className={props.className}/>;
};

export default memo(Image);
