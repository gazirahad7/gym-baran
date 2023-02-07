import Image from "next/image";
import play from "../assets/images/play.svg";
export const BtnSmall = () => {
  return (
    <button
      type="button"
      class="text-white my-btn w-24 text-bold hover:bg-[#6765f0]  focus:outline-none  font-medium rounded-lg text-sm px-5 py-3.5 text-center mr-2 mb-2 drop-shadow-xl"
    >
      Log in
    </button>
  );
};
export const BtnMedium = () => {
  return (
    <button
      type="button"
      class="bg-white text-black text-bold   flex justify-between outline outline-1 outline-black   font-medium rounded-lg drop-shadow-xl  px-4 py-4 text-center  w-36"
    >
      <Image src={play} alt="ICON" />
      <span class="  font-bold">Learn more</span>
    </button>
  );
};
export const BtnLarge = ({ icons }) => {
  return (
    <button
      type="button"
      class=" hover:bg-[#6765f0]  text-white flex justify-between my-btn text-bold  focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-8 py-4  drop-shadow-xl  sm:w-60 w-44 "
    >
      <span class="mr-5">Get Started</span>
      <span> {icons}</span>
    </button>
  );
};
