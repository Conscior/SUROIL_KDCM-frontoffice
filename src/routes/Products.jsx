import { Box, IconButton, useDisclosure } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";
import { motion } from "framer-motion";

import { useState } from "react";
import { useGetProductsQuery } from "../features/api/productsApiSlice";

import ProductsGrid from "../components/Products/ProductsGrid";
import ProductsLoading from "../components/Products/ProductsLoading";
import Pagination from "../components/Pagination";
import Products404 from "../components/Products/Products404";
import ProductsFilter from "../components/Products/ProductsFilter";

const Products = () => {
  const {
    isOpen: isProductsFilterOpen,
    onOpen: onProductsFilterOpen,
    onClose: onProductsFilterClose,
  } = useDisclosure();

  const { data, isLoading, isSuccess, isError } = useGetProductsQuery();

  const [productsFilter, setProductsFilter] = useState(false);

  const products = productsFilter
    ? data.filter((product) =>
        productsFilter.categories.includes(product.category)
      )
    : data;

  const productsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const lastProductIndex = productsPerPage * currentPage;
  const firstProductIndex = lastProductIndex - productsPerPage;

  let content;
  if (isLoading) {
    content = <ProductsLoading />;
  } else if (isSuccess) {
    content = (
      <Box>
        {/* <CategoriesBar /> */}
        <IconButton
          variant={"outline"}
          size={"lg"}
          color={"primary"}
          w={"50px"}
          // mb={"5"}
          icon={<BsFilter />}
          onClick={onProductsFilterOpen}
        />
        <ProductsGrid
          products={products}
          firstProductIndex={firstProductIndex}
          lastProductIndex={lastProductIndex}
        />
        <Pagination
          totalItems={products.length}
          itemsPerPage={productsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <ProductsFilter
          isOpen={isProductsFilterOpen}
          onClose={onProductsFilterClose}
          setProductsFilter={setProductsFilter}
        />
      </Box>
    );
  } else if (isError) {
    content = <Products404 />;
    // if (error.data) {
    //   content = <div>{error.data.message.toString()}</div>;
    // } else {
    //   content = <div>{error.error.toString()}</div>;
    // }
  }

  return (
    <Box
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      p={8}>
      {content}
    </Box>
  );
};

export default Products;
