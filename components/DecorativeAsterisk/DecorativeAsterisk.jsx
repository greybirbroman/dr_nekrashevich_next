function DecorativeAsterisk({ className = '' }) {
  return (
    <svg
      aria-hidden="true"
      className={`block size-[1em] shrink-0 ${className}`}
      fill="none"
      focusable="false"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32 3v58M3 32h58M11.5 11.5l41 41m0-41-41 41"
        stroke="currentColor"
        strokeWidth="3"
      />
    </svg>
  )
}

export default DecorativeAsterisk
