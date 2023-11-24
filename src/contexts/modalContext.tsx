import { ReactNode, createContext, useEffect, useState } from "react";

type ModalContext = {
    element: ReactNode 
    isOpen: boolean;
    trigger?: ReactNode;
};


const modalContext = createContext<ModalContext>({
    element: null,
    isOpen: false,
    trigger: null,
});

const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [element, setElement] = useState<ReactNode>(null);
    const [trigger, setTrigger] = useState<ReactNode>(null);

    const openModal = (element: ReactNode, trigger?: ReactNode) => {
        setIsOpen(true);
        setElement(element);
        setTrigger(trigger);
    };

    const closeModal = () => { 
        setIsOpen(false);
        setElement(null);
        setTrigger(null);
    };

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                closeModal();
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen]);

    return {
        isOpen,
        openModal,
        closeModal,
        element,
        trigger,
    };
}

const ModalProvider = ({ children }: { children: ReactNode }) => {
    const { isOpen, element, trigger } = useModal();

    return (
        <modalContext.Provider
            value={{
                isOpen,
                element,
                trigger,
            }}
        >
            {children}
        </modalContext.Provider>
    );
};

export { ModalProvider, modalContext };
