'use client'

import { useRef, useState } from 'react'

import ModalWindow from '../ModalWindow/ModalWindow'
import YandexMap from '../YandexMap/YandexMap'

function MapDisclosure() {
  const [isOpen, setIsOpen] = useState(false)
  const openerRef = useRef(null)

  return (
    <>
      <button
        ref={openerRef}
        type="button"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls="clinic-map-dialog"
        aria-label="Открыть карту клиники"
        onClick={() => setIsOpen(true)}
        className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/70 bg-white text-brand-800 shadow-soft transition-colors hover:bg-brand-100 focus-visible:outline-white"
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
      <ModalWindow
        id="clinic-map-dialog"
        ariaLabel="Карта клиники «Дентерия»"
        closeLabel="Закрыть карту клиники"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        returnFocusRef={openerRef}
      >
        <div className="relative h-full w-full">
          <YandexMap modal />
        </div>
      </ModalWindow>
    </>
  )
}

export default MapDisclosure
