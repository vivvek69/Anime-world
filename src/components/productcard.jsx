// components/ProductCard.jsx
import { Link } from "react-router-dom";

const ProductCard = ({ product, category }) => {
  return (
    <Link to={`/product/${category}/${product.id}`} style={{ textDecoration: "none", color: "black" }}>
      <div className="card" style={{ padding: "10px", border: "1px solid #ddd", borderRadius: "10px" }}>
        <img
          src={product.image}
          alt={product.name}
          style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }}
        />
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
