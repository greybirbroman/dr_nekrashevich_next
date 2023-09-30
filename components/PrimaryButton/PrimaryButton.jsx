const PrimaryButton = ({ title, area, onClick, id, isActive, customClass }) => {
  return (
    <button
      type='button'
      className={`w-fit py-3 px-8 text-[16px] rounded-xl duration-300 ${customClass} ${
        isActive
          ? 'text-cyan-700 bg-white border-2 border-cyan-700'
          : 'bg-cyan-700 text-white border-2 border-white'
      }`}
      onClick={onClick}
      role='button'
      id={id}
      area-aria-label={area}
    >
      {title}
    </button>
  );
};

export default PrimaryButton;
