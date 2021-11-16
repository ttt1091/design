import Styles from './carousel.module.scss'
import Image from 'next/image'

const Carousel = () => {
  return (
    <section className={Styles.carousel}>
      <Image
       src="/images/375x200.png"
       layout={"fill"}
       objectFit={"cover"}
       alt="carousel"
      />
    </section>
  )
}
export default Carousel;