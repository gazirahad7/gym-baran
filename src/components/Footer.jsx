
import Image from "next/image";

import footerImag from "../assets/images/footer-img.png";
import logo from "../assets/images/new-logo.webp";


export const Footer = () => {

    return(

<section className=" relative  px-4 md:py-6 bg-[#1C3764] ">

    <div className="container mx-auto lg:pr-20  py-20">


  <div class="absolute top-0 left-0  invisible  md:visible">
    <Image src={footerImag} alt="IMG"  />
   
</div>
  <div class="absolute bottom-0 right-0 invisible  md:visible">
    <Image src={footerImag} alt="IMG" />
</div>

           
           <div className="flex md:flex-row flex-col justify-between  mx-10 gap-4 ">

            <div>
                <div className="">
                   
                   <div className="w-32">
                   <Image src={logo} alt="logo" className="scale-150 ml-[-26px]"  />
                   </div>


                </div>
                <div className=" footer-li">
                    <p>We take care of your health with <br /> regular and fun exercise</p>
                </div>
                <div className="flex flex-row justify-between mt-5">
                    <div>
                        
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path fill="#d9e3f0" d="M22 16.19c0 3.64-2.17 5.81-5.81 5.81H15c-.55 0-1-.45-1-1v-5.77c0-.27.22-.5.49-.5l1.76-.03c.14-.01.26-.11.29-.25l.35-1.91a.303.303 0 00-.3-.35l-2.13.03c-.28 0-.5-.22-.51-.49l-.04-2.45c0-.16.13-.3.3-.3l2.4-.04c.17 0 .3-.13.3-.3l-.04-2.4c0-.17-.13-.3-.3-.3l-2.7.04a2.996 2.996 0 00-2.95 3.05l.05 2.75c.01.28-.21.5-.49.51l-1.2.02c-.17 0-.3.13-.3.3l.03 1.9c0 .17.13.3.3.3l1.2-.02c.28 0 .5.22.51.49l.09 5.7c.01.56-.44 1.02-1 1.02h-2.3C4.17 22 2 19.83 2 16.18V7.81C2 4.17 4.17 2 7.81 2h8.38C19.83 2 22 4.17 22 7.81v8.38z"></path></svg>
                    </div>
                    
                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path fill="#d9e3f0" d="M17 4H7C4 4 2 6 2 9v6c0 3 2 5 5 5h10c3 0 5-2 5-5V9c0-3-2-5-5-5zm-3.11 9.03l-2.47 1.48c-1 .6-1.82.14-1.82-1.03v-2.97c0-1.17.82-1.63 1.82-1.03l2.47 1.48c.95.58.95 1.5 0 2.07z"></path></svg></a>


                    <a href="#">

                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path fill="#d9e3f0" d="M21.74 11.07a.989.989 0 00-.99-.89H13.2c-.55 0-1 .45-1 1v1.71c0 .55.45 1 1 1h4.51c-.11.92-.71 2.31-2.04 3.24-.85.59-1.98 1-3.47 1-.07 0-.13 0-.2-.01-2.55-.08-4.71-1.79-5.49-4.14A6.23 6.23 0 016.18 12c0-.69.12-1.36.32-1.98.06-.18.13-.36.21-.54.92-2.07 2.93-3.53 5.29-3.6.06-.01.13-.01.2-.01 1.43 0 2.5.47 3.25.99.39.27.91.21 1.25-.12l1.39-1.36c.44-.43.4-1.16-.1-1.52C16.4 2.69 14.46 2 12.2 2c-.07 0-.13 0-.2.01a9.96 9.96 0 00-8.73 5.5C2.59 8.87 2.2 10.39 2.2 12c0 1.61.39 3.13 1.07 4.49h.01a9.956 9.956 0 008.72 5.5c.07.01.13.01.2.01 2.7 0 4.97-.89 6.62-2.42 1.89-1.75 2.98-4.31 2.98-7.36 0-.43-.02-.8-.06-1.15z"></path></svg>
                    </a>


                    <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM12 15.88c-2.14 0-3.88-1.74-3.88-3.88 0-2.14 1.74-3.88 3.88-3.88 2.14 0 3.88 1.74 3.88 3.88 0 2.14-1.74 3.88-3.88 3.88Zm5.92-9c-.05.12-.12.23-.21.33-.1.09-.21.16-.33.21a.995.995 0 0 1-1.09-.21c-.09-.1-.16-.21-.21-.33A.995.995 0 0 1 16 6.5c0-.13.03-.26.08-.38.05-.13.12-.23.21-.33.23-.23.58-.34.9-.27.07.01.13.03.19.06.06.02.12.05.18.09.05.03.1.08.15.12.09.1.16.2.21.33.05.12.08.25.08.38s-.03.26-.08.38Z" fill="#d9e3f0"></path></svg>
                    </a>
                 
                    
                </div>
            </div>
            <div className="flex lg:flex-row justify-between gap-5 lg:gap-20 flex-col">
                <div>
                    <h3 className="footer-h3">Program</h3>
                    <ul>
                        <a href="#"><li className="footer-li">Gym</li></a>
                        <a href="#"><li className="footer-li">Cardio</li></a>
                        <a href="#"><li className="footer-li" >Workout</li></a>
                        <a href="#"><li className="footer-li">Zumba</li></a>
                    </ul>
                </div>
                <div>

                <h3  className="footer-h3">Blog</h3>
                    <ul>
                        <a href="#"><li  className="footer-li">Daily stretch</li></a>
                        <a href="#"><li  className="footer-li">Daily workout</li></a>
                        
                    </ul>
                        
                </div>
                <div>
                <h3  className="footer-h3">About Us</h3>
                    <ul>

                        <a href="#"><li  className="footer-li">Support</li></a>
                        <a href="#"><li  className="footer-li">Contact</li></a>
                        <a href="#"><li  className="footer-li">Cardio</li></a>
                        <a href="#"><li  className="footer-li">Address</li></a>
                    </ul>
                </div>

            </div>
           </div>


           </div>

        </section>
    )
}