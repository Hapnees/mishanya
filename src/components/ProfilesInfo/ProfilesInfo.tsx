import avatar1 from '@/assets/avatar_1.jpg'
import Image from 'next/image'
import { IoIosArrowDown } from 'react-icons/io'
import style from './ProfilesInfo.module.scss'
import { useState } from 'react'

const ProfilesInfo = () => {
  const defaultProfiles = [
    {
      id: 1,
      avatar: avatar1,
      title: 'На связи Михаил',
      subtitle: 'Жду вашего звонка',
      body: 'Проводник по салону. Слишком много гуляет по салону',
      isExpand: false,
    },
  ]

  const [profiles, setProfiles] = useState(defaultProfiles)

  const onClickProfile = (id: number) => () => {
    const copy = [...profiles]
    const currentProfile = copy.find(profile => profile.id === id)

    if (!currentProfile) return
    currentProfile.isExpand = !currentProfile.isExpand

    setProfiles(copy)
  }

  return (
    <ul className={style.wrapper}>
      {profiles.map(profile => (
        <li key={profile.id} onClick={onClickProfile(profile.id)}>
          <div className={style.container}>
            <Image
              src={profile.avatar}
              alt='avatar'
              width={120}
              height={120}
              className={style.avatar}
            />
            <div className={style.info}>
              <div>
                <h1 className={style.info__title}>{profile.title}</h1>
                <h2 className={style.info__subtitle}>{profile.subtitle}</h2>
              </div>
              <div className={style.arrow_wrapper}>
                <IoIosArrowDown
                  className={profile.isExpand ? style.arrow_rotate : ''}
                />
              </div>
            </div>
          </div>
          {profile.isExpand && (
            <p className={style.info__body}>{profile.body}</p>
          )}
        </li>
      ))}
    </ul>
  )
}

export default ProfilesInfo
