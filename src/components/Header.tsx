import menuIcon from "../../public/assets/icon-menu.svg";
import logo from "../../public/assets/logo.svg";
import cartIcon from "../../public/assets/icon-cart.svg";
import personAvatar from "../../public/assets/image-avatar.png";
import closeIcon from "../../public/assets/icon-close.svg";
import { useState } from "react";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<boolean>(false);
  const [activeCart, setActiveCart] = useState<boolean>(false);

  const menu: string[] = ["Collections", "Men", "Women", "About", "Contact"];

  const openMenu = () => {
    setActiveMenu(true);
  };

  return (
    <>
      <header
        className={`flex flex-row items-center justify-between px-[24px] pt-[20px]  relative z-50 `}
      >
        <div className="left flex flex-row items-center gap-[16px]">
          <img src={menuIcon} alt="menu icon" onClick={openMenu} />
          <img src={logo} alt="sneakers logo  " />
        </div>
        <div className="right flex items-center gap-[22.18px]">
          <img
            src={cartIcon}
            alt="cart icon"
            onClick={() => setActiveCart(!activeCart)}
          />
          <img
            src={personAvatar}
            alt="person avatar"
            className="w-[24px] h-[24px]"
          />
        </div>
      </header>
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
            <ul className="mt-[53.78px] flex flex-col gap-[20px] text-[#1D2026] text-[18px] font-bold">
              {menu.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        </>
      )}
      {activeCart ? (
        <div className="cart-div flex justify-center ">
          <div className="cart w-[360px] mt-[36px] shadow-cart rounded-[10px] flex flex-col px-auto pt-[24px] px-[24px] pb-[32px]">
            <p className="text-[#1D2026] text-[16px] font-bold">Cart</p>
            <div className="divider w-[360px] border-[1px] border-[#E4E9F2] relative left-[-24px] mt-[24px]"></div>
            <p className="mt-[77px] mb-[53px] text-center text-[#69707D] text-[16px] font-bold">
              Your cart is empty.
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
