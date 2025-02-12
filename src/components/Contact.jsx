import React, {useEffect} from 'react'
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import AOS from 'aos'
import 'aos/dist/aos.css'

const contact = () => {
      useEffect(() => {
        AOS.init({
          offset: 200,
          duration: 600,
          easing: 'ease-in-sine',
          delay: 100,
        })
      }, [])
  return (
    <div id='contact' className='bg-[#242121] h-auto text-white py-3 max-md:h-auto '>
      <div className='flex justify-between py-24 px-[10%] max-lg:flex-col max-md:px-[3%]'>
        <div data-aos="fade-right" className='flex flex-col gap-6 w-[45%] max-lg:w-[95%] '>
          <h2 className='text-5xl font-semibold '>Get In <span className='text-[#00abf0] '>Touch</span></h2>
          <div className='flex flex-col gap-3 pl-16 text-2xl text-[#e6e4e465] w-[100%] max-md:pl-2 max-md:text-xl '>
            <div className='w-[90%] max-md:w-[95%] '>
              <p>If you have any questions or would like to collaborate, please don't hesitate to contact.</p>
            </div>
            <div className='flex items-center gap-4'>
              <i className='hover:text-[#00abf0] '><a href="mailto:muhammadaqeel53737@.com"><FaEnvelope /></a></i>
              <h4 className='hover:text-white'><a href="mailto:muhammadaqeel53737@.com">Muhammadaqeel53737.com</a></h4>
            </div>
            <div className='flex items-center gap-4'>
              <i className='hover:text-[#00abf0] '><a href="tel:+923187453703"><FaPhoneAlt /></a></i>
              <h4 className='hover:text-white'><a href="tel:+923187453703">+923187453703 </a></h4>
            </div>
            <div className='flex items-center gap-4'>
              <i className='hover:text-[#00abf0] '><a href="https://www.google.com/maps/place/Rawalpindi,+Pakistan" target="_blank"><IoLocationOutline /></a></i>
              <h4 className='hover:text-white'><a href="https://www.google.com/maps/place/Rawalpindi,+Pakistan" target="_blank">Rawalpindi,Pakistan</a></h4>
            </div>
            <div className='flex items-center gap-4'>
              <i className='hover:text-[#00abf0] '><a href=""><FaFacebookSquare /></a></i>
              <h4 className='hover:text-white'><a href="i">Muhammad Aqeel</a></h4>
            </div>
            <div className='flex items-center gap-4'>
              <i className='hover:text-[#00abf0] '><a href="https://www.instagram.com/zaviyar2300?utm_source=qr&igsh=YnJrMXhuc3ZmZGNm"><AiFillInstagram /></a></i>
              <h4 className='hover:text-white'><a href="https://www.instagram.com/zaviyar2300?utm_source=qr&igsh=YnJrMXhuc3ZmZGNm">Muhammad Aqeel</a></h4>
            </div>
            <div className='flex items-center gap-4'>
              <i className='hover:text-[#00abf0] '><a href="https://www.linkedin.com/in/muhammad-aqeel-745334336?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin /></a></i>
              <h4 className='hover:text-white'><a href="https://www.linkedin.com/in/muhammad-aqeel-745334336?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Muhammad Aqeel</a></h4>
            </div>
          </div>
        </div>
       <div data-aos="fade-down" className='w-[45%] max-lg:w-[90%] max-lg:mx-[10%] max-md:mx-[3%] '>
  <div className='flex flex-col gap-5 border-2 border-[#00abf0] w-[90%] rounded-md p-14  max-md:w-[100%]  max-md:mt-10'>
    <input type="text" placeholder='First Name' className='bg-[#2b2a2a] shadow-lg shadow-[grey] p-3' />
    <input type="text" placeholder='Last Name' className='bg-[#2b2a2a] shadow-lg shadow-[grey] p-3' />
    <input type="text" placeholder='Subject' className='bg-[#2b2a2a] shadow-lg shadow-[grey] p-3' />
    <textarea name="text" placeholder='Message' className='resize-none bg-[#2b2a2a] shadow-lg shadow-[grey] pl-3 pt-3 pb-10'></textarea>
    <button className='border border-[#00abf0] w-[50%] p-3 rounded-lg text-[#00abf0] shadow-lg shadow-[#242121] my-3 hover:shadow-[3px 3px] hover:shadow-[#00abf0] max-md:w-[70%] max-md:h-10 max-md:p-2 max-md:ml-[14%] '>
      <a href="mailto:muhammadaqeel53737@gmail.com?subject=Subject&body=Hi,%0A%0AMessage%20Body%20Here" target="_blank" rel="noopener noreferrer">Send Message</a>
    </button>
  </div>
</div>

      </div>
    </div>
  )
}

export default contact
