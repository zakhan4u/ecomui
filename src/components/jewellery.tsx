import React from 'react';
import Image from 'next/image';

const jewellery = () => {
    return (
        <div>
            <div className=" flex justify-end w-4/12 font-bold text-6xl mx-12 py-90">Unique and Authentic Vintage Designer Jewellery</div>
            <div className='grid grid-cols-4 gap-4'>
                <div>
            <div><h1 className='font-bold'>Using Good Quality Materials </h1>
Lorem ipsum dolor sit amt, consectetur adipiscing elit.</div>
            <div> <h1 className='font-bold'>Modern Fashion Design</h1>
Lorem ipsum dolor sit amt, consectetur adipiscing elit. 
</div>
</div>
<div>
            <div> <h1 className='font-bold'>100% Handmade Products </h1>
Lorem ipsum dolor sit amt, consectetur adipiscing elit.
</div>
            <div> <h1 className='font-bold'>Discount for Bulk Orders</h1>
Lorem ipsum dolor sit amt, consectetur adipiscing elit.</div>
</div>
<Image src="/ladyjac1.png" alt='lady jacket' width={400} height={400}></Image>
<div>
            <p>This piece is ethically crafted in our small family-owned 
                workshop in Peru with unmatched attention to detail and care. 
                The Natural color is the actual natural color of the fiber, undyed and 100% traceable.
                </p>
                <button className='bg-black text-white border-r-2 w-40 h-120'>see All products</button>
                </div>
        </div>
        </div>
    );
};

export default jewellery;