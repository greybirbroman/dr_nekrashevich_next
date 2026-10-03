const YandexMap = ({ modal = false }) => {
  const containerHeight = modal
    ? 'h-full'
    : 'h-[clamp(320px,55vw,520px)] rounded-2xl sm:h-[clamp(360px,48vw,560px)]'
  const frameClassName = modal
    ? 'absolute inset-0 h-full w-full border-0'
    : 'relative h-full w-full border-0'

  return (
    <div
      className={`relative w-full min-w-0 overflow-hidden ${containerHeight}`}
    >
      <a
        href="https://yandex.ru/maps/org/denteriya/149051823874/?utm_medium=mapframe&utm_source=maps"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: 0 }}
      >
        Дентерия
      </a>
      <a
        href="https://yandex.ru/maps/2/saint-petersburg/category/dental_clinics/184106132/?utm_medium=mapframe&utm_source=maps"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: 14 }}
      >
        Стоматологическая клиника в Санкт‑Петербурге
      </a>
      <iframe
        className={frameClassName}
        src="https://yandex.ru/map-widget/v1/?ll=30.294515%2C59.955947&mode=poi&poi%5Bpoint%5D=30.294308%2C59.955976&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D149051823874&z=17.2"
        allowFullScreen
        loading="lazy"
        title="Карта клиники «Дентерия» в Санкт-Петербурге"
      />
    </div>
  )
}

export default YandexMap
