import { useState } from "react";
import Header from "./components/Header";
import ItemImage from "./components/ItemImage";
import AddToCart from "./components/AddToCart";

function App() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <div>
      <Header setCurrentIndex={setCurrentIndex} currentIndex={0} />
      <ItemImage
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
      <AddToCart />
    </div>
  );
}

export default App;
