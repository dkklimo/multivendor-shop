import React from "react";
import styles from "../../styles/styles";
import CountDown from "./CountDown.jsx";

const EventCard = ({active}) => {
  return (
    <div className={`w-full block bg-white rounded-lg ${
      active ? "unset" : "mb-12"
    } lg:flex p-2`}>
      <div className="w-full lg:-w[50%] m-auto">
        <img src="https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg" alt="" />
      </div>
      <div className="w-full lg:[w-50%] flex flex-col justify-center">
        <h2 className={`${styles.productTitle}`}>
          Iphone 14 pro max 256 gb ssd and 8 gb ram silver colour
        </h2>
        <p className="text-[17px] text-[200] ">
          Product details are a crucial part of any eCommerce website or online
          marketplace. These details help the potential customers to make an
          informed decision about the product they are interested in buying. A
          well-written product description can also be a powerful marketing tool
          that can help to increase sales.
        </p>
        <div className="flex justify-between py-2">
          <div className="flex">
            <h5 className="font-[18px] font-[500] line-through text-[#d55b45] pr-3">1099$</h5>
            <h5 className="font-bold text-[20px] font-Roboto text-[#333] ">999$</h5>
          </div>
          <span className="pr-3 text-[17px] text-[#44a55e] font-[500]"> 120 Sold</span>
        </div>
        <CountDown/>
        <div className="flex justify-between">
          <div className="flex">
          <div className={`${styles.button} mr-3 text-[#fff] text-[17px] font-[500]`}>See Details</div>
          <div className={`${styles.button}  text-[#fff] text-[17px] font-[500]`}>Buy Now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
