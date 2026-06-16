/*export const products = [
  {
    id: 1,
    title: "iPhone 15",
    price: 79999,
    image: "https://m.media-amazon.com/images/I/71d7rfSl0wL._SX679_.jpg",
  },

  {
    id: 2,
    title: "Samsung TV",
    price: 39999,
    image: "https://img.global.news.samsung.com/in/wp-content/uploads/2024/09/Newsroom-Cover_DU8000_1000x563.jpg",
  },

  {
    id: 3,
    title: "Laptop",
    price: 54999,
    image: "https://m.media-amazon.com/images/I/71jG+e7roXL._SX679_.jpg",
  },

  {
    id: 4,
    title: "Headphones",
    price: 2999,
    image: "https://m.media-amazon.com/images/I/61CGHv6kmWL._SX679_.jpg",
  },
];          

*/



/* yha mene second time .map() use kiya h so that data load ho aur nya jsx mile hr baar */

import "./ProductSection.css";
import ProductCard from "../ProductCard/ProductCard";
import { products } from "../../data/products.js";

function ProductSection() {
  return (
    <div className="products">

      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
        />
      ))}

    </div>
  );
}

export default ProductSection;