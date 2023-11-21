import Button from "@/components/atoms/Button/Button";
import s from "./HomeHowToGetItSection.module.scss";
import howToGet from "@/assets/images/how-to-get.webp";
import vrMan from "@/assets/images/african-with-vr.webp";

const HomeHowToGetItSection = () => {
  return (
    <section className={s._Wrapper}>
      <div className="container">
        <h2 className="white display-2">How to get it</h2>
        <p className="white">
          HenriPay is easy to integrate on your website to receive payments in local payment methods for the NFTs you sell. Contact us <br /> now and learn more about the possibilities for your business.
        </p>
        <div className={s._Content}>
          <img src={howToGet} alt="How to get it" width="604px" height="379px" />
          <div className={s._Card}>
            <div className={s._CardContent}>
              <h4 className="h1 white">Buy NFTs or Crypto simple and with the payment method YOU are most comfortable with</h4>
              <h5 className="white">Contact us now!</h5>
              <Button>Contact Us</Button>
            </div>
            <img src={vrMan} alt="vr-man" width="335px" height="274px"  className={s._VrMan}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHowToGetItSection;
