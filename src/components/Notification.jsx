import React, { useState } from 'react';
import Modal from 'react-modal';
import close from "../app/images/icons/close-notification-icon.png";
import notif from "../app/images/icons/notif-icon-1.png";
import black from "../app/images/icons/notification-icon-black.svg";
import Image from 'next/image';

// const customStyles = {
//   content: {
//     position: 'absolute',
//     overflow: 'auto',
//     top: '2%',
//     right: '38%',
//     bottom: '0%',
//     left: '22%',
//     borderRadius: '10px',
//     backgroundColor: 'rgba(87,132,186,1)',
//   },
//   overlay: {
//     position: 'fixed',
//     backgroundColor: 'rgb(230,237,246)',
//   },
// };

function Notifications() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
      >
        <span>
          <Image
            onClick={() => setModalIsOpen(false)}
            className="cursor-pointer"
            align="right"
            src={close}
            alt="close"
          />
        </span>
        <div className="flex justify-content-center">
          <span className="text-color-3 notif-text">Notifications</span>
        </div>
        <div>
          <span className="text-color-3">Today</span>
          <div className="flex flex-row mt-4 items-center justify-between">
            <span className="text-content mx-4">
              <Image alt="notif" src={notif} />
            </span>
            <span className="text-color-3 mx-4">
              There are 10 news updates for today. Don’t miss it!
            </span>
            <span className="text-color-3 mx-4">2 min </span>
          </div>
        </div>
      </Modal>
      <Image
        onClick={() => setModalIsOpen(true)}
        className="cursor-pointer"
        align="right"
        src={black}
        alt=""
      />
    </>
  );
}

export default Notifications;
