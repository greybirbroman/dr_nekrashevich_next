import ContactDetails from '../ContactDetails/ContactDetails'
import footerData from '../../data/common.json'

function Footer() {
  const year = new Date().getFullYear()
  const { owner, author, other, contactsDetails } = footerData.footer

  return (
    <footer className="bg-brand-900 text-white">
      <ContactDetails data={contactsDetails} />
      <div className="site-container grid grid-cols-2 items-center gap-x-4 gap-y-3 border-t border-white/15 py-5 text-text3-sm text-white/65 md:grid-cols-3 md:gap-6">
        <a href={owner.href} className="font-semibold text-white/85 hover:text-white">
          {owner.title} © {year}
        </a>
        <a
          href="#home"
          className="col-start-2 justify-self-end hover:text-white md:col-start-2 md:justify-self-center"
        >
          В начало ↑
        </a>
        <p className="col-span-2 text-right md:col-span-1">
          {author} ·{' '}
          <a
            href={other.href}
            target={other.target}
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            {other.title}
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
