import PageLayout from '@/layouts/PageLayout'
import Image from 'next/image'
import style from './cars.module.scss'
import { FaGasPump } from 'react-icons/fa'
import { MdOutlineAirlineSeatReclineNormal } from 'react-icons/md'
import { IoSpeedometerOutline } from 'react-icons/io5'
import { GiGearStick } from 'react-icons/gi'
import { IoIosArrowForward } from 'react-icons/io'
import { carsPageData } from '@/data/carsPage.data'
import BasicButton from '@/components/UI/BasicButton/BasicButton'
import { useRouter } from 'next/router'
import { useState } from 'react'
import ModalWindow from '@/components/ModalWindow/ModalWindow'
import RentForm from '@/components/RentForm/RentForm'

const CarsPage = () => {
  const router = useRouter()
  const [page, setPage] = useState(1)
  const [isShowModal, setIsShowModal] = useState(false)

  const onClickBackButton = () => {
    router.back()
  }

  const onClickClose = () => setIsShowModal(false)
  const onClickRentButton = () => setIsShowModal(true)

  const onClickRightButton = () => {
    if (page < Math.ceil(carsPageData.length / 4)) {
      setPage(page + 1)
    }
  }

  const onClickLeftButton = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  return (
    <>
      <PageLayout>
        <article className={style.wrapper}>
          <ul className={style.list}>
            {carsPageData.slice(4 * (page - 1), 4 * page).map(car => (
              <li key={car.id}>
                <Image
                  src={car.img}
                  alt='car'
                  width={450}
                  height={250}
                  className={style.img}
                />
                <div className={style.info}>
                  <p className={style.info__suptitle}>
                    <span>{car.price}Р / </span>
                    <span>{car.time}</span>
                  </p>
                  <p className={style.info__title}>{car.title}</p>
                </div>
                {/*ICONS*/}
                <ul className={style.icons}>
                  <li>
                    <FaGasPump />
                    <p>Бензин</p>
                  </li>
                  <li>
                    <MdOutlineAirlineSeatReclineNormal />
                    <p>{car.seats} места</p>
                  </li>
                  <li>
                    <IoSpeedometerOutline />
                    <p>{car.speed} км/час</p>
                  </li>
                  <li>
                    <GiGearStick />
                    <p>{car.gearStick}</p>
                  </li>
                </ul>
                <div className={style.rent} onClick={onClickRentButton}>
                  <p>АРЕНДУЙТЕ СЕЙЧАС</p>
                  <IoIosArrowForward />
                </div>
              </li>
            ))}
          </ul>

          <BasicButton
            onClick={onClickBackButton}
            className={style.back_button}
          >
            ВЕРНУТЬСЯ НАЗАД
          </BasicButton>

          <div className={style.arrows}>
            <div onClick={onClickLeftButton}>
              <IoIosArrowForward />
            </div>
            <div onClick={onClickRightButton}>
              <IoIosArrowForward />
            </div>
          </div>

          <p className={style.page}>{page}</p>
        </article>
      </PageLayout>
      {isShowModal && (
        <ModalWindow>
          <RentForm closeFunc={onClickClose} />
        </ModalWindow>
      )}
    </>
  )
}

export default CarsPage
