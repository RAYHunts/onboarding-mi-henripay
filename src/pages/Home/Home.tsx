
import Navbar from "@/components/organisms/Navbar/Navbar";
import s from "./Home.module.scss";
import HomeHowItWorksSection from "./Sections/HomeHowItWorks/HomeHowItWorks.section";
import Button from "@/components/atoms/Button/Button";
import IcChevronDown from "@/components/atoms/Icons/IcChevronDown";
import HeroBlobLeft from "@/components/atoms/Svgs/HeroBlobLeft";
import HeroBlobRight from "@/components/atoms/Svgs/HeroBlobRight";
import Footer from "@/components/organisms/Footer/Footer";
import HeroImage from "@/assets/images/hero.gif";


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
                    {/* <button>Use HenriPay</button> */}
                    {/* <button>More information</button> */}
                    <Button className="white" variant="ghost" endicon={<IcChevronDown />}>
                      More information
                    </Button>
                  </div>
                </div>
                <img src={HeroImage} alt="Henripay" width="642px" height="377px" />
              </div>
            </div>
            <HeroBlobLeft className={s._LeftBlob} />
            <HeroBlobRight className={s._RightBlob} />
          </div>
        </section>
        <section className={s._Features}>
          <h4>compatible with</h4>
        </section>
        <HomeHowItWorksSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
