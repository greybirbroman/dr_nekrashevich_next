const commitments = [
  'Понятный план лечения',
  'Внимание к каждому пациенту',
  'Современные технологии',
]

function TrustStrip() {
  return (
    <section
      aria-label="О подходе к лечению"
      className="border-y border-brand-100 bg-light-bg"
    >
      <ul className="site-container grid grid-cols-[minmax(0,1fr)_20px_minmax(0,1fr)_20px_minmax(0,1fr)] items-center gap-x-1 py-2 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:gap-4 md:py-0">
        {commitments.flatMap((commitment, index) => [
          <li key={commitment}>
            <span className="flex min-h-[72px] items-center justify-center py-2 text-center text-[clamp(0.7rem,2.1vw,0.875rem)] leading-[1.45] text-primary md:min-h-[80px] md:py-4 md:text-sm-base">
              {commitment}
            </span>
          </li>,
          ...(index < commitments.length - 1
            ? [
                <li
                  key={`separator-${commitment}`}
                  aria-hidden="true"
                  className="grid place-items-center font-display text-xl text-brand-pale md:text-2xl"
                >
                  ✳
                </li>,
              ]
            : []),
        ])}
      </ul>
    </section>
  )
}

export default TrustStrip
