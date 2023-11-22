import HeroImage from "@/assets/images/hero.webm";

import Navbar from "@/components/organisms/Navbar/Navbar";
import Button from "@/components/atoms/Button/Button";
import IcChevronDown from "@/components/atoms/Icons/IcChevronDown";
import HeroBlobLeft from "@/components/atoms/Svgs/HeroBlobLeft";
import HeroBlobRight from "@/components/atoms/Svgs/HeroBlobRight";
import Footer from "@/components/organisms/Footer/Footer";

import HomeHowItWorksSection from "./components/HomeHowItWorksSection";
import HomeSupportedPaymentSection from "./components/HomeSupportedPaymentSection";
import HomeCompatiblesSection from "./components/HomeCompatiblesSection";
import HomeHowToGetItSection from "./components/HomeHowToGetItSection";
import HomeFeaturedInSection from "./components/HomeFeaturedInSection";
import HomeTestimonialSection from "./components/HomeTestimonialSection";

import s from "./Home.module.scss";

const Home = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <main className={s._Wrapper}>
        <section className={s._Section}>
          <div className={s._HeroWrapper}>
            <div className={s._Container}>
              <div className={s._Hero}>
                <div className={s._HeroText}>
                  <h1 className="secondary display-1">
                    Selling NFTs
                    <br />
                    <span className="white">Made Easy As a Pie.</span>
                  </h1>
                  <p className="white subheading-1">
                    Selling NFTs is not easy. 99% of your potential customers don't have cryptocurrencies at hand and thus drop out. Until now, Because with HenriPay you can sell NFTs to anyone - with their preferred local payment method.
                    Imagine how your market potential just multiplied!
                  </p>
                  <div className={s._Buttons}>
                    <Button>Use HenriPay</Button>
                    <Button className="white" variant="ghost" endicon={<IcChevronDown />}>
                      More information
                    </Button>
                  </div>
                </div>
                <video loop muted autoPlay width={642} height={377}>
                  <source type="video/webm" src={HeroImage} />
                </video>
              </div>
            </div>
            <HeroBlobLeft className={s._LeftBlob} />
            <HeroBlobRight className={s._RightBlob} />
          </div>
        </section>
        <HomeCompatiblesSection />
        <HomeHowItWorksSection />
        <HomeSupportedPaymentSection />
        <HomeHowToGetItSection />
        <HomeFeaturedInSection />
        <HomeTestimonialSection />
        <section className={s._Contact}>
          <h5 className="display-2 white">
            Use HenriPay for your <br />
            business.
          </h5>
          <Button>Contact Us</Button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
