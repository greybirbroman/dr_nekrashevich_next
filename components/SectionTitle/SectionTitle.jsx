const SectionTitle = ({ title, color }) => {
  return (
    <h3
      className={`w-full flex items-center justify-center uppercase text-[12px] ${
        color ? color : 'text-gray-500'
      } pb-4 md:pb-8 lg:pb-12 cursor-default`}
    >
      {title}
    </h3>
  );
};

export default SectionTitle;
