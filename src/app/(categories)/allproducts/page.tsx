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

const allproducts = () => {
 return (
    <div className='grid grid-cols-4'>
    {ProductData.map((details)=>(
        <Card key={details.category}>
  <CardHeader>
    <CardTitle>{details.make}</CardTitle>
  </CardHeader>
  <CardContent>
  <Image src={details.imageURL} alt="image data "  width={200} height={120}></Image>
  </CardContent>
  <CardFooter>
    <p>{details.name}</p>
  </CardFooter>
  <CardHeader>
    <CardTitle>{details.price}</CardTitle>
  </CardHeader>
</Card>

))}
</div>
 )
};

export default allproducts;