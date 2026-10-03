'use client'

import { useEffect, useRef } from 'react'

const ModalWindow = ({
  children,
  id,
  ariaLabel = 'Просмотр фотографии работы',
  closeLabel = 'Закрыть просмотр',
  isOpen,
  onClose,
  returnFocusRef,
}) => {
  const dialogRef = useRef(null)
  const closeButtonRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (isOpen && !dialog.open) {
      dialog.showModal()
      closeButtonRef.current?.focus()
    }
    if (!isOpen && dialog.open) {
      dialog.close()
      returnFocusRef?.current?.focus()
    }
  }, [isOpen, returnFocusRef])

  return (
    <dialog
      ref={dialogRef}
      id={id}
      aria-label={ariaLabel}
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
      className="fixed inset-0 m-0 h-[100dvh] max-h-none w-screen max-w-none border-0 bg-transparent p-0 text-white backdrop:bg-primary/90"
    >
      <div className="relative mx-auto flex h-full w-full max-w-none items-center justify-center p-2 sm:p-4">
        <button
          ref={closeButtonRef}
          type="button"
          aria-label={closeLabel}
          onClick={onClose}
          className="absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/85 text-3xl leading-none text-white shadow-soft transition-transform hover:scale-105 focus-visible:outline-white md:right-6 md:top-6"
        >
          <span aria-hidden="true">×</span>
        </button>
        {children}
      </div>
    </dialog>
  )
}

export default ModalWindow
