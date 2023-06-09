import PageLayout from '@/layouts/PageLayout'
import car from '@/assets/big_car.png'
import Image from 'next/image'
import style from './index.module.scss'
import { BsGear } from 'react-icons/bs'
import BasicButton from '@/components/UI/BasicButton/BasicButton'
import Link from 'next/link'

const Home = () => {
  return (
    <PageLayout className={style.wrapper}>
      <div className={style.wrapper_img}>
        <Image src={car} alt='' width={700} height={500} />
      </div>

      <div className={style.info}>
        <div className={style.wrapper_title}>
          <BsGear />
          <h1 className={style.title}>ПРОКАТ АВТО В КАМЫШИНЕ</h1>
        </div>

        <div className={style.info__body}>
          <p>Проще, чем Вы думаеете!</p>
          <p>Доступнее, чем Вы ожидаете!</p>
        </div>

        <Link href={'/cars'}>
          <BasicButton>Парк автомобилей</BasicButton>
        </Link>
      </div>

      <p className={style.copyright}>© 2023. Все права защищены</p>
    </PageLayout>
  )
}

export default Home
