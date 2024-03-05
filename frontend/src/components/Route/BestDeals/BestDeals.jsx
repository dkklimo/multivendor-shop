import React, { useEffect, useState } from 'react'
import { productData } from '../../../static/data';
import styles from '../../../styles/styles';
import ProductCard from "../../Route/ProductCard/ProductCard.jsx"

const BestDeals = () => {

    const [data ,setData] = useState([]);

    useEffect(() => {
        const d = productData && productData.sort((a,b)=>b.total_sell-a.total_sell);
        const firstFive = d.slice(0,5);
        setData(firstFive);
    }, []);
  return (
    <div>
        <div className={`${styles.section}`}>
            <div className={`${styles.heading} `}>
                <h1>Best Deals</h1>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                {
                    data && data.length !==0 &&(
                        <>
                         {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
                        </>
                      )
                }

            </div>
        </div>
    </div>
  )
}

export default BestDeals