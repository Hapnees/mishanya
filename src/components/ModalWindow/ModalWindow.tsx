import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import style from './ModalWindow.module.scss'

const ModalWindow: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
> = props => {
  return <article className={style.wrapper} {...props}></article>
}

export default ModalWindow
