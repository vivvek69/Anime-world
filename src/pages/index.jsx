// pages/index.jsx
import { products } from "../data/products";
import ProductCard from "../components/productcard";

export default function Home() {
  return (
    <div>
      {Object.entries(products).map(([category, items]) => (
        <div key={category}>
          <h2>{category.replace(/-/g, " ")}</h2>
          <div className="grid">
            {items.map((product) => (
              <ProductCard key={product.id} product={product} category={category} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
