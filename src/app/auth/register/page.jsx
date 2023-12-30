"use client"
import RegisterForm from '@/components/Auth/RegisterForm';
import 'tailwindcss/tailwind.css';
import { Provider } from 'react-redux';
import store from '@/Redux/Store/Store';

export default function Register() {
  return (
    <Provider store={store}>
      <main className="flex min-h-screen flex-row justify-center items-center bg-blue-100">
        <div className="w-2/5 max-xl:w-1/2 max-md:w-full min-h-full flex flex-col justify-center relative px-10 max-sm:px-7 py-10">
          <RegisterForm />
        </div>
      </main>
    </Provider>
  );
}
