import React from 'react';
import { ProductData } from '@/components/productdata';
import Image from 'next/image';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const kidssection = () => {
    return (

        <div className='min-h-screen flex'>
            {ProductData.map((hosla)=>(
                <h1 key={hosla.imageURL}>{hosla.category=== "kids" ? (
                    <Card>
                   <CardContent> <Image key={hosla.imageURL} src={hosla.imageURL} alt="image data "  width={200} height={120}></Image> </CardContent>
                   <CardFooter key={hosla.imageURL}>{hosla.price}</CardFooter>
                   </Card>
                ):("")}</h1>

            ))}
        </div>
    );
};

export default kidssection;