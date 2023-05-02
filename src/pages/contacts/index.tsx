import MapModif from '@/components/MapModif/MapModif'
import PageLayout from '@/layouts/PageLayout'
import style from './contacts.module.scss'
import ContactsInfo from '@/components/ContactsInfo/ContactsInfo'
import ProfilesInfo from '@/components/ProfilesInfo/ProfilesInfo'
import car from '@/assets/car_1.png'
import Image from 'next/image'

const ConcactsPage = () => {
  return (
    <PageLayout className={style.wrapper}>
      <MapModif />
      <section className={style.info}>
        <ContactsInfo />
        <ProfilesInfo />
      </section>
      <div className={style.img_wrapper}>
        <Image src={car} alt='car' width={400} height={200} />
        <p>© 2023. Все права защищены</p>
      </div>
    </PageLayout>
  )
}

export default ConcactsPage
