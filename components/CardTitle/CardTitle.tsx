interface CardTitleProps {
  title: string
}

const CardTitle = ({ title }: CardTitleProps) => {
  return (
    <h3 className="mb-5 w-fit font-display text-h3-sm text-primary md:mb-6 md:text-h3-md lg:mb-7 lg:text-h3-lg">
      {title}
    </h3>
  )
}

export default CardTitle
