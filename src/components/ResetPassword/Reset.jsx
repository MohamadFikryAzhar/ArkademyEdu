import Link from 'next/link';
import 'tailwindcss/tailwind.css';

const ResetPassword = () => {
  return (
    <div className="forgot-pass-content">
      <div className="row col-10 col-md-12 col-lg-12">
        <div className="col-12 col-md-6">
          {/* Hapus elemen person */}
        </div>
        <div className="col-12 col-md-6 reset-form-container">
          <div className="flex items-center justify-center flex-col text-center">
            <h1 className="text-3xl font-bold">Reset Password</h1>
            <p className="text-sm mb-4">Enter your email address linked to this account.</p>
            <p className="text-sm mb-4">We will send you the verification code to reset your password</p>
          </div>
          <div className="form-group">
            <label htmlFor="email" className="block text-sm font-medium text-[#ADA9BB]">Email</label>
            <input type="text" className="w-full mt-1 p-2 border rounded bg-white" name="userNameOrEmail" required />
            <Link href="../../reset-password/otp" className="btn btn-primary-color mt-4 w-full py-2 text-white text-center block rounded-md bg-[#5784BA] transition duration-300 ease-in-out">
                Send
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
