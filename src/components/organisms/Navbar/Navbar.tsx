import Button from "@/components/atoms/Button/Button";
import IcBars from "@/components/atoms/Icons/IcBars";
import MainLogo from "@/components/atoms/Svgs/MainLogo";
import clsx from "clsx";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ModalContactContext } from "../../../contexts/modalContactContext";
import { useAuthentication } from "../../../hooks/useAuthentication";
import s from "./Navbar.module.scss";

const Navbar = () => {
  const { isAuthenticated } = useAuthentication();
  const { openModal } = useContext(ModalContactContext);
  const [isOpened, setIsOpened] = useState(false);
  return (
    <nav className={s._Wrapper}>
      <div className={s._Container}>
        <Link to="/" className={s._Logo}>
          <MainLogo />
        </Link>
        <button className={s._Hamburger} onClick={() => setIsOpened(!isOpened)}>
          <IcBars />
        </button>
        <div className={clsx(s._Links, isOpened && s._Open)}>
          <a href="./#how-it-works" className="white">How it works</a>
          <a href="./#how-to-get-it" className="white">How to get it</a>
          <a href="./#testimonial" className="white">Testimonials</a>
          {isAuthenticated && <Link to="/logout" className="white">Logout</Link>}
          {!isAuthenticated && <Link to="/login" className="white">Login</Link>}
          <Button onClick={() => openModal()}>Contact Us</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
