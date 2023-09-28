
const PrimaryButton = ({ title, area, onClick, id, isActive }) => {
    return (
      <button type='button' className={`w-fit m-8 py-3 px-8 bg-cyan-700 border-2 border-white text-white text-[16px] rounded-xl hover:bg-cyan-900 duration-75 ${isActive ? 'bg-cyan-900' : ''}`} onClick={onClick} role='button' id={id} area-aria-label={area}>
        {title}
      </button>
    )
  }
  
  export default PrimaryButton