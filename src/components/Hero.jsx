import Image from "next/image";
import brands from "../assets/images/brands.png";
import Hero from "../assets/images/hero.png";
import { BtnLarge, BtnMedium } from "./Buttons";
import arrowRounded from "../assets/images/arrow-rounded.svg";

export default function Header() {
  return (
    <section class=" bg-gradient-to-r from-pink-100 to-white px-4 md:py-6 ">
      <div class=" flex px-4 py-24 md:flex-row flex-col items-center gap-6">
        <div class=" lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
          <h1  class="text-shadow-cus text-5xl text-left text-black  lg:text-7xl  mb-8 mt-4 font-bold drop-shadow-xl ">
            Healthy in side
            <br class=" inline-block" />
            <span className="text-[#6765f0]">fresh</span> out side
          </h1>
          <p class="mb-8  text-justify text-gray-500 lg:w-96">
            Exercise is a very important need for our body. Health and fitness
            will be obtained if you can do regular exercise and run a healthy
            routine.
          </p>
          <div class="flex justify-between sm:gap-8 gap-3 text-center items-center mb-4">
            <div>
              <BtnLarge icons={<Image src={arrowRounded} alt="ICON" />} />
            </div>

            <div>
              <BtnMedium />
            </div>
          </div>
          <div class="flex justify-center items-end mt-9">
            <Image src={brands} alt="BRANDS" />
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
          <Image
            class="object-cover object-center  rounded scale-125"
            alt="hero"
            src={Hero}
          />
        </div>
      </div>
    </section>
  );
}
