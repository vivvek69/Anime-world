import { Link } from "react-router-dom";

const categories = [
  { name: "Anime T-Shirts", path: "/category/anime-tshirts", image: "/images/tshirt.png" },
  { name: "Hoodies & Apparel", path: "/category/hoodies", image: "/images/hoodies.png" },
  { name: "Shoes & Sneakers", path: "/category/shoes", image: "/images/shoes.png" },
  { name: "Stickers & Decals", path: "/category/stickers", image: "/images/stickers.png" },
  {name: "figures", path: "/category/figures",image: "/images/figures.jpg"},
  {name:"Limted edition",path:"/category/figures",image:"/images/limited.png"},
  {name:"Managa",path:"/category/figures",image:"/images/manga.png"}
];

const CategoryList = () => {
  return (
    <div className="categories">
      {categories.map((category, index) => (
        <><Link key={index} to={category.path} className="category-card">
          <img src={category.image} alt={category.name} />
          <p>{category.name}</p>
        </Link><Link to={`/product/${category}/${product.id}`}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
          </Link></>
      
        
      ))}
    </div>
  );
};

export default CategoryList;
