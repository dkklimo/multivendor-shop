import React from "react";
import { RxCross1 } from "react-icons/rx";
import {IoBagHandleOutline} from "react-icons/io5"
import styles from "../../styles/styles";
import {HiPlus,HiOutlineMinus} from "react-icons/hi"
import { useState } from "react";
import {toast} from 'react-toastify';
import { Link } from "react-router-dom";

const Cart = ({ setOpenCart }) => {
  const cartData = [
    {
      name: "iPhone 15 Pro Max 512GB ROM, 4441mAh",
      price: 1000,
      description: "test",
    },
    {
      name: "iPhone 15 Pro Max 512GB ROM, 4441mAh",
      price: 1000,
      description: "test",
    },
    {
      name: "iPhone 15 Pro Max 512GB ROM, 4441mAh",
      price: 1000,
      description: "test",
    },
    {
      name: "iPhone 15 Pro Max 512GB ROM, 4441mAh",
      price: 1000,
      description: "test",
    },
  ];
  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
      <div className="fixed top-0 right-0 h-full w-[80%] 800px:w-[35%] bg-white flex flex-col overflow-y-scroll justify-between shadow-sm">
        <div>
          <div className="flex w-full justify-end pt-5 pr-5 fixed top-3 right-3">
            <RxCross1
              size={25}
              className="cursor-pointer"
              onClick={() => setOpenCart(false)}
            />
          </div>
           {/* Item length */}
           <div className={`${styles.noramlFlex} p-4`}>
                <IoBagHandleOutline size={25} />
                <h5 className="pl-2 text-[20px] font-[500]">
                  3 Items
                </h5>
              </div>
              {/* cart Single Items */}
              <br />
              <div className="w-full border-t">
                {cartData &&
                  cartData.map((i, index) => (
                    <CartSingle
                      key={index}
                      data={i}
                    />
                  ))}
              </div>
        </div>
        <div className="px-5 mb-3">
              {/* checkout buttons */}
              <Link to="/checkout">
                <div
                  className={`h-[45px] flex items-center justify-center w-[100%] bg-[#e44343] rounded-[5px]`}
                >
                  <h1 className="text-[#fff] text-[18px] font-[600]">
                    Checkout Now USD$ 10000
                  </h1>
                </div>
              </Link>
            </div>
      </div>
    </div>
  );
};


const CartSingle = ({ data, quantityChangeHandler, removeFromCartHandler }) => {
    const [value, setValue] = useState(1);
    const totalPrice = data.price * value;
  
    const increment = () => {
        setValue(value + 1);
    };
  
    const decrement = () => {
      setValue(value === 1 ? 1 : value - 1);
    };
    return (
        <div className="border-b p-4">
          <div className="w-full flex items-center">
            <div>
              <div
                className={`bg-[#e44343] border border-[#e4434373] rounded-full w-[25px] h-[25px] ${styles.noramlFlex} justify-center cursor-pointer`}
                onClick={() => increment()}
              >
                <HiPlus size={18} color="#fff" />
              </div>
              <span className="pl-[10px]">{value}</span>
              <div
                className="bg-[#a7abb14f] rounded-full w-[25px] h-[25px] flex items-center justify-center cursor-pointer"
                onClick={() => decrement()}
              >
                <HiOutlineMinus size={16} color="#7d879c" />
              </div>
            </div>
            <img
              src="https://gadgetsleo.com/storage/2022/07/iPhone-15-Pro-Max-1.jpg"
              alt=""
              className="w-[130px] h-min ml-2 mr-2 rounded-[5px]"
            />
            <div className="pl-[5px]">
              <h1>{data.name}</h1>
              <h4 className="font-[400] text-[15px] text-[#00000082]">
                ${data.price} * {value}
              </h4>
              <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto">
                US${totalPrice}
              </h4>
            </div>
            <RxCross1
              className="cursor-pointer"
              onClick={() => removeFromCartHandler(data)}
            />
          </div>
        </div>
      );
    };

export default Cart;
