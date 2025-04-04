import plusIcon from "../../public/assets/icon-plus.svg";
import minusIcon from "../../public/assets/icon-minus.svg";
import cartImage from "../../public/assets/icon-cart.svg";
import { SetStateAction } from "react";
import React from "react";
import { TCartItemType } from "../App";

interface AddToCartProps {
  setCartItems: React.Dispatch<React.SetStateAction<TCartItemType[]>>;
  price: number;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
  discount: number;
  setDiscount: React.Dispatch<React.SetStateAction<number>>;
  count: number;
  setCount: React.Dispatch<SetStateAction<number>>;
}

const AddToCart: React.FC<AddToCartProps> = ({
  setCartItems,
  price,
  setPrice,
  discount,
  setDiscount,
  count,
  setCount,
}) => {
  const handleMinus = () => {
    if (count > 0) {
      setCount((prevCount) => {
        const newCount = prevCount - 1;
        setPrice(newCount * 50);
        setDiscount((newCount * 50) / 2);
        return newCount;
      });
    }
  };

  const handlePlus = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      setPrice(newCount * 50);
      setDiscount((newCount * 50) / 2);
      return newCount;
    });
  };

  const handleAddToCart = () => {
    if (count == 0) return;
    const newItem = {
      id: 1,
      name: "Fall Limited Edition Sneakers",
      image: "/assets/image-product-1-thumbnail.jpg",
      price: price,
      discountPrice: discount,
      quantity: count,
    };

    setCartItems([newItem]);
  };

  return (
    <div className="mt-[24px] flex flex-col items-center px-[24px]">
      <div className="basic-info">
        <p className="text-[#FF7E1B] text-[12px] font-bold leading-[1.846px] ">
          Sneaker Company
        </p>
        <p className="mt-[19px] text-[28px] text-[#1D2026] font-bold w-[327px] dk:text-[44px] dk:w-[445px]">
          Fall Limited Edition Sneakers
        </p>
        <p className="text-[#69707D] text-[15px] font-normal mt-[15px] dk:w-[445px] dk:text-[16px]">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
      </div>
      <div className="prices mt-[28px] flex w-full  justify-between items-center dk:flex-col dk:items-start dk:gap-[10px]">
        <div className="discount flex gap-[16px]">
          <p className="text-[#1D2026] text-[28px] font-bold">{`$ ${discount}.00`}</p>
          <div className="discount-box w-[51px] py-[7px] bg-discount rounded-[16px] flex items-center justify-center dk:py-[4px] dk:px-[8px]">
            <p className="text-[#FF7E1B] text-[16px] font-bold">50%</p>
          </div>
        </div>
        <div className="normal-price">
          <p className="text-[#B6BCC8] text-[16px] font-bold line-through">
            {`$ ${price}.00`}
          </p>
        </div>
      </div>
      <div className="add-cart flex flex-col dk:flex-row dk:gap-[16px]">
        <div className="product-amount w-[327px] h-[56px] bg-amount rounded-[10px] mt-[24px] flex items-center justify-between px-[22px] dk:w-[157px]">
          <img
            src={minusIcon}
            className="minus"
            alt="minus icon"
            onClick={handleMinus}
          />
          <p className="text-[#1D2026] text-[16px] font-bold">{count}</p>
          <img
            src={plusIcon}
            className="plus"
            alt="plus icon"
            onClick={handlePlus}
          />
        </div>
        <button className="mt-[16px] w-[327px] py-[20px] shadow-button hover:bg-button-hover cursor-pointer flex items-center gap-[15.5px] justify-center mb-[88px] rounded-[10px] bg-button shadow-button dk:mb-0 dk:w-[272px]">
          <img
            src={cartImage}
            alt="cart image"
            className="fill-cart w-[17px] h-[16px]"
          />
          <p
            onClick={handleAddToCart}
            className="text-[#fff] text-[16px] font-bold  "
          >
            Add to cart
          </p>
        </button>
      </div>
    </div>
  );
};

export default AddToCart;
