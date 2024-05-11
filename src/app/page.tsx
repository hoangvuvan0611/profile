
import HeroSection from "@/components/hero/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="bg-[url('/images/banner-bg.png')] bg-left-center bg-cover bg-no-repeat h-[700px]">
        <HeroSection/>
      </div>
    </main>
  );
}
