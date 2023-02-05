import Image from "next/image";
export const ServiceItem = ({ image, content }) => {
  return (
    <div className="flex flex-row justify-center gap-6">
      <div className="bg-purple-400 rounded-xl w-24 px-7 py-5 ">
        <Image src={image} alt="MAN" />
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  stroke="#d9e3f0"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="1.5"
                  d="M14.43 5.93L20.5 12l-6.07 6.07M3.5 12h16.83"
                ></path>
              </svg>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
