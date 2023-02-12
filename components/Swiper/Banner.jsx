// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, A11y, Autoplay, EffectFade } from 'swiper'

// Import Swiper styles
import styles from './SwiperCarousel.module.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

// Components
import Image from 'next/image'
import { SlideNextButton, SlidePrevButton } from './Buttons'

// Images
import image1 from '../../public/images/image1.jpg'
import image2 from '../../public/images/image2.jpg'
import image3 from '../../public/images/image3.jpg'
import image4 from '../../public/images/image4.jpg'
import image6 from '../../public/images/image6.jpg'

const SwiperCarouselBanner = () => {
  return (
    <>
      <Swiper
        className={styles.swiperBanner}
        modules={[Pagination, A11y, Autoplay, EffectFade]}
        spaceBetween={10}
        slidesPerView={1}
        effect='cube'
        autoplay={{ delay: 6000 }}
      >
        <div className={styles.title}>
          <SlidePrevButton />
          <SlideNextButton />
        </div>
        <SwiperSlide>
          <div className={styles.sliderItem}>
            <Image priority src={image1} alt='control de plagas de cucarachas' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.sliderItem}>
            <Image src={image2} alt='control de plagas de ratas' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.sliderItem}>
            <Image src={image3} alt='control de plagas de chinches' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.sliderItem}>
            <Image src={image4} alt='control de plagas en Málaga' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.sliderItem}>
            <Image src={image6} alt='control de plagas en Andalucía' />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
export default SwiperCarouselBanner
