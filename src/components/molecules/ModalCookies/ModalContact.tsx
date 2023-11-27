import clsx from "clsx";
import s from "./ModalContact.module.scss";
import { useRef, MouseEvent, useEffect, useContext } from "react";
import { ModalContactContext } from "../../../contexts/modalContactContext";


const ModalContact = () => {
    const {closeModal, isOpen} = useContext(ModalContactContext);
  const modalRef = useRef(null);
  const handleClickOutside = (e: MouseEvent) => {
    console.log(e.target !== modalRef.current);
    if (e.target !== modalRef.current) {
      closeModal();
    }
  };

  useEffect(() => {
    console.log("isOpen", isOpen);
  }, [isOpen]);

  return (
    <div className={clsx(s._Wrapper, isOpen && s._Open)} onClick={(e) => handleClickOutside(e)}>
      <div className={s._Content} ref={modalRef}>
        I am a modal
      </div>
    </div>
  );
};

export default ModalContact;
