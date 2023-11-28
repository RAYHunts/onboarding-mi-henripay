import clsx from "clsx";
import s from "./ModalCookies.module.scss";
import { useRef, MouseEvent, useContext } from "react";
import { ModalCookiesContext } from "../../../contexts/modalCookiesContext";
import Card from "@/components/atoms/Card/Card";
import IcCookies from "@/components/atoms/Icons/IcCookies";
import Button from "@/components/atoms/Button/Button";
import IcCLoseRing from "@/components/atoms/Icons/IcCloseRing";

const ModalCookies = () => {
  const { closeModal, isOpen } = useContext(ModalCookiesContext);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const handleClickOutside = (e: MouseEvent) => {
    if (e.target !== modalRef.current && !modalRef.current?.contains(e.target as Node)) {
      closeModal();
    }
  };

  const onAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    closeModal();
  };

  return (
    <div className={clsx(s._Wrapper, isOpen && s._Open)} onClick={(e) => handleClickOutside(e)}>
      <Card className={s._Container} ref={modalRef} variant="gradient">
        <button className={s._CloseButton} onClick={closeModal}>
          <IcCLoseRing />
        </button>
        <div className={s._Content}>
          <IcCookies />
          <h1 className={s._Heading}>COOKIES!</h1>
          <p className="body-1 white text-center">We use cookies to collect data to improve your experience. Select "Accept All" to allow them to be used.</p>
          <Button className={s._Button} onClick={onAccept}>
            Accept all cookies
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ModalCookies;
