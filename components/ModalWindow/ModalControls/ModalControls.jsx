import Image from 'next/image';

const ModalControls = ({ onRightClick, onLeftClick }) => {
  return (
    <>
      <button
        type="button"
        aria-label="Следующая работа"
        className='absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-primary/80 p-2 text-white transition-transform hover:scale-105 focus-visible:outline-white md:right-4'
        onClick={onRightClick}
      >
        <Image
          src='/modal_control_right.png'
          alt=''
          aria-hidden="true"
          width={40}
          height={40}
          className="h-8 w-8 md:h-10 md:w-10"
        />
      </button>

      <button
        type="button"
        aria-label="Предыдущая работа"
        className='absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-primary/80 p-2 text-white transition-transform hover:scale-105 focus-visible:outline-white md:left-4'
        onClick={onLeftClick}
      >
        <Image
          src='/modal_control_left.png'
          alt=''
          aria-hidden="true"
          width={40}
          height={40}
          className="h-8 w-8 md:h-10 md:w-10"
        />
      </button>
    </>
  );
};

export default ModalControls;
