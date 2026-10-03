interface SectionTitleProps {
  title: string
  color?: string
  id?: string
}

const SectionTitle = ({ title, color, id }: SectionTitleProps) => {
  return (
    <div data-motion-reveal className="mb-8 flex items-center justify-center gap-3 text-center md:mb-12 lg:mb-16">
      <span aria-hidden="true" className="h-px w-7 bg-accent" />
      <h2
        id={id}
        className={`text-text3-sm font-semibold uppercase tracking-[0.16em] md:text-text3-md ${color ?? 'text-brand-700'}`}
      >
        {title}
      </h2>
      <span aria-hidden="true" className="h-px w-7 bg-accent" />
    </div>
  )
}

export default SectionTitle
