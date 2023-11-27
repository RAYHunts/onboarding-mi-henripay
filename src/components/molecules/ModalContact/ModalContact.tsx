import clsx from "clsx";
import s from "./ModalContact.module.scss";
import { useRef, MouseEvent, useContext, useState } from "react";
import { ModalContactContext } from "../../../contexts/modalContactContext";
import Card from "@/components/atoms/Card/Card";
import MainLogo from "@/components/atoms/Svgs/MainLogo";
import Input from "@/components/atoms/Input/Input";
import Select from "@/components/atoms/Select/Select";
import Textarea from "@/components/atoms/Textarea/Textarea";
import IcCLoseRing from "@/components/atoms/Icons/IcCloseRing";
import Button from "@/components/atoms/Button/Button";
import IcCheckRing from "@/components/atoms/Icons/IcCheckRIng";

const ModalContact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { closeModal, isOpen } = useContext(ModalContactContext);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const handleClickOutside = (e: MouseEvent) => {
    if (e.target !== modalRef.current && !modalRef.current?.contains(e.target as Node)) {
      closeModal();
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      closeModal();
      setIsSubmitted(false);
    }, 1000);
  };

  const Options = ["Custom Payment Solution", "NFT Checkout", "Crypto Checkout", "Ticketing", "Others"];

  return (
    <div className={clsx(s._Wrapper, isOpen && s._Open)} onClick={(e) => handleClickOutside(e)}>
      {isSubmitted && (
        <Card className={s._SuccessContainer} variant="gradient">
          <div className={s._Content}>
            <IcCheckRing />
            <h1 className={s._Heading}>sent successfully</h1>
          </div>
        </Card>
      )}

      {!isSubmitted && (
        <Card className={s._Container} ref={modalRef} variant="gradient">
          <button className={s._CloseButton} onClick={closeModal}>
            <IcCLoseRing />
          </button>
          <div className={s._Content}>
            <MainLogo width={282} />
            <h1 className={s._Heading}>Get in touch with our specialists about your project.</h1>
            <form className={s._Form}>
              <Input label="Your name" required />
              <Input label="E-mail" required type="email" />
              <Input label="Phone" required type="tel" />
              <Select label="Service (Optional)" placeholder="Choose Here" options={Options} />
              <Textarea label="Message" required rows={5} placeholder="Search" className={s._Textarea} />
            </form>
            <Button className={s._Button} onClick={handleSubmit}>
              Send
            </Button>
          </div>
          <span className={s._TopLeftCircle}></span>
        </Card>
      )}
    </div>
  );
};

export default ModalContact;
