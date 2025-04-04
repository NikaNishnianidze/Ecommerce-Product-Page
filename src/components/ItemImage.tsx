import mainItemImage1 from "../../public/assets/image-product-1.jpg";
import mainItemImage2 from "../../public/assets/image-product-2.jpg";
import mainItemImage3 from "../../public/assets/image-product-3.jpg";
import mainItemImage4 from "../../public/assets/image-product-4.jpg";
import thumbnail1 from "../../public/assets/image-product-1-thumbnail.jpg";
import thumbnail2 from "../../public/assets/image-product-2-thumbnail.jpg";
import thumbnail3 from "../../public/assets/image-product-3-thumbnail.jpg";
import thumbnail4 from "../../public/assets/image-product-4-thumbnail.jpg";
import nextIcon from "../../public/assets/icon-next.svg";
import prevIcon from "../../public/assets/icon-previous.svg";
import xIcon from "../../public/assets/icon-close.svg";
import { useState } from "react";

interface IProps {
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

const ItemImage: React.FC<IProps> = ({ currentIndex, setCurrentIndex }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  console.log(isLightboxOpen);
  const images = [
    mainItemImage1,
    mainItemImage2,
    mainItemImage3,
    mainItemImage4,
  ];
  const thumbnails = [thumbnail1, thumbnail2, thumbnail3, thumbnail4];

  const handleNext = () => {
    setCurrentIndex((prevIndex: number) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex: number) =>
      prevIndex == 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <div className="images-mobile mt-[28px] relative flex flex-col items-center mb:block dk:hidden">
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
      <div className="images-desktop dk:block mb:hidden dk:flex dk:flex-col dk:gap-[32px]">
        <div className="main-image">
          <img
            src={mainItemImage1}
            onClick={() => setIsLightboxOpen(true)}
            className="w-[445px] h-[445px] rounded-[15px] cursor-pointer"
          />
        </div>

        <div className="thumbnails flex flex-row gap-[31px]">
          <img src={thumbnail1} className="w-[88px] h-[88px] rounded-[10px]" />
          <img src={thumbnail2} className="w-[88px] h-[88px] rounded-[10px]" />
          <img src={thumbnail3} className="w-[88px] h-[88px] rounded-[10px]" />
          <img src={thumbnail4} className="w-[88px] h-[88px] rounded-[10px]" />
        </div>
        {isLightboxOpen && (
          <div className="fixed inset-0 bg-background/75 z-50 flex justify-center items-center">
            <div className="flex flex-col items-center gap-6 relative">
              <img
                className="xIcon absolute w-[20px] h-[20px] top-[-30px] right-0 text-white text-2xl font-bold  cursor-pointer z-50"
                src={xIcon}
                onClick={() => setIsLightboxOpen(false)}
              />

              <img
                src={images[currentIndex]}
                alt="enlarged"
                className="w-[550px] h-[550px] rounded-[15px]"
              />

              <div className="flex gap-6">
                {thumbnails.map((thumb, index) => (
                  <img
                    key={index}
                    src={thumb}
                    alt={`Thumbnail ${index + 1}`}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-[88px] h-[88px] rounded-[10px] cursor-pointer border-2 ${
                      currentIndex === index
                        ? "border-[#FF7E1B]"
                        : "border-transparent"
                    }`}
                  />
                ))}
              </div>

              <div className="absolute inset-0 flex justify-between items-center px-6">
                <div
                  onClick={handlePrev}
                  className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center cursor-pointer"
                >
                  <img src={prevIcon} alt="Previous" />
                </div>
                <div
                  onClick={handleNext}
                  className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center cursor-pointer"
                >
                  <img src={nextIcon} alt="Next" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemImage;
