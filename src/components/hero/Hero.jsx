import "./Hero.css";
import { useState, useEffect } from "react";

function Hero() {

  const images = [
    "https://shoppingvelleys.com/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-02-at-13.01.51-1.jpeg",
    "https://medias.utsavfashion.com/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/l/e/leheriya-printed-georgette-anarkali-suit-in-multicolor-v1-kjz148.jpg",
    "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/13-laptop-platinum-right-render-fy25:VP4-1260x795?fmt=png-alpha",
    "https://media.gettyimages.com/id/154908271/photo/cricket-wickets-ball-and-bat.jpg?s=170667a&w=gi&k=20&c=lgSOc_4auXkDCdg3vGR6VxG3X8Pzd8SFP52kVZlKm5s="
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(slider);
  }, []);

  return (
    <div className="hero">
      <img src={images[current]} alt="Hero Banner" />
    </div>
  );
}

export default Hero;