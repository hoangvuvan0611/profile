
import AboutSection from "@/components/about/AboutSection";
import HeroSection from "@/components/hero/HeroSection";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="bg-[url('/images/banner-bg.png')] bg-left-center bg-cover bg-no-repeat h-[100vh]">
        <Navbar />
        <HeroSection />
      </div>
      <div className="container">
        <AboutSection />
      </div>
    </main>
  );
}
