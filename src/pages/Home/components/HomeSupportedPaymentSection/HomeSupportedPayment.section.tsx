import clsx from "clsx";
import s from "./HomeSupportedPayment.module.scss";
import supportImage from "@/assets/images/supported-payment.webp";
import Button from "@/components/atoms/Button/Button";
import Bedge from "@/components/atoms/Bedge/Bedge";

import IdealLogo from "@/assets/images/logo/ideal.svg";
import VisaLogo from "@/assets/images/logo/visa.svg";
import MasterCardLogo from "@/assets/images/logo/mastercard.svg";
import AmexLogo from "@/assets/images/logo/amex.svg";
import BitcoinLogo from "@/assets/images/logo/bitcoin.svg";
import EthereumLogo from "@/assets/images/logo/ethereum.svg";
import TetherLogo from "@/assets/images/logo/tether.svg";
import SolanaLogo from "@/assets/images/logo/solana.svg";
import WechatLogo from "@/assets/images/logo/wechat.svg";
import GiropayLogo from "@/assets/images/logo/giropay.svg";
import BancontactLogo from "@/assets/images/logo/bancontact.svg";

const HomeSupportedPaymentSection = () => {
  return (
    <section className={s._Wrapper}>
      <h3 className="display-2 white">
        Supported Payment <br />
        methods
      </h3>
      <div className={clsx(s._Container, "container")}>
        <div className={clsx(s._Card)}>
          <div className={s._ImageWrapper}>
            <div className={s._LeftPayment}>
              <Bedge variant="black">Accepted FIAT Payment</Bedge>
              <div className={s._PaymentWrapper}>
                <div className={s._Payment}>
                  <img src={IdealLogo} alt="Ideal" width="72px" height="64px" title="Ideal" />
                </div>
                <div className={s._Payment}>
                  <img src={GiropayLogo} alt="Giropay" width="96px" height="42px" title="Giropay" />
                </div>
                <div className={s._Payment}>
                  <img src={BancontactLogo} alt="Bancontact" width="79px" height="56x" title="Bancontact" />
                </div>
                <div className={s._Payment}>
                  <img src={WechatLogo} alt="Wechat" width="116px" height="28px" title="Wechat" />
                </div>
                <div className={s._Payment}>
                  <img src={AmexLogo} alt="Amex" width="128px" height="74px" title="Amex" />
                </div>
                <div className={s._Payment}>
                  <img src={MasterCardLogo} alt="MasterCard" width="70px" height="54px" title="MasterCard" />
                </div>
                <div className={s._Payment}>
                  <img src={VisaLogo} alt="Visa" width="105px" height="32px" title="Visa" />
                </div>
              </div>
            </div>
            <div className={s._RightPayment}>
              <Bedge variant="black">Accepted Blockchain Payment</Bedge>
              <div className={s._PaymentWrapper}>
                <div className={s._Payment}>
                  <img src={BitcoinLogo} alt="Bitcoin" width="116px" height="24px" title="Bitcoin" />
                </div>
                <div className={s._Payment}>
                  <img src={EthereumLogo} alt="Ethereum" width="111px" height="28px" title="Ethereum" />
                </div>
                <div className={s._Payment}>
                  <img src={TetherLogo} alt="Tether" width="101px" height="33px" title="Tether" />
                </div>
                <div className={s._Payment}>
                  <img src={SolanaLogo} alt="Solana" width="106px" height="20px" title="Solana" />
                </div>
              </div>
            </div>
            <img src={supportImage} alt="Henripay" width="460px" height="306px" className={s._Image} />
          </div>
          <Button className={s._Button}>Integrate HenriPay</Button>
        </div>
        <span className={clsx(s._Circle, s._Right)}></span>
        <span className={clsx(s._Circle, s._Left)}></span>
      </div>
    </section>
  );
};

export default HomeSupportedPaymentSection;
