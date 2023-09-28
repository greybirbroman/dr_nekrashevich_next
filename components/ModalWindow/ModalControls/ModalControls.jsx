import Image from 'next/image';

const ModalControls = ({ onRightClick, onLeftClick }) => {
  return (
    <>
      <button
        type='button'
        className='absolute top-[50%] transform translate-y-[-50%] right-2 cursor-pointer hover:scale-110 duration-75 z-50 bg-black/70 p-2'
        onClick={onRightClick}
      >
        <Image
          src='/modal_control_right.png'
          alt='Указатель - вправо'
          width={40}
          height={40}
        />
      </button>

      <button
        type='button'
        className='absolute top-[50%] transform translate-y-[-50%] left-2 cursor-pointer hover:scale-110 duration-75 z-50 bg-black/70 p-2'
        onClick={onLeftClick}
      >
        <Image
          src='/modal_control_left.png'
          alt='Указатель - влево'
          width={40}
          height={40}
        />
      </button>
    </>
  );
};

export default ModalControls;
