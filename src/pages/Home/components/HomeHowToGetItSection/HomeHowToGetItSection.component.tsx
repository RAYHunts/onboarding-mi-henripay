import { useContext } from "react";
import Button from "@/components/atoms/Button/Button";
import s from "./HomeHowToGetItSection.module.scss";
import howToGet from "@/assets/images/how-to-get.webp";
import vrMan from "@/assets/images/african-with-vr.webp";
import henripayLogo from "@/assets/images/logo/henripay.svg";
import advantages from "@/assets/images/advantages.webp";
import coins from "@/assets/images/coins.webp";
import multiChain from "@/assets/images/multi-chain.webp";
import { ModalContactContext } from "../../../../contexts/modalContactContext";

const HomeHowToGetItSection = () => {
  const { openModal } = useContext(ModalContactContext);
  return (
    <section className={s._Wrapper} id="how-to-get-it">
      <span className={s._LeftCircleOut}></span>
      <span className={s._RightCircleOut}></span>

      <div className={s._Container}>
        <div className="container">
          <div className={s._HowToGetIt}>
            <div className="text-center">
              <h2 className="white display-2">How to get it</h2>
              <p className="white">
                HenriPay is easy to integrate on your website to receive payments in local payment methods for the NFTs you sell. Contact us <br /> now and learn more about the possibilities for your business.
              </p>
            </div>
            <div className={s._Content}>
              <img src={howToGet} alt="How to get it" width="604px" height="379px" />
              <div className={s._CardWrapper}>
                <div className={s._Card}>
                  <div className={s._CardContent}>
                    <h4 className="h1 white">Buy NFTs or Crypto simple and with the payment method YOU are most comfortable with</h4>
                    <p className="white">Contact us now!</p>
                    <Button onClick={openModal}>Contact Us</Button>
                  </div>
                  <img src={vrMan} alt="vr-man" width="335px" height="274px" className={s._VrMan} />
                  <img src={henripayLogo} alt="HenriPay" width="66px" height="60px" className={s._HenriPayLogo} />
                </div>

                <span className={s._LowerEllipse}></span>
                <span className={s._UpperEllipse}></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={s._Container}>
        <div className="container">
          <div className={s._Advantages}>
            <img src={advantages} alt="Advantages" width="484px" height="786px" className={s._AdvantagesImage} />
            <div className={s._TextContent}>
              <h2 className="h4">Our advantages</h2>
              <h4 className="white display-2">
                HenriPay <br />
                Advantages
              </h4>
              <ul className={s._List}>
                <li>Convert more customers</li>
                <li>Target Traditional Customer</li>
                <li>Full support and guidance included</li>
                <li>Whitelabel & Branding in your style</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={s._Container}>
        <div className="container">
          {/* <div className={s._SellUrWeb3}>
            <div className={s._CardWrapper}>
              <div className={s._Card}>
                <div className={s._TextContent}>
                  <h4 className="display-2 white">Sell your web3 products to anyone.</h4>
                  <p className="white">
                    Web3 is changing the way products are marketed. As a leading payment service provider with software specifically designed for web3 payments, we support suppliers of web3 products with a prompt payment solution that does
                    not reject any payment method (local or coins).
                  </p>
                </div>
              </div>

              <span className={s._LeftCircle}></span>
              <span className={s._RightCircle}></span>
            </div>
            <img src={coins} alt="Coins" width="470px" height="350px" className={s._Coins} />
          </div> */}
          <div className={s._SellUrWeb3}>
              <div className={s._Card}>
                <span className={s._LeftCircle}></span>
                <span className={s._RightCircle}></span>
              </div>
              <div className={s._Content}>
                <div className={s._TextContent}>
                  <h4 className="display-2 white">Sell your web3 products to anyone.</h4>
                  <p className="white">
                    Web3 is changing the way products are marketed. As a leading payment service provider with software specifically designed for web3 payments, we support suppliers of web3 products with a prompt payment solution that does
                    not reject any payment method (local or coins).
                  </p>
                </div>
                <img src={coins} alt="Coins" width="470px" height="350px" className={s._Coins} />
              </div>
            {/* <div className={s._CardWrapper}>
            </div> */}
          </div>
        </div>
      </div>
      <div className={s._Container}>
        <div className="container">
          <div className={s._MultiChain}>
            <div className={s._CardWrapper}>
              <div className={s._Card}>
                <img src={multiChain} alt="Multi Chain" width="430px" height="383px" className={s._MultiChainImage} />
                <div className={s._TextContent}>
                  <h4 className="white display-2">
                    Multi-chain, <br /> Multi-payments, everything is possible with HenriPay.
                  </h4>
                  <p className="white">Give your customers the ability to buy with different blockchains and most of the traditional payment methods.</p>
                </div>
              </div>
              <span className={s._LeftCircle}></span>
              <span className={s._RightCircle}></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHowToGetItSection;
