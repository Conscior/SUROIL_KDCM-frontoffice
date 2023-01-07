import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  VStack,
  Select,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";

import { useState } from "react";

import { useGetCategoriesQuery } from "../features/api/categoriesApiSlice";

// Handle sub categories

const ProductFilter = ({ isOpen, onClose, setProductFilter }) => {
  const [filterFields, setFilterFields] = useState({
    category1: false,
    category2: false,
    category3: false,
    category4: false,
  });
  const { category1, category2, category3, category4 } = filterFields;

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilterFields({ ...filterFields, [name]: value });
  };

  const {
    data: categories,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetCategoriesQuery();

  const handleFilterApply = () => {
    const filter = {
      categories: [],
    };
    // Categories filter
    if (category4) {
      filter.categories = [category4];
    } else if (!category4 && category3) {
      filter.categories = categories.filter(
        (category) => category.parent === category3
      );
    } else if (!category4 && !category3 && category2) {
      let thirdTierCategories = categories.filter(
        (category) => category.parent === category2
      );
      let fourthTierCategories = [];
      thirdTierCategories.forEach((thirdTierCategory) =>
        fourthTierCategories.push(
          categories.filter(
            (fourthTierCategory) =>
              fourthTierCategory.parent === thirdTierCategory.id
          )
        )
      );
      filter.categories = fourthTierCategories + thirdTierCategories;
    } else if (!category4 && !category3 && category2 && category1) {
    }

    setProductFilter(filter);
    onClose();
  };

  const handleFilterReset = () => {
    setProductFilter(false);
    setFilterFields({
      category1: false,
      category2: false,
      category3: false,
      category4: false,
    });
    onClose();
  };

  return (
    <Drawer placement='left' isOpen={isOpen} onClose={onClose} size='sm'>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Filtrer les produits</DrawerHeader>

        <DrawerBody>
          <VStack>
            <Select
              name='category1'
              value={category1}
              onChange={handleFilterChange}
              placeholder='Selectionner une categorie'>
              {categories
                ?.filter((category) => category.level === 1)
                .map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
            </Select>
            <Select
              name='category2'
              value={category2}
              onChange={handleFilterChange}
              placeholder='Selectionner une categorie'
              {...(category1 ? {} : { hidden: true, icon: false })}>
              {categories
                ?.filter((category) => category.parent === category1)
                .map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
            </Select>
            <Select
              name='category3'
              value={category3}
              onChange={handleFilterChange}
              placeholder='Selectionner une categorie'
              {...(category1 && category2
                ? {}
                : { hidden: true, icon: false })}
                >
              {categories
                ?.filter((category) => category.parent === category2)
                .map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
            </Select>
            <Select
              name='category4'
              value={category4}
              onChange={handleFilterChange}
              placeholder='Selectionner une categorie'
              {...(category1 && category2 && category3
                ? {}
                : { hidden: true, icon: false })}
                >
              {categories
                ?.filter((category) => category.parent === category3)
                .map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
            </Select>
          </VStack>
        </DrawerBody>

        <DrawerFooter>
          <Button variant='outline' mr={3} onClick={handleFilterReset}>
            Réinitialiser
          </Button>
          <Button colorScheme={"red"} onClick={handleFilterApply}>
            Appliquer
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ProductFilter;
