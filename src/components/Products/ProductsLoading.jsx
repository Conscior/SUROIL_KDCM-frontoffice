import {
  SimpleGrid,
  Box,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

const ProductsLoading = () => {
  return (
    <SimpleGrid
      columns={{ base: "1", md: "3", lg: "4" }}
      columnGap={{ sm: "4", md: "6", lg: "4" }}
      rowGap={{ base: "8", md: "10" }}
      px='10'
      py='10'>
      {[...Array(8)].map(() => (
        <Box padding='6' boxShadow='lg' bg='white'>
          <SkeletonCircle size='10' />
          <SkeletonText mt='4' noOfLines={4} spacing='4' />
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default ProductsLoading;
