import style from './ContactsInfo.module.scss'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BsTelephoneInbound } from 'react-icons/bs'
import { RxCountdownTimer } from 'react-icons/rx'

const ContactsInfo = () => {
  return (
    <ul className={style.wrapper}>
      <li>
        <HiOutlineLocationMarker />
        <div>
          <h1 className={style.title}>Адрес</h1>
          <p>г. Камышин</p>
        </div>
      </li>
      <li>
        <BsTelephoneInbound />
        <div>
          <h1 className={style.title}>Телефон</h1>
          <p>+79963572249</p>
          <p>halk2268@gmail.com</p>
        </div>
      </li>
      <li>
        <RxCountdownTimer />
        <div>
          <h1 className={style.title}>Рабочее время</h1>
          <p>Понедельник - пятница 09:00 - 23:00</p>
          <p>Суббота - воскресенье - 09:00 - 16:00</p>
        </div>
      </li>
    </ul>
  )
}

export default ContactsInfo
