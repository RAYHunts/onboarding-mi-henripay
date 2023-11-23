import { Link } from "react-router-dom";
import s from "./Navbar.module.scss";
import MainLogo from "@/components/atoms/Svgs/MainLogo";
import Button from "@/components/atoms/Button/Button";

const Navbar = () => {
  return (
    <nav className={s._Wrapper}>
      <div className={s._Container}>
        <Link to="/" className={s._Logo}>
          <MainLogo />
        </Link>
        <div className={s._Links}>
          <Link to="/" className="white">How it works</Link>
          <Link to="/" className="white">How to get it</Link>
          <Link to="/" className="white">Testimonials</Link>
          <Link to="/" className="white">HenriPay Ticketing</Link>
          <Button>Contact Us</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
