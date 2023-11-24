import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import s from "./HomeFeaturedInSection.module.scss";
import IcShield from "@/components/atoms/Icons/IcShield";
import IcTag from "@/components/atoms/Icons/IcTag";
import ForbesImage from "@/assets/images/forbes-logo.webp";

const HomeFeaturedInSection = () => {
  const slides = ["Forbes", "TechCrunch", "Bloomberg", "Yahoo", "CoinDesk", "Insider", "CoinTelegraph", "Coinbase", "CoinMarket", "CoinGecko", "CoinList"];

  return (
    <section className={s._Wrapper}>
      <h4 className="display-2 text-center white">Featured in</h4>

      <div className={s._Container}>
        <Swiper
          slidesPerView="auto"
          centeredSlides
          spaceBetween={70}
          loop
          className={s._Slider}
          grabCursor
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
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
