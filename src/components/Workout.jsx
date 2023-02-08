import Image from "next/image";
import BestFullBoday from "../assets/images/best-full-boday.webp";
import arrow from "../assets/images/arrow.svg";
import { BtnLarge } from "./Buttons";
export const Workout = () => {
  return (
    <section class="  px-4 md:py-6 ">
      <div class=" flex px-4 py-20 md:flex-row flex-col md:gap-x-48  gap-24 ">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6  items-center order-last md:order-none">
          <Image
            class="object-cover object-center  rounded scale-125"
            alt="hero"
            src={BestFullBoday}
          />
        </div>

        <div class=" items-start lg:flex-grow  md:w-1/2   flex flex-col  md:text-left mb-16   text-center">
          <h1 class="  text-left text-black sm:text-5xl lg:text-6xl  text-4xl    mb-12 md:mt-4 font-bold  ">
            Best full body
            <br class=" inline-block" /> workout to lose fat
          </h1>
          <p class="mb-8  text-justify text-gray-500">
            Exercise is a very important need for our body. Health and fitness
            will be obtained if you can do regular exercise and run a healthy
            routine. Even at home we still have to be diligent in exercising,
            either alone or with your friends at home.{" "}
          </p>
            <BtnLarge icons={<Image src={arrow} alt="ICON"  />} />
        </div>
      </div>
    </section>
  );
};
