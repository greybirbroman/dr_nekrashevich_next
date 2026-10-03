import ContactDetails from '../ContactDetails/ContactDetails'
import footerData from '../../data/common.json'

function Footer() {
  const year = new Date().getFullYear()
  const { owner, author, other, contactsDetails } = footerData.footer

  return (
    <footer className="bg-brand-900 text-white">
      <ContactDetails data={contactsDetails} />
      <div className="mx-auto flex max-w-site flex-col gap-4 border-t border-white/15 px-gutter-sm py-4 text-text3-sm text-white/65 sm:px-gutter-md md:flex-row md:items-center md:justify-between md:px-gutter-md lg:px-gutter-lg">
        <a href={owner.href} className="font-semibold text-white/85 hover:text-white">
          {owner.title}
        </a>
        <p>© {year}</p>
        <a
          href={other.href}
          target={other.target}
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          {other.title}
        </a>
        <p>{author}</p>
      </div>
    </footer>
  )
}

export default Footer
