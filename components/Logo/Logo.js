import Link from "next/link"
import Image from "next/image"


const Logo = () => {
  return (
    <Link href='/' className="relative">
      <Image src='/logo.png' alt='Некрашевич Марина Сергеевна - лого' title='Некрашевич М.С.' width={100} height={100} quality={100}/>
    </Link>
  )
}

export default Logo

