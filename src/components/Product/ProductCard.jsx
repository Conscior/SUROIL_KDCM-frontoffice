import {
  AspectRatio,
  Box,
  Button,
  Image,
  Link,
  Skeleton,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  IconButton,
  Icon,
  useToast,
} from "@chakra-ui/react";
import { BsInfo } from "react-icons/bs";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../features/state/shoppingCartSlice";

const ProductCard = ({ product }) => {
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id, name, imgURL } = product;

  const handleAddToCart = () => {
    dispatch(addItemToCart(product));
    toast({
      title: "Item added to cart.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Stack spacing={useBreakpointValue({ base: "4", md: "5" })}>
      <Box position='relative'>
        <AspectRatio ratio={4 / 3}>
          <Image
            src={imgURL}
            alt={name}
            draggable='false'
            fallback={<Skeleton />}
            borderRadius={useBreakpointValue({ base: "md", md: "xl" })}
          />
        </AspectRatio>
        <IconButton
          position='absolute'
          top='4'
          right='4'
          // aria-label={`Add ${name} to your favourites`}
          isRound
          bg='white'
          color='gray.900'
          size='md'
          _hover={{ transform: "scale(1.1)" }}
          sx={{ ":hover > svg": { transform: "scale(1.1)" } }}
          transition='all 0.15s ease'
          icon={<Icon as={BsInfo} transition='all 0.15s ease' />}
          boxShadow='base'
          onClick={() => navigate(`/products/${id}`, { state: { product } })}
          //   {...props}
        />
      </Box>
      <Stack>
        <Stack spacing='1'>
          <Text
            textAlign={"center"}
            fontWeight='medium'
            color={useColorModeValue("gray.700", "gray.400")}>
            {name}
          </Text>
          {/* <Text
            fontWeight='medium'
            color={useColorModeValue("gray.700", "gray.400")}>
            {price} DZD
          </Text> */}
          {/* <PriceTag price={price} salePrice={salePrice} currency='USD' /> */}
        </Stack>
        {/* <HStack>
          <Rating defaultValue={rating} size='sm' />
          <Text fontSize='sm' color={useColorModeValue("gray.600", "gray.400")}>
            12 Reviews
          </Text>
        </HStack> */}
      </Stack>
      <Stack align='center'>
        <Button variant={"solid"} bg='primary' color={"white"} width='full' onClick={handleAddToCart}>
          Add to cart
        </Button>
        {/* <Button colorScheme='blue' width='full' onClick={handleAddToCart}>
          Add to cart
        </Button> */}
        <Link
          textDecoration='underline'
          fontWeight='medium'
          color={useColorModeValue("gray.600", "gray.400")}>
          Quick shop
        </Link>
      </Stack>
    </Stack>
  );
};

export default ProductCard;