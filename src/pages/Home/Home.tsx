import HeroBlobLeft from "../../assets/svgs/HeroBlobLeft";
import HeroBlobRight from "../../assets/svgs/HeroBlobRight";
import HeroImage from "../../assets/images/hero.gif";
import s from "./Home.module.scss";
import Button from "../../components/atoms/Button/Button";
import Navbar from "../../components/organisms/Navbar/Navbar";
import IcCaretDown from "../../assets/icons/IcChevronDown";
const Home = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <main>
        <section>
          <div className={s._HeroWrapper}>
            <div className={s._Backdrop}>
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
                      <Button className="white" variant="ghost" endicon={<IcCaretDown/>}>More information</Button>
                    </div>
                  </div>
                  <img src={HeroImage} alt="Henripay" width="642px" height="377px" />
                </div>
              </div>
            </div>
            <HeroBlobLeft className={s._LeftBlob} />
            <HeroBlobRight className={s._RightBlob} />
          </div>
        </section>
        <section className={s._Features}>
          <h4>compatible with</h4>
        </section>
      </main>
    </div>
  );
};

export default Home;
