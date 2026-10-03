const ModalControls = ({ onRightClick, onLeftClick }) => {
  return (
    <>
      <button
        type="button"
        aria-label="Следующая работа"
        className="absolute right-2 top-1/2 z-10 inline-flex -translate-y-1/2 items-center justify-center rounded-full bg-primary/80 p-2 text-white transition-transform hover:scale-105 focus-visible:outline-white md:right-4"
        onClick={onRightClick}
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-8 w-8 md:h-10 md:w-10" fill="none">
          <path d="M4.5 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <button
        type="button"
        aria-label="Предыдущая работа"
        className="absolute left-2 top-1/2 z-10 inline-flex -translate-y-1/2 items-center justify-center rounded-full bg-primary/80 p-2 text-white transition-transform hover:scale-105 focus-visible:outline-white md:left-4"
        onClick={onLeftClick}
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-8 w-8 md:h-10 md:w-10" fill="none">
          <path d="M19.5 12h-15m6 6-6-6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </>
  );
};

export default ModalControls;
