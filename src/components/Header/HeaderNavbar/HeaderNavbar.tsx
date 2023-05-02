import Link from 'next/link'
import style from './HeaderNavbar.module.scss'
import { useRouter } from 'next/router'

const HeaderNavbar = () => {
  const tabs = [
    { title: 'Главная', href: '/', isSelect: false },
    { title: 'Автомобили', href: '/1', isSelect: false },
    { title: 'О нас', href: '/about', isSelect: false },
    { title: 'Контакты', href: '/contacts', isSelect: false },
  ]

  const { pathname } = useRouter()

  return (
    <nav className={style.nav}>
      {tabs.map(tab => (
        <Link key={tab.title} href={tab.href}>
          <p>{tab.title}</p>
          <div
            className={`${style.underline} ${
              pathname === tab.href ? style.underline__active : ''
            }`}
          ></div>
        </Link>
      ))}
    </nav>
  )
}

export default HeaderNavbar
