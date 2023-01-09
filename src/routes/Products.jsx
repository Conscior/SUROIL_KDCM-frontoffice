import { Box, IconButton, useDisclosure } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";
import { motion } from "framer-motion";

import { useState } from "react";
import { useGetProductsQuery } from "../features/api/productsApiSlice";

import ProductsGrid from "../components/Products/ProductsGrid";
import ProductsLoading from "../components/Products/ProductsLoading";
import Pagination from "../components/Pagination";
import Products404 from "../components/Products/Products404";
import ProductFilter from "../components/ProductFilter";

const Products = () => {
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
    content = <ProductsLoading />;
  } else if (isSuccess) {
    content = (
      <Box px='10'>
        {/* <CategoriesBar /> */}
        <IconButton
          variant={"outline"}
          size={"lg"}
          color={"primary"}
          w={"50px"}
          // mb={"5"}
          icon={<BsFilter />}
          onClick={onProductFilterOpen}
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
        <ProductFilter
          isOpen={isProductFilterOpen}
          onClose={onProductFilterClose}
          setProductFilter={setProductFilter}
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      {content}
    </motion.div>
  );
};

export default Products;
