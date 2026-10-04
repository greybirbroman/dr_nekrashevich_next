const variants = {
  brand: 'text-brand-700 hover:text-accent',
  cyan: 'text-brand-700 hover:text-accent',
  white: 'text-white hover:text-brand-100',
}

const sizes = {
  sm: 'text-sm-base md:text-md-base lg:text-ui-lg',
  md: 'text-sm-md md:text-md-md lg:text-md-lg',
}

const PrimaryLink = ({
  title,
  href,
  size = 'sm',
  variant = 'brand',
  className = '',
  onClick,
}) => {
  const classList = `${sizes[size] ?? sizes.sm} ${variants[variant] ?? variants.brand} ${className} transition-colors duration-200`;

  return href ? (
    <a className={classList} href={href} onClick={onClick}>
      {title}
    </a>
  ) : (
    <span className={classList}>{title}</span>
  )
}

export default PrimaryLink
