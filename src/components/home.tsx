import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import { CiShoppingCart } from "react-icons/ci";

const Homesection = () => {
    return (
        <div className='"container min-h-screen grid grid-cols-2 gap-10"'>
            <div className='flex-col space-y-4'>
           <div className='font-bold font-2xl'>Sale 70%</div>
          
          <h1 className="scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-5xl max-w-64">
           An Industrial take on Streetwear
    </h1>
           <div>Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</div>
           <div className='bg-grey-800'><Button>
           <CiShoppingCart />
            Start Shopping</Button></div>
           <div className='flex gap-2'>
           <Image src="/Featured1.png" alt='logo1' width={120} height={120}></Image>
           <Image src="/Featured2.png" alt='logo1' width={120} height={120}></Image>
           <Image src="/Featured3.png" alt='logo1' width={120} height={1200}></Image>
           <Image src="/Featured4.png" alt='logo1' width={120} height={1200}></Image>
           </div>
           </div>
           <div className='rounded-full w-80 h-80  bg-red-200 flex justify-center items-center relativ'><Image src="/header.png" alt="header" width={500} height={450}></Image></div>
        </div>
    );
};

export default Homesection;