import Link from 'next/link'

import Image from '../common/Image/Image'

const Logo = () => {
  return (
    <Link href="/" className="relative">
      <Image
        src="/logo.svg"
        alt="Некрашевич Марина Сергеевна - лого"
        title="Некрашевич М.С."
        width={150}
        height={150}
        loading="eager"
        className="w-[72px] md:w-[112px]"
      />
    </Link>
  )
}

export default Logo
