import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 15px;
  background: #282c34;
  color: white;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 16px;
  font-weight: bold;
  margin: 0 10px;

  &:hover {
    color: #8a2be2;
  }
`;

const Navbar = () => {
  return (
    <NavContainer>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/category/anime-tshirts">Anime T-Shirts</StyledLink>
      <StyledLink to="/category/hoodies">Hoodies & Apparel</StyledLink>
      <StyledLink to="/category/shoes">Shoes & Sneakers</StyledLink>
      <StyledLink to="/category/stickers">Stickers & Decals</StyledLink>
      <StyledLink to="/category/figures">Collectible Figures</StyledLink>
      <StyledLink to="/category/limited">Limited Editions</StyledLink>
      <StyledLink to="/category/art">Art Prints</StyledLink>
      <StyledLink to="/category/manga">Manga & Books</StyledLink>
      <StyledLink to="/cart">Cart</StyledLink>
    </NavContainer>
  );
};

export default Navbar;
