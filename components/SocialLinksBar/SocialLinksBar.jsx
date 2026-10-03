import Image from 'next/image'

import { socialLinksList } from '@/utils/constants'

function SocialLinksBar({ className = '' }) {
  return (
    <ul className={className} aria-label="Контакты в социальных сетях">
      {socialLinksList.map((link) => (
        <li key={link.id}>
          <a
            href={link.linkHref}
            target={link.linkHref.startsWith('https:') ? '_blank' : undefined}
            rel={link.linkHref.startsWith('https:') ? 'noopener noreferrer' : undefined}
            aria-label={link.label}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-100 bg-white/80 transition-transform hover:-translate-y-0.5 hover:shadow-soft"
          >
            <Image
              src={link.icon}
              alt=""
              aria-hidden="true"
              width={24}
              height={24}
              className="h-5 w-5 object-contain"
            />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default SocialLinksBar
