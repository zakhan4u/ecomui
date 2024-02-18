import React from 'react';
import { ProductData } from './productdata';
import Image from 'next/image';

const products = () => {
    return (
        <div>
            {ProductData.map((details)=>(
  <div>
  <div key={details.imageURL}>{details.price}</div>
  <Image  key={details.imageURL}src={details.imageURL} alt="image data "  width={200} height={200}></Image>
  </div>
))}
        </div>
    );
};

export default products;