'use client'

import { useState } from 'react'

import YandexMap from '../YandexMap/YandexMap'

function MapDisclosure() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="clinic-map"
        aria-label={isOpen ? 'Скрыть карту клиники' : 'Показать карту клиники'}
        onClick={() => setIsOpen((value) => !value)}
        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-white text-brand-800 shadow-soft transition-colors hover:bg-brand-100 focus-visible:outline-white"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M3.5 6.5 9 4l6 2.5L20.5 4v13.5L15 20l-6-2.5L3.5 20z" />
          <path d="M9 4v13.5m6-11V20" />
        </svg>
      </button>
      <div id="clinic-map" hidden={!isOpen} className="mt-6">
        {isOpen && <YandexMap />}
      </div>
    </div>
  )
}

export default MapDisclosure
