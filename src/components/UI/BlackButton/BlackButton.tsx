import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import style from './BlackButton.module.scss'

const BlackButton: FC<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = ({ children, ...props }) => {
  return (
    <button className={style.button} {...props}>
      {children}
    </button>
  )
}

export default BlackButton
