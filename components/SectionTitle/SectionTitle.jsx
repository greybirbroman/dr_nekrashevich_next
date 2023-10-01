const SectionTitle = ({ title, color }) => {
  return (
    <h2
      className={`w-full flex items-center justify-center uppercase ${
        color ? color : 'text-cyan-700'
      } pb-4 md:pb-8 lg:pb-12 cursor-default`}
    >
      {title}
    </h2>
  );
};

export default SectionTitle;
