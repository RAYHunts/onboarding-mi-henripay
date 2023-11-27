import clsx from "clsx";
import s from "./ModalCookies.module.scss";
import { useRef, MouseEvent, useEffect, useContext } from "react";
import { ModalCookiesContext } from "../../../contexts/modalCookiesContext";
import Card from "@/components/atoms/Card/Card";

const ModalCookies = () => {
  const { closeModal, isOpen } = useContext(ModalCookiesContext);
  const modalRef = useRef(null);
  const handleClickOutside = (e: MouseEvent) => {
    console.log(e.target !== modalRef.current);
    if (e.target !== modalRef.current) {
      closeModal();
    }
  };

  return (
    <div className={clsx(s._Wrapper, isOpen && s._Open)} onClick={(e) => handleClickOutside(e)}>
      <Card className={s._Container} ref={modalRef} variant="gradient">
        <div className={s._Content}>
          <h1 className={s._Heading}>Cookies Policy</h1>
          <p className={s._Paragraph}>
            We use cookies to improve your experience on our site. To find out more, read our{" "}
            <a href="/privacy-policy" className={s._Link}>
              privacy policy
            </a>
            .
          </p>
          <button className={s._Button} onClick={closeModal}>
            Got it!
          </button>
        </div>
      </Card>
    </div>
  );
};

export default ModalCookies;
