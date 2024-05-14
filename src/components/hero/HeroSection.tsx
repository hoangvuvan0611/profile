"use client";
import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { TypeAnimation } from 'react-type-animation';
import './HeroSection.css'

const HeroSection = () => {
  return (
    <section className="container mx-auto px-12 py-4 mt-24">
      <div className="grid gird-cols-1 sm:grid-cols-12 ">
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className="text-white mb-4 text-2xl sm:text-2xl lg:text-3xl font-extrabold">
             {""}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Chào, tôi là{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Hoàng",
                1000,
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
              ]}
              wrapper="span"
              speed={10}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-sm mb-6">
            Đây là trang web cá nhân của tôi, nơi tôi chia sẻ các thông tin cá nhân, tài liệu. 
          </p>
          <Button className="px-6 py-3 w-full sm:w-fit rounded-xl mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-red-500 hover:bg-slate-200 text-white">
            Hẹn tôi
          </Button>
          <Button variant="outline" className="px-6 py-3 w-full sm:w-fit rounded-xl bg-transparent mt-3 text-white">
            Tải CV
          </Button>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full w-[200px] h-[200px] sm:w-300 sm:w-300 lg:w-[400px] lg:h-[400px] relative">
            <Image 
              src="/images/header-img.png"
              alt="Hoang image"
              width={400}
              height={400}
              className="hero absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/5"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;
