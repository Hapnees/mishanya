import Link from 'next/link'
import style from './Header.module.scss'
import HeaderLogo from './HeaderLogo/HeaderLogo'
import HeaderNavbar from './HeaderNavbar/HeaderNavbar'

const Header = () => {
  return (
    <header className={style.wrapper}>
      <HeaderLogo />
      <HeaderNavbar />
    </header>
  )
}

export default Header
