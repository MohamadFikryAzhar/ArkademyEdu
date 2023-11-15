import Link from 'next/link';
import 'tailwindcss/tailwind.css';

const ResetPasswordOtp = () => {
  return (
    <div className="forgot-pass-content">
      <div className="row col-10 col-md-12 col-lg-12">
        <div className="col-12 col-md-6">
          {/* Hapus elemen "person" */}
        </div>
        <div className="col-12 col-md-6 reset-form-container">
          <div className="flex items-center justify-center flex-col text-center">
            <h1 className="text-3xl font-bold">Reset Password</h1>
            <p className="text-sm mb-4">Enter verification code we just sent to your email address.</p>
          </div>
          <div className="mb-6 text-center">
            <div className="flex justify-center flex-col">
                <div className="flex justify-center flex-row mb-6">
                    <input className="m-2 text-center otp bg-[#FFF] w-12 h-14 border rounded" type="text" id="first" maxLength="1" />
                    <input className="m-2 text-center otp bg-[#FFF] w-12 h-14 border rounded" type="text" id="second" maxLength="1" />
                    <input className="m-2 text-center otp bg-[#FFF] w-12 h-14 border rounded" type="text" id="third" maxLength="1" />
                    <input className="m-2 text-center otp bg-[#FFF] w-12 h-14 border rounded" type="text" id="fourth" maxLength="1" />
                </div>
                    <p className="text-sm reset-description-text">Didn't receive code?{' '}    
                    <Link href="/Resend" className="text-blue-500 hover:underline">Resend</Link>
                    </p>
              <Link href="../../reset-password/new"className="btn btn-primary-color r-5px my-3 w-full py-2 text-white text-center block rounded-md bg-[#5784BA] hover:bg=[#ADA9BB] transition duration-300 ease-in-out">
                  Verify
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordOtp;
