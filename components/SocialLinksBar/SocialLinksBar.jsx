import Image from 'next/image'

import { socialLinksList } from '@/utils/constants'

function SocialLinksBar({ className = '', variant = 'light' }) {
  const linkColor =
    variant === 'inverse'
      ? 'border-brand-100 bg-brand-100 hover:bg-white'
      : 'border-brand-100 bg-white/90 hover:bg-white'

  return (
    <ul className={className} aria-label="Контакты в социальных сетях">
      {socialLinksList.map((link) => (
        <li key={link.id}>
          <a
            href={link.linkHref}
            target={link.linkHref.startsWith('https:') ? '_blank' : undefined}
            rel={link.linkHref.startsWith('https:') ? 'noopener noreferrer' : undefined}
            aria-label={link.label}
            className={`inline-flex h-14 w-14 items-center justify-center rounded-full border transition-colors duration-200 sm:h-16 sm:w-16 ${linkColor}`}
          >
            <Image
              src={link.icon}
              alt=""
              aria-hidden="true"
              width={24}
              height={24}
              className="h-6 w-6 object-contain"
            />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default SocialLinksBar
