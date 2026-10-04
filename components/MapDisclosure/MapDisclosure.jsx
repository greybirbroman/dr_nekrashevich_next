'use client'

import { useState } from 'react'

import ModalWindow from '../ModalWindow/ModalWindow'
import YandexMap from '../YandexMap/YandexMap'

function MapDisclosure() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls="clinic-map-dialog"
        aria-label="Открыть на карте"
        onClick={() => setIsOpen(true)}
        className="group inline-flex min-h-8 items-center gap-1.5 border-b border-white/55 pb-1 text-ui-sm font-bold text-white transition-colors hover:border-white hover:text-brand-100 focus-visible:outline-white"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M3.5 6.5 9 4l6 2.5L20.5 4v13.5L15 20l-6-2.5L3.5 20z" />
          <path d="M9 4v13.5m6-11V20" />
        </svg>
        <span>Открыть на карте</span>
        <span aria-hidden="true" className="ml-1 text-base leading-none">↗</span>
      </button>
      <ModalWindow
        id="clinic-map-dialog"
        ariaLabel="Карта клиники «Дентерия»"
        closeLabel="Закрыть карту клиники"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className="relative h-full w-full">
          <YandexMap modal />
        </div>
      </ModalWindow>
    </>
  )
}

export default MapDisclosure
