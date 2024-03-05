import React from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import styles from "../styles/styles";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import { useState,useEffect } from "react";

import { productData } from "../static/data";


const BestSellingPage = () => {
    const [data ,setData] = useState([]);

    useEffect(() => {
  
        const d = productData && productData.sort((a,b)=>b.total_sell-a.total_sell);
          setData(d);
        
        //    window.scrollTo(0,0);
      }, []);
  return (
    <>
      <Header activeHeading={2} />
      <br />
      <br />
      <div className={`${styles.section}`}>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
          {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BestSellingPage;
