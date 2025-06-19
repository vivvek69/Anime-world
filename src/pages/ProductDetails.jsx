import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { category, id } = useParams();
  const { addToCart } = useCart();

  const itemList = products[category]
  console.log("category:", category, "id:", id);
  const product = itemList?.find((p) => p.id === parseInt(id));

  if (!product) return <p>⚠️ Product not found.</p>;

  return (
    <div style={{ padding: "30px", display: "flex", gap: "20px", alignItems: "flex-start" }}>
      <img
        src={product.image}
        alt={product.name}
        width={300}
        style={{ borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }}
      />
      <div>
        <h1>{product.name}</h1>
        <p><strong>Price:</strong> {product.price}</p>
        <p>{product.description}</p>

        {product.offlineAvailability && (
          <>
            <h4>🛍️ Offline Availability:</h4>
            <ul>
              {product.offlineAvailability.map((store, i) => (
                <li key={i}>{store}</li>
              ))}
            </ul>
          </>
        )}

        {product.locations?.length > 0 && (
          <>
            <h4>📍 Nearby Store Locations:</h4>
            <ul>
              {product.locations.map((place, i) => (
                <li key={i}>{place}</li>
              ))}
            </ul>
          </>
        )}

        <button
          onClick={() => addToCart(product)}
          style={{
            marginTop: "15px",
            padding: "10px 20px",
            backgroundColor: "#f1356d",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          🛒 Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
