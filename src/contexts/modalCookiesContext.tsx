import ModalCookies from "@/components/molecules/ModalCookies/ModalCookies";
import { createContext, ReactNode, useEffect, useState } from "react";

type ModalCookiesContextData = {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
};

const ModalCookiesContext = createContext<ModalCookiesContextData>({} as ModalCookiesContextData);

const ModalCookiesProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    
    useEffect(() => {
        const cookies = document.cookie;
        const hasCookies = cookies.includes("cookies=true");
        if (!hasCookies) {
            openModal();
        }
    }, []);


    return (
        <ModalCookiesContext.Provider value={{ isOpen, openModal, closeModal }}>
            {children}
            <ModalCookies />
        </ModalCookiesContext.Provider>
    );
}

export { ModalCookiesContext, ModalCookiesProvider };