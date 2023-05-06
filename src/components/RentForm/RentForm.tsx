import { FC, FormEvent } from 'react'
import BasicButton from '../UI/BasicButton/BasicButton'
import Input from '../UI/Input/Input'
import style from './RentForm.module.scss'
import { BiLogOut } from 'react-icons/bi'
import { IoMdClose } from 'react-icons/io'

interface IProps {
  closeFunc: () => void
}

const RentForm: FC<IProps> = ({ closeFunc }) => {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <form className={style.wrapper} onSubmit={event => onSubmit(event)}>
      <IoMdClose className={style.close} onClick={closeFunc} />
      <div className={style.wrapper_title}>
        <p className={style.title}>Заявка на аренду автомобиля</p>
      </div>

      <p className={style.subtitle}>
        Оставьте свой номер телефона, чтобы получить бесплатную информацию и
        уточнить наличие автомобиля на интересующую вас дату
      </p>

      <div className={style.controls}>
        <div className={style.inputs}>
          <Input placeholder='Имя' title='ИМЯ' />
          <Input placeholder='Номер телефона' title='НОМЕР ТЕЛЕФОНА *' />
        </div>

        <BasicButton
          icon={<BiLogOut className={style.logout_icon} />}
          className={style.rent_button}
          onClick={closeFunc}
        >
          Арендовать авто
        </BasicButton>
      </div>
    </form>
  )
}

export default RentForm
