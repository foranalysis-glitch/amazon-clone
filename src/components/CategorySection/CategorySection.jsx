import "./CategorySection.css";

function CategorySection() {
  return (
    <div className="categories">

      <div className="category-box">
        <h3>Electronics</h3>
        <p>Mobiles, Laptops & Accessories</p>
      </div>

      <div className="category-box">
        <h3>Fashion</h3>
        <p>Clothing, Shoes & Watches</p>
      </div>

      <div className="category-box">
        <h3>Home</h3>
        <p>Furniture & Home Essentials</p>
      </div>

      <div className="category-box">
        <h3>Gaming</h3>
        <p>Consoles & Gaming Accessories</p>
      </div>

    </div>
  );
}

export default CategorySection;