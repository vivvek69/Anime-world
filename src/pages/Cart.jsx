import React from "react";
import styled from "styled-components";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  text-align: center;
  padding: 50px;
`;

const ProductCard = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  margin: 10px auto;
  max-width: 400px;
  text-align: left;
  border-radius: 10px;
  background: #fff;
  display: flex;
  gap: 15px;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 100px;
  height: auto;
  border-radius: 8px;
`;

const Info = styled.div`
  flex: 1;
`;

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  const handleBuy = () => {
    navigate("/payment");
  };

  return (
    <Container>
      <h1>Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is currently empty. Start shopping now!</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <ProductCard key={item.id}>
              <ProductImage src={item.image} alt={item.name} />
              <Info>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p><strong>Price:</strong> {item.price}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove ❌</button>
              </Info>
            </ProductCard>
          ))}
          <button onClick={handleBuy}>Buy Now 💳</button>
        </>
      )}
    </Container>
  );
};

export default Cart;
