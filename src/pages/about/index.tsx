import PageLayout from '@/layouts/PageLayout'
import banner from '@/assets/road.png'
import Image from 'next/image'
import style from './about.module.scss'
import BasicButton from '@/components/UI/BasicButton/BasicButton'

const About = () => {
  return (
    <PageLayout>
      <div className={style.wrapper}>
        <Image src={banner} alt='banner' width={1240} height={500} />
        <p className={style.welcome}>Добро пожаловать</p>
        <p className={style.title}>"ПроCar Камышин" - прокат автомобилей</p>
        <p className={style.text}>
          Компания ПроCAR Камышин предлагает прокат автомобилей в Камышине. Мы
          приложили максимум усилий для того, чтобы вы могли почувствовать себя
          комфортно в любой ситуации, связанной с деловыми и частными поездками
          на машине в г. Камышин. Мы очень трепетно относимся к качеству
          обслуживания наших клиентови предлагаем авто только в отличном
          техническом состоянии. При любых неисправностях мы предоставляем
          подменный автомобиль или устраиваем проблемы в кратчайшие сроки. Мы
          всегда доступны по мобильному телефону и с радостью проконсультируем
          Вас по интересующим вопросам.
        </p>

        <BasicButton className={style.button}>Парк автомобилей</BasicButton>
      </div>
    </PageLayout>
  )
}

export default About
