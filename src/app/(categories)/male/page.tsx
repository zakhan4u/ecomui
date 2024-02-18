import React from 'react';
import { ProductData } from '@/components/productdata';
import Image from 'next/image';

const males = () => {
    return (
        <div className='min-h-screen flex gap-5'>
            {ProductData.map((hosla)=>(
                <h1>{hosla.category=== "male" ? (
                    <div>
                    <Image src={hosla.imageURL} alt="image data "  width={200} height={120}></Image>
                    <p>{hosla.price}</p>
                    </div>
                ):("")}</h1>

            ))}
        </div>
    );
};

export default males;