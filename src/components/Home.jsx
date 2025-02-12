import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import profile from "../images/profile.jpeg";
import CV from '../images/CV.jpeg';
import { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
      useEffect(() => {
        AOS.init({
          offset: 200,
          duration: 600,
          easing: 'ease-in-sine',
          delay: 100,
        })
      }, [])
  return (
    <div id="home" className="text-white bg-black h-auto py-14 w-[100%] ">
      <div className="flex pt-[75px] justify-around max-lg:flex-col max-lg:pt-12 max-lg:place-self-center  ">
        <div data-aos="fade-right" className="pl-14 pt-12 w-[53%] max-lg:w-[95%] max-lg:text-center max-md:pl-1 ">
          <h2 className="text-5xl font-bold">
            Hi,I'm <span className="text-[#00abf0] ">Muhmmad Aqeel </span>
          </h2>
          <h3 className="mt-7 text-3xl motion-preset-typewriter-[18] motion-duration-[3s] font-bold text-[#00abf0] max-lg:place-self-center ">
            Frontend Developer
          </h3>
          <p className="pt-6 text-xl max-lg:text-justify max-md:px-3">
            I'm a passionate and dedicated web developer specializing in
            creating modern, responsive, and user-friendly websites. With a keen
            eye for design and a commitment to clean, efficient code, I bring
            ideas to life on the web. My expertise lies in crafting responsive
            designs and writing optimized code that ensures seamless user
            experiences across all devices."
          </p>
          <div className="pt-8 flex gap-20 max-lg:place-self-center max-md:flex-col max-md:gap-5">
            <button className="border-2 border-[#00abf0] hover:text-[black] hover:bg-[#00abf0]  p-2 px-8 text-[#00abf0] text-xl rounded-lg ">
             <a href="http://wa.me/3187453703"> Let's Talk</a>
            </button>
            <button className="border-2 border-[#00abf0] hover:text-[black] hover:bg-[#00abf0] p-2 px-8 text-[#00abf0] text-xl rounded-lg">
              <a href={CV} >Resume</a>
            </button>
          </div>
          <div className="flex pt-8 gap-10 max-lg:place-self-center">
            <i className="border-2 p-2  text-2xl rounded-full hover:bg-[#00abf0] text-[blue] ">
              <a href="https://www.facebook.com/malikajar.ali"><FaFacebookF /></a>
            </i>
            <i className="border-2 p-2  text-2xl rounded-full hover:bg-[#00abf0] text-[#e2578c]">
              <a href="https://www.instagram.com/zaviyar2300?utm_source=qr&igsh=YnJrMXhuc3ZmZGNm"><FaInstagramSquare />
              </a>
            </i>
            <i className="border-2 p-2  text-2xl rounded-full hover:bg-[lightblue] text-[blue]">
              <a href="https://www.linkedin.com/in/muhammad-aqeel-745334336?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedinIn /></a>
            </i>
          </div>
        </div>
        <div className="ml-4 pt-10 max-lg:place-self-center max-lg:ml-0 max-lg:pt-8">
          <img  data-aos="flip-right"
            className="w-[380px] h-[73vh] rounded-xl max-lg:h-[43vh] max-md:w-72 max-md:h-[45vh] " 
            src={profile}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;