import { Content } from "@/components/Content";
import Header from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Services } from "@/components/Services";
import { Workout } from "@/components/Workout";


export default function Home() {
  return (
    
    <div className="container mx-auto  sm:bg-inherit bg-white">
      
      <Navbar />

      <Header />

      <Content />

      <Services />

      <Workout />
    </div>
  );
}
