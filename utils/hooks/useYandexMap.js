'use client'

import { useState } from 'react';

export const useYandexMap = () => {
    const [openMap, setOpenMap] = useState(false);

    function toggleMap() {
      setOpenMap((prev) => !prev);
    }
    return {
        openMap,
        toggleMap
    }
}