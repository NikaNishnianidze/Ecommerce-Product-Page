import mainItemImage1 from "../../public/assets/image-product-1.jpg";
import mainItemImage2 from "../../public/assets/image-product-2.jpg";
import mainItemImage3 from "../../public/assets/image-product-3.jpg";
import mainItemImage4 from "../../public/assets/image-product-4.jpg";
import nextIcon from "../../public/assets/icon-next.svg";
import prevIcon from "../../public/assets/icon-previous.svg";

interface IProps {
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

const ItemImage: React.FC<IProps> = ({ currentIndex, setCurrentIndex }) => {
  const images = [
    mainItemImage1,
    mainItemImage2,
    mainItemImage3,
    mainItemImage4,
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex: number) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex: number) =>
      prevIndex == 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="images mt-[28px] relative flex flex-col items-center">
        <div className="main-image">
          <img src={images[currentIndex]} alt="main item image" />
        </div>
        <div className="arrows absolute inset-0 flex justify-between items-center px-4 ">
          <div className="prev w-[40px] h-[40px] rounded-[50%] bg-menu p-[5px] flex flex-col items-center justify-center cursor-pointer">
            <img src={prevIcon} alt="previous icon" onClick={handlePrev} />
          </div>
          <div className="next w-[40px] h-[40px] rounded-[50%] bg-menu p-[5px] flex flex-col items-center justify-center cursor-pointer">
            <img src={nextIcon} alt="next icon" onClick={handleNext} />
          </div>
        </div>

        <div className="thumbnails"></div>
      </div>
    </>
  );
};

export default ItemImage;
