import React from 'react';
import Image from 'next/image';
import { ProductData } from '@/components/productdata';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const female = () => {
    return (
        <div className='min-h-screen flex gap-5'>
        {ProductData.map((hosla)=>(
            <h1 key={hosla.make}>{hosla.category=== "female" ? (
                <Card>
                <CardContent><Image src={hosla.imageURL} alt="image data "  width={200} height={120}></Image> </CardContent>
                <CardFooter>{hosla.price}</CardFooter>
                </Card>
            ):("")}</h1>


        ))}
    </div>
    );
};

export default female;