import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import style from './BasicButton.module.scss'

interface IProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon?: React.ReactNode
}

const BasicButton: FC<IProps> = ({
  children,
  icon,
  className = '',
  ...props
}) => {
  return (
    <button className={`${style.button} ${className}`} {...props}>
      {icon}
      <p>{children}</p>
    </button>
  )
}

export default BasicButton
