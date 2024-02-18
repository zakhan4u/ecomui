import React from 'react';
import Image from 'next/image';

const productpage = () => {
    return (
        <div>
           <h1 className='justify-center items-center text-center'> Our Products</h1>
           <div className='flex hover:focus'>
            <Image src="/ladyjac1.png" alt='ladyjacket' width={400} height={250}></Image>
            <Image src="/header.png" alt='ladyjacket' width={400} height={250}></Image>
            <Image src="/malejac1.png" alt='ladyjacket' width={400} height={250}></Image>
           </div>
        </div>
    );
};

export default productpage;