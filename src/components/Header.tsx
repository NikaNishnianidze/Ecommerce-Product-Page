import menuIcon from "../../public/assets/icon-menu.svg";
import logo from "../../public/assets/logo.svg";
import cartIcon from "../../public/assets/icon-cart.svg";
import personAvatar from "../../public/assets/image-avatar.png";
import closeIcon from "../../public/assets/icon-close.svg";
import deleteIcon from "../../public/assets/icon-delete.svg";
import { useState } from "react";
import { TCartItemType } from "../App";
import { useNavigate } from "react-router-dom";

interface IProps {
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  cartItems: TCartItemType[];
  setCartItems: React.Dispatch<React.SetStateAction<TCartItemType[]>>;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
  setDiscount: React.Dispatch<React.SetStateAction<number>>;
}

const Header: React.FC<IProps> = ({
  setCurrentIndex,
  cartItems,
  setCartItems,
  count,
  setCount,
  setPrice,
  setDiscount,
}) => {
  const [activeMenu, setActiveMenu] = useState<boolean>(false);
  const [activeCart, setActiveCart] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const menu: string[] = ["Collections", "Men", "Women", "About", "Contact"];

  const openMenu = () => {
    setActiveMenu(true);
  };

  const handleMainPage = () => {
    navigate("/");
    setActiveCart(false);
    setActiveMenu(false);
    setCurrentIndex(0);
    setCount(0);
    setPrice(0);
    setDiscount(0);
    setActiveIndex(null);
  };

  const handleDelete = () => {
    setCartItems([]);
  };

  const handleActive = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <>
      <header
        className={`flex flex-row items-center justify-between  px-[24px] pt-[20px]  relative z-50 dk:px-[165px] dk:pt-[43px]`}
      >
        <div className="left flex flex-row items-center gap-[16px]">
          <img
            src={menuIcon}
            alt="menu icon"
            onClick={openMenu}
            className="dk:hidden"
          />
          <img src={logo} alt="sneakers logo" onClick={handleMainPage} />
          <div className="mb:hidden dk:block dk:flex items-center ">
            <ul className="flex flex-row items-center gap-[32px] ml-[40px] text-[#69707D] text-[15px] font-normal">
              {menu.map((item, index) => (
                <div className="flex flex-col items-center" key={index}>
                  <li onClick={() => handleActive(index)}>{item}</li>
                  {activeIndex == index && (
                    <div className="rectangle w-[58px] h-[4px] bg-button absolute top-[120px]"></div>
                  )}
                </div>
              ))}
            </ul>
          </div>
        </div>

        <div className="right flex items-center gap-[22.18px]">
          {cartItems.length > 0 ? (
            <div className="flex flex-col items-center justify-center">
              <div className="amount w-[19px] h-[13px] rounded-[6.5px] bg-button ml-[9px] absolute top-[16px] dk:top-[50px] dk:ml-[12px]"></div>
              <img
                className="cart-image "
                src={cartIcon}
                alt="cart icon"
                onClick={() => setActiveCart(!activeCart)}
              />
              <p className="text-[10px] text-[#fff] font-bold absolute top-[15px] right-[74px]  dk:right-[240px] dk:top-[49px]">
                {count}
              </p>
            </div>
          ) : (
            <img
              className="cart-image"
              src={cartIcon}
              alt="cart icon"
              onClick={() => setActiveCart(!activeCart)}
            />
          )}

          <img
            src={personAvatar}
            alt="person avatar"
            className="w-[24px] h-[24px] dk:w-[50px] dk:h-[50px] hover:border-[2px] hover:border-[#FF7E1B] hover:rounded-[50%]"
          />
        </div>
      </header>
      <div className="divider2 w-[1110px] border-[1px] border-[#E4E9F2] relative left-43 top-[30px] mb:hidden dk:block"></div>
      {activeMenu && (
        <>
          <div
            className="overlay-div fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
            onClick={() => setActiveMenu(false)}
          ></div>

          <div className="menu pt-[24.78px] pl-[25.26px] w-[250px] bg-white min-h-screen fixed top-0 left-0 z-50 shadow-lg p-5">
            <img
              src={closeIcon}
              alt="close X icon"
              onClick={() => setActiveMenu(false)}
            />
            <ul className="mt-[53.78px] flex flex-col gap-[20px] text-[#1D2026] text-[18px] font-bold dk:block">
              {menu.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </>
      )}
      {activeCart ? (
        <div className="cart-div flex justify-center absolute w-full m-auto z-50 dk:left-220 dk:w-[360px]">
          <div className="cart w-[360px] mt-[36px] shadow-cart rounded-[10px] bg-menu flex flex-col px-auto pt-[24px] px-[24px] pb-[32px]">
            <p className="text-[#1D2026] text-[16px] font-bold">Cart</p>
            <div className="divider w-[360px] border-[1px] border-[#E4E9F2] relative left-[-24px] mt-[24px]"></div>
            {cartItems.length == 0 ? (
              <p className="mt-[77px] mb-[53px] text-center text-[#69707D] text-[16px] font-bold">
                Your cart is empty.
              </p>
            ) : (
              cartItems.map((item) => (
                <div className="products flex flex-col" key={item.id}>
                  <div className="item-info flex gap-[16px] items-center mt-[24px]">
                    <img
                      className="w-[50px] h-[50px] rounded-[4px]"
                      src={item.image}
                      alt="image thumbnail "
                    />
                    <div className="text">
                      <p className="text-[#69707D] text-[16px] font-normal">
                        {item.name}
                      </p>
                      <div className="prices flex gap-[4px]">
                        <p className="text-[#69707D] text-[16px] font-normal">{`$${item.discountPrice}.00`}</p>
                        <p className="text-[#69707D] text-[16px] font-normal">{`x${item.quantity}`}</p>
                        <p className="text-[#1D2026] font-bold text-[16px]">{`$${item.price}.00`}</p>
                      </div>
                    </div>
                    <img
                      src={deleteIcon}
                      alt="delete icon"
                      onClick={handleDelete}
                    />
                  </div>
                  <button className="w-[312px] py-[18px] rounded-[10px] bg-button mt-[24px] text-[#Fff] font-bold text-[16px]">
                    Checkout
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Header;
