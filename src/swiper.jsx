import "./swiper.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import bekzod from './assets/bekzod.png';
import Lang from './langs.json';

function SwiperComponent({ lang }) {
  let arr = [1, 2, 3, 4];
  
  return (
    <div className="swiper-container">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          type: 'bullets',
          bulletClass: 'custom-bullet',
          bulletActiveClass: 'custom-bullet-active',
          renderBullet: (index, className) => {
            return `<span class="${className}"></span>`;
          }
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {arr.map((e) => (
          <SwiperSlide key={e}>
            <div className="txt">
              <h1>{Lang[0].hero.mt[lang]}</h1>
              <p>{Lang[0].hero.st[lang]}</p>
            </div>
            <img src={bekzod} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SwiperComponent;