import { Box, SimpleGrid } from "@chakra-ui/react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Product 1",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint repellat ipsam error, labore similique officia debitis maiores nihil eum quis deleniti explicabo temporibus? Perspiciatis aut, praesentium pariatur aperiam culpa suscipit!",
    price: 224,
    imgURL:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
  },
  {
    id: 2,
    name: "Product 2",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint repellat ipsam error, labore similique officia debitis maiores nihil eum quis deleniti explicabo temporibus? Perspiciatis aut, praesentium pariatur aperiam culpa suscipit!",
    price: 230,
    imgURL:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
  },
  {
    id: 3,
    name: "Product 3",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint repellat ipsam error, labore similique officia debitis maiores nihil eum quis deleniti explicabo temporibus? Perspiciatis aut, praesentium pariatur aperiam culpa suscipit!",
    price: 140,
    imgURL:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
  },
];
const ProductGrid = () => {
  const columns = {
    base: Math.min(2, count),
    md: Math.min(3, count),
    lg: Math.min(4, count),
    xl: Math.min(5, count),
  };
  return (
    <Box
      maxW='7xl'
      mx='auto'
      px={{ base: "4", md: "8", lg: "12" }}
      py={{ base: "6", md: "8", lg: "12" }}>
      <SimpleGrid
        columns={columns}
        columnGap={{ base: "4", md: "6" }}
        rowGap={{ base: "8", md: "10" }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProductGrid;
