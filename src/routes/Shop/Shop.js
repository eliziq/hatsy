import "./Shop.scss";
import SHOP_DATA from "../../shop-data.json";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import ProductCard from "../../components/ProductCard/ProductCard";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {SHOP_DATA.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Shop;
