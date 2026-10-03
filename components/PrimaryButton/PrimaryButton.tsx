import type { MouseEventHandler, ReactNode } from 'react'

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
  const accessibleName = area ?? (typeof title === 'string' ? title : undefined)
  const innerContent = (
    <>
      {icon && (
        <Image
          src={icon}
          alt=""
          aria-hidden="true"
          width={28}
          height={28}
          className="h-7 w-7 object-contain"
        />
      )}
      {title && <span>{title}</span>}
    </>
  )

  return href ? (
    <a
      href={href}
      target={externalLink ? '_blank' : undefined}
      rel={externalLink ? 'noopener noreferrer' : undefined}
      aria-label={accessibleName}
      className={`inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-white text-brand-800 shadow-soft transition-colors hover:bg-brand-100 ${customClass}`}
    >
      {innerContent}
    </a>
  ) : (
    <button
      type="button"
      className={`w-fit rounded-xl px-6 py-3 text-ui-md font-semibold transition-colors ${customClass} ${
        !isActive
          ? 'border border-brand-700 bg-white text-brand-800 hover:bg-brand-50'
          : 'border border-brand-700 bg-brand-700 text-white hover:bg-brand-800'
      }`}
      onClick={onClick}
      id={id}
      aria-label={accessibleName}
    >
      {innerContent}
    </button>
  )
}

export default PrimaryButton
