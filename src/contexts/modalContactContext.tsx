import ModalContact from "@/components/molecules/ModalContact/ModalContact";
import { createContext, ReactNode, useState } from "react";

type ModalContactContextData = {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
};

const ModalContactContext = createContext<ModalContactContextData>({} as ModalContactContextData);

const ModalContactProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <ModalContactContext.Provider value={{ isOpen, openModal, closeModal }}>
            {children}
            <ModalContact />
        </ModalContactContext.Provider>
    );
}

export { ModalContactContext, ModalContactProvider };