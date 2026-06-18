import "./ProductSection.css";
import ProductCard from "../ProductCard/ProductCard.jsx";
import { products } from "../../Data/Products.js";
function  ProductSection({ searchTerm }) {

   const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
console.log("Search:", searchTerm);
console.log("Filtered:", filteredProducts);
 return (
    <div className="products">
      {filteredProducts.map((product) => (
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