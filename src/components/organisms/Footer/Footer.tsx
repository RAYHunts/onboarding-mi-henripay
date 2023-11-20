import { Link } from "react-router-dom";
import s from "./Footer.module.scss";
import MainLogo from "@/components/atoms/Svgs/MainLogo";
import IcInstagram from "@/components/atoms/Icons/IcInstagram";
import IcTwitter from "@/components/atoms/Icons/IcTwitter";
import IcLinkedIn from "@/components/atoms/Icons/IcLinkedIn";
const Footer = () => {
  return (
    <footer className={s._Wrapper}>
      <div className={s._Container}>
        <span className={s._LeftCircle}></span>
        <span className={s._RightCircle}></span>
        <div className={s._ContentContainer}>
          <div className={s._Content}>
            <div className={s._Logo}>
              <MainLogo width={282} />
            </div>
            <p className="white">
              You can now access 99% of your customers without cryptocurrency. We're Europe's #1 payment service that receives payments for web3 products and NFTs in local fiat. Our motivation is far-fetched; as entrepreneurs involved with
              web3, cryptocurrency and NFTs, we have suffered from payment glitches ourselves. Now we have created a market solution to solve this problem, HenriPay.
            </p>
            <div className={s._LinksAndSocials}>
              <div className={s._Links}>
                <Link to="/" className="small-1 white">
                  © 2022 HenriPay
                </Link>
                <Link to="/" className="small-1 white">
                  Disclaimer
                </Link>
                <Link to="/" className="small-1 white">
                  Terms & Conditions
                </Link>
                <Link to="/" className="small-1 white">
                  Privacy Policy
                </Link>
                <Link to="/" className="small-1 white">
                  Blogs
                </Link>
              </div>
              <div className={s._Socials}>
                <h6 className="white">Follow Us</h6>
                <div className={s._Icons}>
                  <Link to="/">
                    <IcInstagram />
                  </Link>
                  <Link to="/">
                    <IcTwitter />
                  </Link>
                  <Link to="/">
                    <IcLinkedIn />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
