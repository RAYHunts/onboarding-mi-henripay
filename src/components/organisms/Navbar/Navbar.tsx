import { Link } from "react-router-dom";
import MainLogo from "../../../assets/svgs/MainLogo";
import s from "./Navbar.module.scss";
import Button from "../../atoms/Button/Button";

const Navbar = () => {
  return (
    <nav className={s._Wrapper}>
      <div className={s._Container}>
        <div className={s._Logo}>
          <MainLogo />
        </div>
        <div className={s._Links}>
          {/* How it works
        How to get it
        Testimonials
        HenriPay Ticketing
        Contact Us */}
          <Link to="/">How it works</Link>
          <Link to="/">How to get it</Link>
          <Link to="/">Testimonials</Link>
          <Link to="/">HenriPay Ticketing</Link>
          <Button>Contact Us</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
