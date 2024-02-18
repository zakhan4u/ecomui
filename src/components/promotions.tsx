import React from 'react';
import Image from 'next/image';

const promotions = () => {
    return (
        <div className='text-center gap-6 space-y-2'>
         <h6 className='text-blue-600 font-bold'>Promotions</h6>
         <h1 className='font-bold text-3xl'>Our Promotion Events</h1>
         <div className='grid grid-cols-3'>
            <div>
           <div className='bg-slate-300 space-y-10'>
            <p>Get upto 60%</p>
            <Image src="/ladyshirt1.png" alt="ladyshirt" width={450} height={50}></Image>
            </div>
            <div className='border bg-slate-400 text-center'>
            <h1>GET 30% Off </h1>
            <h1>USE PROMO CODE</h1>
            <button className='bg-slate-600'>DINEWEEKENDSALE</button>
         </div>
         </div>
         <div>
            <Image src="/event2.png" alt='event2' width={350} height={150}></Image>
            </div>
         <div>
            <Image src="/malejac1.png" alt='event2' width={350} height={150}>
               </Image></div>
         </div>
         </div>
    );
};

export default promotions;