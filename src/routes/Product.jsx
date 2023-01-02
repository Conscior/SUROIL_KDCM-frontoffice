import { useLocation } from "react-router-dom";

import ProductDetails from "../components/ProductDetails";

const Product = () => {
  const { state } = useLocation();
  const { product } = state;
  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
};

export default Product;
