import { Content } from "@/components/Content";
import { DailyMorning } from "@/components/DailyMorning";
import { Footer } from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { HowItWork } from "@/components/HowItWork";
import Navbar from "@/components/Navbar";
import { Services } from "@/components/Services";
import { Workout } from "@/components/Workout";


export default function Home() {
  return (
    <>
    <div className="container mx-auto  ">
      <Navbar />
      <HeroSection />
      <Content />
      <Services />
      <Workout />
      <DailyMorning/>
      <HowItWork/>
     </div>
      <Footer/>

    </>
  );
}
