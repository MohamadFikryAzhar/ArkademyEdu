import Link from "next/link";
import 'tailwindcss/tailwind.css';
import Image from "next/image";
import reveal from "../../app/images/icons/reveal-icon.svg"
import google from "../../app/images/icons/google-icon.svg"

export default function LoginForm() {
    return (
        <div className="container mx-auto p-4">
            <div className="lg:w-full md:w-full sm:w-1/2">
                <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
                <form>
                    <div className="mb-4">
                        <label htmlFor="userName" className="block text-sm font-semibold text-gray-600">Username or Email</label>
                        <input type="text" className="w-full mt-1 p-2 border rounded bg-white" name="userNameOrEmail" required />
                    </div>
                    <div className="mb-4">
                        <div className="relative">
                            <label htmlFor="password" className="block text-sm font-semibold text-gray-600">Password</label>
                            <input type="password" className="w-full mt-1 p-2 border rounded" name="password" required />
                        </div>
                    </div>

                    <Link href="/reset-password" className="block text-sm text-black-500 mt-2 mb-2 text-end hover:text-white">Forgot password?</Link>

                    <div className="mb-4">
                        <button className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600" type="submit">Login</button>
                    </div>

                    <Link href="/fasilitator" className="w-full p-2 bg-gray-300 text-black rounded hover:bg-gray-500 flex items-center justify-center">
                        <Image src={google} alt="google" className="w-6 h-6 mr-1"/> Login with Google
                    </Link>

                    <div className="text-center mt-4">
                        <span className="text-sm text-gray-600">New user? </span>
                        <Link href="../../auth/register" className="text-blue-500">Register</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
