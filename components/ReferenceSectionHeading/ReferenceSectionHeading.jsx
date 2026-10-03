function ReferenceSectionHeading({
  id,
  kicker,
  title,
  description,
  className = '',
}) {
  return (
    <header
      className={`mb-9 grid gap-4 md:mb-10 desktop:grid-cols-[minmax(0,1fr)_minmax(15rem,22.5rem)] desktop:items-end desktop:gap-10 ${className}`}
    >
      <div className="min-w-0">
        <p className="mb-4 inline-flex items-center gap-3 text-text3-md font-bold uppercase tracking-[0.16em] text-brand-700">
          <span aria-hidden="true" className="h-px w-6 bg-primary" />
          {kicker}
        </p>
        <h2
          id={id}
          className="max-w-[27ch] font-display text-[clamp(1.75rem,3.2vw,2.25rem)] leading-[1.35] tracking-[-0.035em] text-primary"
        >
          {title}
        </h2>
      </div>
      {description && (
        <p className="max-w-[38ch] text-sm-base leading-relaxed text-secondary md:text-md-base desktop:justify-self-end">
          {description}
        </p>
      )}
    </header>
  )
}

export default ReferenceSectionHeading
