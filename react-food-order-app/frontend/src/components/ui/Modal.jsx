import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

function Modal({ children, open, onClose, className = "" }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;

    if (open) {
      modal.showModal();
    }
    // () => {         // this way we can not write the cleanup function
    //     return modal.close();
    // }
    return () => {
      modal.close();
    };
  }, [open]);

  return createPortal(
    <dialog className={`modal ${className}`} ref={dialog} onClose={onClose} >
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
