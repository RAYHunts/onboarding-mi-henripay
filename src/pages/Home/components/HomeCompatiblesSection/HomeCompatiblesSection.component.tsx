import { useEffect, useRef } from "react";
import avalanche from "@/assets/images/logo/avalanche.svg";
import applePay from "@/assets/images/logo/apple-pay.svg";
import ideal from "@/assets/images/logo/ideal.svg";
import masterCard from "@/assets/images/logo/mastercard-grayscale.svg";
import visa from "@/assets/images/logo/visa.svg";
import banContact from "@/assets/images/logo/bancontact-grayscale.svg";
import giropay from "@/assets/images/logo/giropay-grayscale.svg";
import polygon from "@/assets/images/logo/polygon-grayscale.svg";
import ethereum from "@/assets/images/logo/ethereum-grayscale.svg";
import s from "./HomeCompatiblesSection.module.scss";

const HomeCompatiblesSection = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const firstElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parentSelector = parentRef.current;
    const clone = parentSelector.innerHTML;
    parentSelector?.insertAdjacentHTML("beforeend", clone);
    parentSelector?.insertAdjacentHTML("beforeend", clone);
  }, []);
  return (
    <section className={s._Compatibles}>
      <h4>compatible with</h4>
      <div className={s._CompatiblesWrapper} ref={parentRef}>
        <div className={s._Compatible} ref={firstElementRef}>
          <img src={ideal} alt="Ideal" width="49px" height="43px" title="Ideal" />
        </div>
        <div className={s._Compatible}>
          <img src={masterCard} alt="MasterCard" width="63px" height="49px" title="MasterCard" />
        </div>
        <div className={s._Compatible}>
          <img src={visa} alt="Visa" width="92px" height="58px" title="Visa" />
        </div>
        <div className={s._Compatible}>
          <img src={banContact} alt="Bancontact" width="76px" height="54px" title="Bancontact" />
        </div>
        <div className={s._Compatible}>
          <img src={giropay} alt="Giropay" width="98px" height="45px" title="Giropay" />
        </div>
        <div className={s._Compatible}>
          <img src={applePay} alt="Apple Pay" width="97px" height="40px" title="Apple Pay" />
        </div>
        <div className={s._Compatible}>
          <img src={avalanche} alt="Avalanche" width="134px" height="35px" title="Avalanche" />
        </div>
        <div className={s._Compatible}>
          <img src={polygon} alt="Polygon" width="168px" height="35px" title="Polygon" />
        </div>
        <div className={s._Compatible}>
          <img src={ethereum} alt="Ethereum" width="172px" height="48px" title="Ethereum" />
        </div>
      </div>
    </section>
  );
};

export default HomeCompatiblesSection;
