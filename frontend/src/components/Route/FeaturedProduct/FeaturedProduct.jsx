import React, { useEffect, useState } from "react";
import { productData } from "../../../static/data";
import styles from "../../../styles/styles";
import ProductCard from "../../Route/ProductCard/ProductCard.jsx";

const FeaturedProduct = () => {
  return (
    <div className={`${styles.section}`}>
      <div className={`${styles.heading} mt-[40px]`}>
        <h1>Featured Products</h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
        {
            productData && productData.map((i,index)=><ProductCard data={i} key={index}/>)
        }
      </div>
    </div>
  );
};

export default FeaturedProduct;
