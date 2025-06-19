import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";

const CategoryPage = () => {
  const { category } = useParams();
  const items = products[category] || [];

  return (
    <div style={{ padding: "20px" }}>
      <h2>{category.toUpperCase()}</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {items.map((product) => (
          <Link
            key={product.id}
            to={`/product/${category}/${product.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div style={{ width: "200px", textAlign: "center" }}>
              <img src={product.image} alt={product.name} width="200" />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
