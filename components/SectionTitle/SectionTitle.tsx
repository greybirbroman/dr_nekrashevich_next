interface SectionTitleProps {
  title: string
  color?: string
}

const SectionTitle = ({ title, color }: SectionTitleProps) => {
  return (
    <h3
      className={`w-full flex items-center justify-center uppercase text-ui-sm md:text-ui-md lg:text-ui-lg ${
        color ? color : 'text-tertiary'
      } pb-[24px] md:pb-[32px] lg:pb-[40px] cursor-default`}
    >
      {title}
    </h3>
  )
}

export default SectionTitle
