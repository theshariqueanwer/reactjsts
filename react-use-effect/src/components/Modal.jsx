import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

function Modal({ open, onClose, children }) {
  // console.log('Modal Component Run');
  const dialog = useRef();

  // if(open) {
  //   dialog.current.showModal();
  // } else {
  //   dialog.current.close();
  // }

  useEffect(() => {
    if(open) {
      dialog.current.showModal();
      // console.log('Modal Open');
    } else {
      dialog.current.close();
      // console.log('Modal Close');
    }
  }, [open])

  return createPortal(
    // <dialog className="modal" ref={dialog} open={open}>
    <dialog className="modal" ref={dialog} onClose={onClose} >
      {/* {children} */}
      {open ? children : null}
    </dialog>,
    document.getElementById('modal')
  );
}

export default Modal;









































// import { forwardRef, useImperativeHandle, useRef } from 'react';
// import { createPortal } from 'react-dom';

// const Modal = forwardRef(function Modal({ children }, ref) {
//   const dialog = useRef();

//   useImperativeHandle(ref, () => {
//     return {
//       open: () => {
//         dialog.current.showModal();
//       },
//       close: () => {
//         dialog.current.close();
//       },
//     };
//   });

//   return createPortal(
//     <dialog className="modal" ref={dialog}>
//       {children}
//     </dialog>,
//     document.getElementById('modal')
//   );
// });

// export default Modal;
