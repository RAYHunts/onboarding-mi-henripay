// import React, { ReactNode, useRef } from 'react';
// import s from './Modal.module.scss';
// import clsx from 'clsx';

// interface ModalProps {
//     open: boolean;
//     onClose: () => void;
//     children: ReactNode;
//     trigger?: ReactNode;
// }

// const Modal = ({ open, onClose, children }: ModalProps) => {

//     const modalRef = useRef<HTMLDivElement>(null)

//     const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
//         if (modalRef.current === e.target) {
//             onClose()
//         }
//     }

//     return (
//         React.createElement(
//             'div',
//             {
//                 className: clsx(s._Wrapper, open && s._Open),
//                 ref: modalRef,
//                 onClick: handleClose
//             },
//             React.createElement(
//                 'div',
//                 {
//                     className: s._Content
//                 },
//                 children
//             )
//         )
//     )
// }

// export default Modal;

import React, { ReactNode, useRef } from 'react';
import s from './Modal.module.scss';
import clsx from 'clsx';

interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
    trigger?: ReactNode;
}

const Modal = ({ open, onClose, children, trigger }: ModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null);

    const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
        if (modalRef.current === e.target) {
            onClose();
        }
    };

    return (
        <>
            {trigger && React.cloneElement(trigger as React.ReactElement, { onClick: onClose })}
            {open && (
                <div className={clsx(s._Wrapper, open && s._Open)} ref={modalRef} onClick={handleClose}>
                    <div className={s._Content}>{children}</div>
                </div>
            )}
        </>
    );
};

export default Modal;
