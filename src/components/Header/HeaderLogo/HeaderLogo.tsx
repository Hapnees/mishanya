import { AiFillCar } from 'react-icons/ai'
import style from './HeaderLogo.module.scss'

const HeaderLogo = () => {
  return (
    <section className={style.icon_wrapper}>
      <AiFillCar className={style.icon_wrapper__icon} />
      <div className={style.icon_wrapper__info}>
        <p>
          Про<span className={style.bold}>CAR</span>
        </p>
        <p>Камышин</p>
      </div>
    </section>
  )
}

export default HeaderLogo
