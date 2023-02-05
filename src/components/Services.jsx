import Image from "next/image";
import arrowSmall from "../assets/images/arrow-small.svg";
import crucified from "../assets/images/crucified-pose.png";
import DancerBalance from "../assets/images/dancer-balance.png";
import DancerMotion from "../assets/images/dancer-motion.png";
export const Services = () => {
  return (
    <section class="text-gray-600 body-font px-6 py-14 font-poppins ">
      <div className=" flex lg:flex-row flex-wrap flex-col gap-6 justify-around  rounded-2xl  py-14 bg-gradient-to-r from-[#6765f0] to-indigo-300 items-center font-bold">
        <div className="flex flex-row justify-center gap-6">
          <div className="bg-indigo-300 rounded-xl w-24 px-7 py-5 ">
            <Image src={crucified} alt="MAN" />
          </div>
          <div className="text-white">
            <h4 className="text-bold text-xl">
              Get that 11 line <br></br>
              in 30 days
            </h4>

            <a href="#">
              <div className=" flex flex-row gap-3 items-center mt-4 text-base opacity-50 text-center">
                <div> Learn more</div>
                <div>
                <Image src={arrowSmall} alt="ICON" />

                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="flex flex-row justify-center gap-6 ">
          <div className="bg-indigo-200 rounded-xl w-24 px-7 py-5 ">
            <Image src={DancerBalance} alt="MAN" />
          </div>
          <div className="text-white">
            <h4 className=" text-xl">
              14 Days<br></br>
              sherd challenge
            </h4>

            <a href="#">
              <div className=" flex flex-row gap-3 items-center mt-4 text-base opacity-50 text-center">
                <div> Learn more</div>
                <div>
                <Image src={arrowSmall} alt="ICON" />

                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="flex flex-row justify-center gap-6  ml-15">
          <div className="bg-indigo-200 rounded-xl w-24 px-7 py-5 ">
            <Image src={DancerMotion} alt="MAN" />
          </div>
          <div className="text-white">
            <h4 className=" text-xl">
              Get flat belly<br></br>
              in 30 days
            </h4>

            <a href="#">
              <div className=" flex flex-row gap-3 items-center mt-4 text-base opacity-50 text-center">
                <div> Learn more</div>
                <div>
                <Image src={arrowSmall} alt="ICON" />

                </div>
              </div>
            </a>
          </div>
        </div>
       
      </div>
    </section>
  );
};
