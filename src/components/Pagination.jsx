import { Box, ButtonGroup, Button } from "@chakra-ui/react";

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pages.push(i);
  }
  return (
    <Box textAlign='center'>
      <ButtonGroup colorScheme='red' spacing={2}>
        {pages.map((page, index) => {
          return (
            <Button
              key={index}
              variant={currentPage === page ? "solid" : "outline"}
              onClick={() => {
                window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                setCurrentPage(page);
              }}>
              {page}
            </Button>
          );
        })}
      </ButtonGroup>
    </Box>
  );
};

export default Pagination;
