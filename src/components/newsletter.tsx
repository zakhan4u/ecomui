import React from 'react';

const newsletter = () => {
    return (
        <div>
            <div className='text-6xl absolute text-green-400 text-opacity-25 font-extrabold tracking-widest'>Newsletter</div>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-2xl">
            Subscribe Our Newsletter
            </h1>
            <div>Get the latest information and promo offers directly</div>
            <div className='flex gap-5'><input className='border-2 text-sm text-muted-foreground' type="text" placeholder='     input email address' />
            <button className='bg-blue-800 border-3 border-indigo-950'>Get Started</button></div>
            
            
        </div>
    );
};

export default newsletter;