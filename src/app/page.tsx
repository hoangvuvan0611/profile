"use client";
import AboutSection from "@/components/about/AboutSection";
import EmailSection from "@/components/email/EmailSection";
import Footer from "@/components/footer/Footer";
import HeroSection from "@/components/hero/HeroSection";
import Navbar from "@/components/navbar/Navbar";
import ProjectSection from "@/components/project/ProjectSection";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className=" bg-left-center bg-cover bg-no-repeat h-[100vh]" 
        style={{ backgroundImage: `url(${prefix}/images/banner-bg.png)` }}
      >
        <Navbar/>
        <HeroSection />
      </div>
      <div className="container" >
        <AboutSection />
        <ProjectSection />
        <EmailSection />
        <Footer/>
      </div>
    </main>
  );
}
