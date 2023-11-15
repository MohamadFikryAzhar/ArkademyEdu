import Image from "next/image";
import person from "../../app/images/icons/person.svg";

const Hero = (props) => {
  return (
    <main className="w-3/5 max-xl:w-1/2 max-md:hidden min-h-full bg-[#E6EDF6] flex flex-col items-center justify-center relative">
      <div className='relative'>
        <Image src={person} alt="cloud" className="w-96 mt-8" width={1} height={1} priority />
      </div>
    </main>
  );
};

export default Hero;
