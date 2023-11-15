import Link from 'next/link';
// import Modal from 'react-modal';
import 'tailwindcss/tailwind.css';
// import Image from 'next/image';
// import checklist from "../../app/images/icons/password-checklist.png"

// const customStyles = {
//   content: {
//     top: '0%',
//     right: '0%',
//     bottom: '0%',
//     left: '50%',
//     backgroundColor: 'rgba(0,0,0,0.75)'
//   },
//   overlay: {
//     backgroundColor: 'transparent'
//   }
// };

const ResetPasswordNew = () => {
//   const showModal = typeof window !== 'undefined' && window.location.href.includes('showModal=true');

  return (
    <div className="forgot-pass-content">
      <div className="row col-10 col-md-12 col-lg-12">
        <div className="col-12 col-md-6">
          {/* Hapus elemen "person" */}
        </div>
        <div className="col-12 col-md-6 reset-form-container">
          {/* <Modal isOpen={showModal} shouldCloseOnOverlayClick={false} onRequestClose={() => window.location.href = '/reset-password/new'}>
            <div className="d-flex items-center justify-center flex-col text-center">
              <h1 className="text-white">Password changed!</h1>
              <Image src={checklist} alt="Success" />
              <Link href="../../auth/login">
                <h2 className="text-white text-link">Login to your account</h2>
              </Link>
            </div>
          </Modal> */}
          <div className="d-flex items-center justify-center flex-col text-center">
            <h1 className="text-3xl font-bold">Create New Password</h1>
            <p className="text-sm mb-4">Your new password must be different <br /> from the previously used password</p>
          </div>
          <div className="form-group">
            <div className="password-container">
              <label htmlFor="password" className="block text-sm font-semibold text-gray-600">Password</label>
              <input type="password" className="w-full mt-1 p-2 border rounded" name="password" required id="password" />
              <label htmlFor="new-password" className=" mt-8 block text-sm font-semibold text-gray-600">New Password</label>
              <input type="password" className="w-full mt-1 p-2 border rounded" name="password" required id="new-password" />
            </div>
            <Link href="../../auth/login" className="btn btn-primary-color mt-4 w-full py-2 text-white text-center block rounded-md bg-[#5784BA] transition duration-300 ease-in-out">Create</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordNew;
