import React from "react";
import styled from "styled-components";

const PaymentContainer = styled.div`
  padding: 50px;
  max-width: 600px;
  margin: auto;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  background: #111;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background: #333;
  }
`;

const PaymentPage = () => {
  const handlePayment = (e) => {
    e.preventDefault();
    alert("Payment Successful! 🎉");
  };

  return (
    <PaymentContainer>
      <Title>Payment Page</Title>
      <Form onSubmit={handlePayment}>
        <Input type="text" placeholder="Full Name" required />
        <Input type="email" placeholder="Email Address" required />
        <Input type="text" placeholder="Card Number" required />
        <Input type="text" placeholder="Expiry Date (MM/YY)" required />
        <Input type="text" placeholder="CVV" required />
        <Button type="submit">Pay Now</Button>
      </Form>
    </PaymentContainer>
  );
};

export default PaymentPage;
