// import LoginForm from "@/components/Auth/LoginForm";
import LoginForm from "@/components/Auth/LoginForm";
import 'tailwindcss/tailwind.css';

export default function Login() {
  return (
    <main className="flex min-h-screen flex-row justify-center items-center bg-blue-100">
      <div className="w-2/5 max-xl:w-1/2 max-md:w-full min-h-full flex flex-col justify-center relative px-10 max-sm:px-7 py-10">

        <LoginForm />
      </div>
    </main>
  );
}
