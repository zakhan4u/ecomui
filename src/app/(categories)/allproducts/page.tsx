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
    <CardTitle key={details.imageURL}>{details.make}</CardTitle>
  </CardHeader>
  <CardContent>
  <Image key={details.imageURL} src={details.imageURL} alt="image data "  width={200} height={120}></Image>
  </CardContent>
  <CardFooter>
    <p key={details.imageURL}>{details.name}</p>
  </CardFooter>
  <CardHeader>
    <CardTitle key={details.imageURL}>{details.price}</CardTitle>
  </CardHeader>
</Card>

))}
</div>
 )
};

export default allproducts;