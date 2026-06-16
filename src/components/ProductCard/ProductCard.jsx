import "./ProductCard.css";

function ProductCard({ title, price, image }) {
  return (
    <div className="product-card">

      <img src={image} alt={title} />

      <h3>{title}</h3>

      <p className="price">
        ₹{price.toLocaleString()}
      </p>

      <p className="rating">
        ⭐⭐⭐⭐⭐
      </p>

      <button className="cart-btn">
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;