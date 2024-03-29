import React from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import styles from "../styles/styles";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import { useState,useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { productData } from "../static/data";


const ProductsPage = () => {
    const [searchParams] = useSearchParams();
    const [data ,setData] = useState([]);
    const categoryData = searchParams.get("category");

    useEffect(() => {
        if (categoryData === null) {
          const d = productData && productData.sort((a,b)=>b.total_sell-a.total_sell);
          setData(d);
        } else {
          const d =
          productData && productData.filter((i) => i.category === categoryData);
          setData(d);
        }
        //    window.scrollTo(0,0);
      }, []);
  return (
    <>
      <Header activeHeading={3} />
      <br />
      <br />
      <div className={`${styles.section}`}>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
          {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
        </div>
        {data && data.length === 0 ? (
          <h1 className="text-center w-full pb-[100px] text-[20px]">
            No products Found!
          </h1>
        ) : null}
      </div>
      <Footer />
    </>
  );
};

export default ProductsPage;
