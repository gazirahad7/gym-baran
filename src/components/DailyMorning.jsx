import Image from "next/image";
import dailyMorning from "../assets/images/daily-morning.png";
import arrow from "../assets/images/arrow.svg";
import { BtnLarge } from "./Buttons";
export const DailyMorning = () => {
  return (
    <section class="  px-4 md:py-6 ">
      <div class=" flex px-4 py-20 md:flex-row flex-col md:gap-x-48  gap-24 ">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6  items-center order-last md:order-none">
          <Image
            class="object-cover object-center  rounded scale-125"
            alt="hero"
            src={dailyMorning}
          />
        </div>

        <div class=" items-start lg:flex-grow  md:w-1/2   flex flex-col  md:text-left mb-16   text-center">
          <h1 class="text-5xl  text-left text-black md:text-4xl lg:text-5xl   mb-12 md:mt-4 font-bold  ">
            Daily morning
            <br class=" inline-block" /> workout in home
          </h1>
          <p class="mb-8  text-justify text-gray-500">
          Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. 
          </p>
            <BtnLarge icons={<Image src={arrow} alt="ICON"  />} />
        </div>
      </div>
    </section>
  );
};
