import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductGrid = ({ products, category }) => {
  const navigate = useNavigate();

  return (
    <div className="product-grid" style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {products.map((product) => (
        <div
          key={product.id}
          className="product-card"
          onClick={() => navigate(`/product/${category}/${product.id}`)}
          style={{
            cursor: 'pointer',
            border: '1px solid #ddd',
            padding: '10px',
            borderRadius: '10px',
            width: '200px'
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
          />
          <h4>{product.name}</h4>
          <p>₹{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
