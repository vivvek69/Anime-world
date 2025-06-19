import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules"; // Added Navigation for Netflix scrolling
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

// Dummy Data
const categories = [
  { name: "Anime T-Shirts", img: "/images/tshirt.png", path: "/category/anime-tshirts" },
  { name: "Hoodies & Apparel", img: "/images/hoodie.png", path: "/category/hoodies" },
  { name: "Shoes & Sneakers", img: "/images/shoes.png", path: "/category/shoes" },
  { name: "Stickers & Decals", img: "/images/stickers.png", path: "/category/stickers" },
  { name: "Collectible Figures", img: "/images/figures.png", path: "/category/figures" },
];

const trendingProducts = [
  { id: 7, category: "hoodies", img: "/images/hoodie.jpg", name: "Demon Slayer Hoodie" },
  { id: 6, category: "hoodies", img: "/images/jacket.jpg", name: "Attack on Titan Jacket" },
  { id: 10, category: "shoes", img: "/images/shoes.jpg", name: "Naruto Sneakers" },
  { id: 15, category: "figures", img: "/images/figures.jpg", name: "One Piece Figure" },
  { id: 5, category: "anime-tshirts", img: "/images/tshirt.jpg", name: "Bleach T-Shirt" },
  { id: 99, category: "art", img: "/images/hat.jpg", name: "Dragon Ball Cap" }, // dummy
];

const newReleases = [
  { id: 20, category: "art", img: "/images/poster.jpg", name: "Jujutsu Kaisen Poster" },
  { id: 24, category: "manga", img: "/images/manga.jpg", name: "Tokyo Revengers Manga" },
  { id: 13, category: "stickers", img: "/images/keychain.jpg", name: "Chainsaw Man Keychain" },
  { id: 10, category: "shoes", img: "/images/backpack.jpg", name: "One Punch Man Backpack" },
  { id: 11, category: "hoodies", img: "/images/new2.jpg", name: "Neon Genesis Hoodie" },
  { id: 16, category: "figures", img: "/images/new1.jpg", name: "Death Note Figure" },
];

// Styled Components
const Container = styled.div`
  padding: 30px;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: left;
  padding-left: 20px;
`;

const SwiperContainer = styled.div`
  padding: 0 20px;
`;

const ProductCard = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: black;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  width: 200px; /* Consistent Size */
  
  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 200px;
    height: 250px;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const ProductName = styled.p`
  margin-top: 8px;
  font-size: 14px;
  font-weight: bold;
`;

// HomePage Component
const HomePage = () => {
  return (
    <Container>
      {/* Categories Section */}
      <SectionTitle>Browse Categories</SectionTitle>
      <SwiperContainer>
        <Swiper spaceBetween={15} slidesPerView={4} freeMode={true} navigation={true} modules={[FreeMode, Navigation]}>
          {categories.map((category) => (
            <SwiperSlide key={category.name}>
              <ProductCard to={category.path}>
                <img src={category.img} alt={category.name} />
                <ProductName>{category.name}</ProductName>
              </ProductCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperContainer>

      {/* Trending Now Section */}
      <SectionTitle>Trending Now</SectionTitle>
      <SwiperContainer>
        <Swiper spaceBetween={15} slidesPerView={4} freeMode={true} navigation={true} modules={[FreeMode, Navigation]}>
          {trendingProducts.map((product) => (
            <SwiperSlide key={product.id}>
            <ProductCard to={`/product/${product.category}/${product.id}`}>
            <img src={product.img} alt={product.name} />
                <ProductName>{product.name}</ProductName>
              </ProductCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperContainer>

      {/* New Releases Section */}
      <SectionTitle>New Releases</SectionTitle>
      <SwiperContainer>
        <Swiper spaceBetween={15} slidesPerView={4} freeMode={true} navigation={true} modules={[FreeMode, Navigation]}>
          {newReleases.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard to={`/product/${product.id}`}>
                <img src={product.img} alt={product.name} />
                <ProductName>{product.name}</ProductName>
              </ProductCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperContainer>
    </Container>
  );
};

export default HomePage;
