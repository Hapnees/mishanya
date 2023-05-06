import car_1 from '@/assets/cars/car_1.png'
import car_2 from '@/assets/cars/car_2.png'
import car_3 from '@/assets/cars/car_3.jpg'
import car_4 from '@/assets/cars/car_4.jpg'
import car_5 from '@/assets/cars/car_5.jpg'
import car_6 from '@/assets/cars/car_6.png'
import car_7 from '@/assets/cars/car_7.png'
import car_8 from '@/assets/cars/car_8.png'

import { StaticImageData } from 'next/image'

interface ICarsPageData {
  id: number
  img: string | StaticImageData
  title: string
  price: number
  time: string
  seats: number
  speed: number
  gearStick: 'Механика' | 'Автомат'
}

export const carsPageData: ICarsPageData[] = [
  {
    id: 1,
    img: car_1,
    title: 'Mercedes benz gl class 2021',
    price: 6000,
    time: 'день',
    seats: 4,
    speed: 170,
    gearStick: 'Механика',
  },
  {
    id: 2,
    img: car_2,
    title: 'Пикап Toyota Hilux 2020',
    price: 6000,
    time: 'день',
    seats: 4,
    speed: 170,
    gearStick: 'Механика',
  },
  {
    id: 3,
    img: car_3,
    title: 'BMW X6 Sport 2021',
    price: 7000,
    time: 'день',
    seats: 4,
    speed: 170,
    gearStick: 'Механика',
  },
  {
    id: 4,
    img: car_4,
    title: 'BMW 3 серии F30 купе',
    price: 7000,
    time: 'день',
    seats: 4,
    speed: 170,
    gearStick: 'Механика',
  },
  {
    id: 5,
    img: car_5,
    title: 'ACURA ROX LIMITED 2014',
    price: 6000,
    time: 'день',
    seats: 4,
    speed: 170,
    gearStick: 'Механика',
  },
  {
    id: 6,
    img: car_6,
    title: 'ACURA ROX LIMITED 2014',
    price: 6000,
    time: 'день',
    seats: 4,
    speed: 170,
    gearStick: 'Механика',
  },
  {
    id: 7,
    img: car_7,
    title: 'ACURA ROX LIMITED 2014',
    price: 7000,
    time: 'день',
    seats: 4,
    speed: 170,
    gearStick: 'Механика',
  },
  {
    id: 8,
    img: car_8,
    title: 'ACURA ROX LIMITED 2014',
    price: 7000,
    time: 'день',
    seats: 4,
    speed: 170,
    gearStick: 'Механика',
  },
]
