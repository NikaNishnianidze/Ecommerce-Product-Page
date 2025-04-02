import { useState } from "react";
import Header from "./components/Header";
import ItemImage from "./components/ItemImage";

function App() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <div>
      <Header setCurrentIndex={setCurrentIndex} currentIndex={0} />
      <ItemImage
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </div>
  );
}

export default App;
