import Image from "next/image";
import BestFullBoday from "../assets/images/best-full-boday.png";
import howItWork from "../assets/images/how-it-work.png";
import arrow from "../assets/images/arrow.svg";
import { BtnLarge } from "./Buttons";
export const HowItWork = () => {
  return (
    <section class="  px-4 md:py-6 ">
      <div class=" flex  py-20 md:flex-row flex-col md:gap-x-44 items-center  gap-16 ">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6   order-last md:order-none">
          <Image
            class="object-cover object-center  rounded scale-125"
            alt="hero"
            src={howItWork}
          />
        </div>

        <div class="md:w-8/12 w-full  ">
          <h1 class="text-4xl  text-black text-left  ml-4   mb-8 font-bold  ">
            How it works?
          </h1>
          <div class="flex flex-col  text-center gap-4 mb-8 mx-6">

            <div class="px-3 py-8 rounded-xl  drop-shadow-[0_35px_35px_rgba(0,0,0,0.35)]  bg-white"><p>The body becomes sick because of rarely exercise</p></div>
            <div class="px-3 py-8 rounded-xl  drop-shadow-xl bg-gray-100"><p>Don't give up in order to get a healthy and ideal body</p></div>
            <div class="px-3 py-8 rounded-xl  drop-shadow-md bg-gray-100"><p>Become addicted to the exercise that is given</p></div>
           
          </div>
          
        </div>
      </div>
    </section>
  );
};
