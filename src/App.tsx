import { useState } from "react";
import Header from "./components/Header";
import ItemImage from "./components/ItemImage";
import AddToCart from "./components/AddToCart";

export type TCartItemType = {
  id: number;
  name: string;
  image: string;
  price: number;
  discountPrice: number;
  quantity: number;
};

function App() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [cartItems, setCartItems] = useState<TCartItemType[]>([]);
  const [price, setPrice] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <Header
        setCurrentIndex={setCurrentIndex}
        count={count}
        setCartItems={setCartItems}
        cartItems={cartItems}
        setCount={setCount}
        setDiscount={setDiscount}
        setPrice={setPrice}
      />
      <ItemImage
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
      <AddToCart
        price={price}
        setPrice={setPrice}
        discount={discount}
        setDiscount={setDiscount}
        setCartItems={setCartItems}
        count={count}
        setCount={setCount}
      />
    </div>
  );
}

export default App;
