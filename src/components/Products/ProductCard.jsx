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
import { IoInformationOutline } from "react-icons/io5";

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
      title: "Produit ajouté au panier.",
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
          isRound
          bg='white'
          color='gray.900'
          size='md'
          _hover={{ transform: "scale(1.1)" }}
          sx={{ ":hover > svg": { transform: "scale(1.1)" } }}
          transition='all 0.15s ease'
          icon={<Icon as={IoInformationOutline} transition='all 0.15s ease' />}
          boxShadow='base'
          onClick={() => navigate(`/produits/${id}`, { state: { product } })}
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
        </Stack>
      </Stack>
      <Stack align='center'>
        <Button
          variant='suroilSolid'
          width='full'
          onClick={handleAddToCart}>
          Ajouter au panier
        </Button>
        {/* <Link
            textDecoration='underline'
            fontWeight='medium'
            color={useColorModeValue("gray.600", "gray.400")}>
            Quick shop
          </Link> */}
      </Stack>
    </Stack>
  );
};

export default ProductCard;
