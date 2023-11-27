import Button from "@/components/atoms/Button/Button";
import MainLogo from "@/components/atoms/Svgs/MainLogo";
import { Link } from "react-router-dom";
import { useAuthentication } from "../../../hooks/useAuthentication";
import { useContext } from "react";
import s from "./Navbar.module.scss";
import { ModalContactContext } from "../../../contexts/modalContactContext";

const Navbar = () => {
  const { isAuthenticated } = useAuthentication();
  const {  openModal } = useContext(ModalContactContext);
  return (
    <nav className={s._Wrapper}>
      <div className={s._Container}>
        <Link to="/" className={s._Logo}>
          <MainLogo />
        </Link>
        <div className={s._Links}>
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
