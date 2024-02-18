import React from 'react';
import Image from 'next/image';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const footer = () => {
    return (
        <div className='flex gap-10 justify-center'>
           <div>
            <Image src="/logo.png" alt="logo" width={150} height={60}></Image>
            <div className="leading-7 [&:not(:first-child)]:mt-6 text-slate-500">
      <p>Small, artisan label that offers a </p>
      <p>thoughtfully curated collection</p>
      <p>of high quality everyday</p>
      <p>essentials made.</p>
      </div>
      <div className='flex gap-12'>
      <FaFacebookF className='border bg-slate-200'/>
      <FaTwitter className='border bg-slate-200' />
      <FaLinkedinIn  className='border bg-slate-200' />
      </div>
            </div>
           <div>
            <div className='font-semibold'>Company</div>
            <div>About</div>
<div>Terms of Use</div>
<div>Privacy Policy</div>
<div>How it Works</div>
<div>Contact Us</div>
           </div>
           <div>
            <div className='font-semibold'>support</div>
           <div> Support Carrer</div>
 <div>24h Service</div>
<div>Quick Chat</div>
           
           </div>
           <div className='flex-col gap-10'>
            <div className='font-semibold'>contact</div>
           <div> Whatsapp</div>
<div>Support 24h</div>
            </div>
        </div>
    );
};

export default footer;