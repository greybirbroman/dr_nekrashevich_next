'use client';
import { useState } from 'react';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const FilterSelectors = ({ list }) => {
  const [isActive, setIsActive] = useState('');
 
  const handleSelect = (selector) => {
    if (selector === isActive) {
      setIsActive('');
    } else {
      setIsActive(selector);
    }
  };

  return (
    <ul className='flex flex-wrap gap-4 sm:gap-2 justify-center'>
      {list.map((selector, index) => (
        <li key={index}>
          <PrimaryButton
            id={selector}
            title={selector}
            isActive={isActive === selector}
            onClick={() => handleSelect(selector)}
          />
        </li>
      ))}
    </ul>
  );
};

export default FilterSelectors;
