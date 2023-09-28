import React from 'react';

const ModalOverlay = ({ onClose, style }) => {
  return <div className='fixed inset-0 bg-black/50' onClick={onClose} style={style}></div>;
};

export default React.memo(ModalOverlay);
