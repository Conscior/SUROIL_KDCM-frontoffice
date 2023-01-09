import { SimpleGrid } from "@chakra-ui/react";

import ProductCard from "./ProductCard";

const ProductsGrid = ({ products, firstProductIndex, lastProductIndex }) => {
  return (
    <SimpleGrid
      columns={{ base: "1", md: "3", lg: "4" }}
      columnGap={{ sm: "4", md: "6", lg: "4" }}
      rowGap={{ base: "8", md: "10" }}
      py='5'>
      {products?.slice(firstProductIndex, lastProductIndex).map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </SimpleGrid>
  );
};

export default ProductsGrid;
