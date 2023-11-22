import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import Swiper from "swiper";
// import { register } from "swiper/element/bundle";
// // register Swiper custom elements
// import { Navigation, Pagination } from "swiper/modules";
import s from "./HomeFeaturedInSection.module.scss";
import IcShield from "@/components/atoms/Icons/IcShield";
import IcTag from "@/components/atoms/Icons/IcTag";
import ForbesImage from "@/assets/images/forbes-logo.webp";

// register();
const HomeFeaturedInSection = () => {
  const slides = ["Forbes", "TechCrunch", "Bloomberg", "Yahoo", "CoinDesk", "Insider", "CoinTelegraph", "Coinbase", "CoinMarket", "CoinGecko", "CoinList"];

  return (
    <section className={s._Wrapper}>
      <h4 className="display-2 text-center white">Featured in</h4>

      <div className={s._Container}>
        {/* <div className={s._Slider}>
          {slides.map((slide, index) => (
            <div className={clsx(s._Slide, activeSlide === index && s._Active)} onClick={() => setActiveSlide(index)}>
              <div className={s._SlideContent}>
                <div className={s._SlideImage}>
                  <img src={ForbesImage} alt="Forbes" width="100%" height="100%" />
                </div>
                <h3>{slide}</h3>
              </div>

              <IcShield />
              <IcTag />
            </div>
          ))}
        </div> */}

        <Swiper slidesPerView="auto" centeredSlides spaceBetween={70} loop className={s._Slider} grabCursor autoplay={{ delay: 2500 }}>
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className={s._SlideContent}>
                <div className={s._SlideImage}>
                  <img src={ForbesImage} alt="Forbes" width="100%" height="100%" />
                </div>
                <h3>{slide}</h3>
              </div>
              <IcShield />
              <IcTag />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <div className={s._Slider}>
          <swiper-container slides-per-view="7" loop="true" space-between="70" grab-cursor="true" centered-slides="true" autoplay-delay="2500">
            {slides.map((slide, index) => (
              <swiper-slide key={index}>
                <div className={s._SlideContent}>
                  <div className={s._SlideImage}>
                    <img src={ForbesImage} alt="Forbes" width="100%" height="100%" />
                  </div>
                  <h3>{slide}</h3>
                </div>
                <IcShield />
                <IcTag />
              </swiper-slide>
            ))}
          </swiper-container>
        </div> */}
        <div className="container">
          <div className={s._Border}>
            <span className={s._Accent}></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFeaturedInSection;
