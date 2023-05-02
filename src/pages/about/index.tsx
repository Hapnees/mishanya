import PageLayout from '@/layouts/PageLayout'
import banner from '@/assets/road.png'
import Image from 'next/image'

const About = () => {
  return (
    <PageLayout>
      <div>
        <Image src={banner} alt='banner' width={1240} height={500} />
      </div>
    </PageLayout>
  )
}

export default About
