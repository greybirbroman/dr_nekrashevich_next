import type { MouseEventHandler, ReactNode } from 'react'

import Link from 'next/link'

import Image from '../common/Image/Image'

interface PrimaryButtonProps {
  title?: ReactNode
  icon?: string
  href?: string
  externalLink?: boolean
  area?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  id?: string
  isActive?: boolean
  customClass?: string
}

const PrimaryButton = ({
  title,
  icon,
  href,
  externalLink,
  area,
  onClick,
  id,
  isActive,
  customClass = '',
}: PrimaryButtonProps) => {
  const innerContent = () => (
    <>
      {icon && <Image src={icon} width={40} height={40} />}
      {title && title}
    </>
  )

  return href ? (
    <Link
      href={href}
      target={externalLink ? '_blank' : undefined}
      rel={externalLink ? 'noopener noreferrer' : undefined}
    >
      {innerContent()}
    </Link>
  ) : (
    <button
      type="button"
      className={`w-fit py-3 px-8 lg:text-[20px] rounded-xl duration-300 ${customClass} ${
        !isActive
          ? 'text-cyan-700 bg-white border-2 border-cyan-700'
          : 'bg-cyan-700 text-white border-2 border-transparent'
      }`}
      onClick={onClick}
      role="button"
      id={id}
      aria-label={area}
    >
      {innerContent()}
    </button>
  )
}

export default PrimaryButton
