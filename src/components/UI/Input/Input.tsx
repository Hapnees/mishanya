import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react'
import style from './Input.module.scss'

interface IProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  title?: string
}

const Input: FC<IProps> = ({ title, ...props }) => {
  return (
    <div>
      {title && <p className={style.title}>{title}</p>}
      <input {...props} className={style.input} />
    </div>
  )
}

export default Input
