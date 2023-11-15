import Image from "next/image";
import Hero from "@/components/Auth/Hero";
import LoginForm from "@/components/Auth/LoginForm";
import back from "../images/icons/back-arrow-icon.svg";

const Page = () => {
  return (
    <main className="flex min-h-screen flex-row relative">
      <Image src={back} alt="back-icon" className="w-10 absolute top-0 left-0 mt-4 ml-4 z-10" width={1} height={1} />
      <Hero />
      <div className='w-2/5 max-xl:w-1/2 max-md:w-full min-h-full flex flex-col justify-center relative px-10 max-sm:px-7 py-10'>
        <div className='flex flex-row max-sm:flex-col max-sm:py-5 py-10 items-center max-sm:justify-center gap-3'>
        </div>
        <LoginForm />
      </div>
    </main>
  );
};

export default Page;
