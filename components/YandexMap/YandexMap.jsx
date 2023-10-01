const YandexMap = () => {

  return (
    <div className='work__map'>
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <a
        href='https://yandex.ru/maps/org/denteriya/149051823874/?utm_medium=mapframe&utm_source=maps'
        style={{
          color: '#eee',
          fontSize: '12px',
          position: 'absolute',
          top: '0px',
        }}
      >
        Дентерия
      </a>
      <a
        href='https://yandex.ru/maps/2/saint-petersburg/category/dental_clinics/184106132/?utm_medium=mapframe&utm_source=maps'
        style={{
          color: '#eee',
          fontSize: '12px',
          position: 'absolute',
          top: '14px',
        }}
      >
        Стоматологическая клиника в Санкт‑Петербурге
      </a>
      <iframe
        className='rounded-xl h-[310px] w-full'
        src='https://yandex.ru/map-widget/v1/?ll=30.294515%2C59.955947&mode=poi&poi%5Bpoint%5D=30.294308%2C59.955976&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D149051823874&z=19.05'
        frameBorder='1'
        allowFullScreen='true'
        style={{ position: 'relative' }}
        title='map'
      ></iframe>
    </div>
  </div>
  )
}

export default YandexMap
