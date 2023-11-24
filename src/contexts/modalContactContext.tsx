

type ModalContactContext = {
    element: ReactNode 
    isOpen: boolean;
    trigger?: ReactNode;
};

const modalContactContext = createContext<ModalContactContext>({
    element: null,
    isOpen: false,
    trigger: null,
});

const useModalContact = () => {
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

const ModalContactProvider = ({ children }: { children: ReactNode }) => {
    const { isOpen, element, trigger } = useModalContact();

    return (
        <modalContactContext.Provider
            value={{
                isOpen,
                openModal,
                closeModal,
                element,
                trigger,
            }}
        >
            {children}
        </modalContactContext.Provider>
    );
};