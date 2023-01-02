import {
  SimpleGrid,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Box,
  Flex,
  Text,
  HStack,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";

import { BsFilter } from "react-icons/bs";

import { useState } from "react";

import Pagination from "../components/Pagination";
// import ProductCard from "../components/ProductCard";
import ProductCard from "../components/Product/ProductCard";
import ProductFilter from "../components/ProductFilter";

import { useGetProductsQuery } from "../features/api/productsApiSlice";

const Shop = () => {
  const {
    isOpen: isProductFilterOpen,
    onOpen: onProductFilterOpen,
    onClose: onProductFilterClose,
  } = useDisclosure();

  const { data, isLoading, isSuccess, isError, error } = useGetProductsQuery();

  const [productFilter, setProductFilter] = useState(false);

  const products = productFilter
    ? data.filter((product) =>
        productFilter.categories.includes(product.category)
      )
    : data;

  const productsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const lastProductIndex = productsPerPage * currentPage;
  const firstProductIndex = lastProductIndex - productsPerPage;

  let content;
  if (isLoading) {
    content = (
      <SimpleGrid
        columns={{ base: "1", md: "3", lg: "4" }}
        columnGap={{ sm: "4", md: "6", lg: "4" }}
        rowGap={{ base: "8", md: "10" }}>
        <Box padding='6' boxShadow='lg' bg='white'>
          <SkeletonCircle size='10' />
          <SkeletonText mt='4' noOfLines={4} spacing='4' />
        </Box>
        <Box padding='6' boxShadow='lg' bg='white'>
          <SkeletonCircle size='10' />
          <SkeletonText mt='4' noOfLines={4} spacing='4' />
        </Box>
        <Box padding='6' boxShadow='lg' bg='white'>
          <SkeletonCircle size='10' />
          <SkeletonText mt='4' noOfLines={4} spacing='4' />
        </Box>
        <Box padding='6' boxShadow='lg' bg='white'>
          <SkeletonCircle size='10' />
          <SkeletonText mt='4' noOfLines={4} spacing='4' />
        </Box>
      </SimpleGrid>
    );
  } else if (isSuccess) {
    content = (
      <>
        {/* <CategoriesBar /> */}
        <IconButton
          variant={"outline"}
          size={"lg"}
          color={"primary"}
          w={"50px"}
          mb={"5"}
          icon={<BsFilter />}
          onClick={onProductFilterOpen}
        />
        <SimpleGrid
          // p={50}
          columns={{ base: "1", md: "3", lg: "4" }}
          // columns={[2, null, 3]}
          // minChildWidth='220px'
          columnGap={{ sm: "4", md: "6", lg: "4" }}
          rowGap={{ base: "8", md: "10" }}>
          {products?.slice(firstProductIndex, lastProductIndex).map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </SimpleGrid>
        <Pagination
          totalItems={products.length}
          itemsPerPage={productsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <ProductFilter
          isOpen={isProductFilterOpen}
          onClose={onProductFilterClose}
          setProductFilter={setProductFilter}
        />
      </>
    );
  } else if (isError) {
    content = <div>{error.data.message.toString()}</div>;
  }

  return <>{content}</>;
};

export default Shop;