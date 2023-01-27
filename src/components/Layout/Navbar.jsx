import {
  Box,
  Flex,
  Avatar,
  IconButton,
  Button,
  ButtonGroup,
  Stack,
  VStack,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  MenuGroup,
  Text,
  Link,
  useToast,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  IoCartOutline,
  IoChevronDown,
  IoCloseOutline,
  IoMenuOutline,
  IoLogInOutline,
} from "react-icons/io5";

import { NavLink, Link as ReachLink, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../features/state/authSlice";
import { useLogoutMutation } from "../../features/api/authApiSlice";

import ShoppingCart from "../ShoppingCart/ShoppingCart";

import { ReactComponent as SUROIL } from "../../assets/SUROIL.svg";
import { ReactComponent as KDCM } from "../../assets/KDCM.svg";

import "./layout.css";

const links = [
  { name: "Présentation", href: "/" },
  { name: "Produits", href: "/produits" },
  { name: "Nos services", href: "/services" },
  { name: "Contact", href: "/nous-contacter" },
];

const userLinks = [{ name: "Compte", href: "/account" }];

const Navbar = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const user = useSelector(selectCurrentUser);
  const [logout] = useLogoutMutation();

  const {
    isOpen: isMobileViewOpen,
    onOpen: onMobileViewOpen,
    onClose: onMobileViewClose,
  } = useDisclosure();
  const {
    isOpen: isShoppingCartOpen,
    onOpen: onShoppingCartOpen,
    onClose: onShoppingCartClose,
  } = useDisclosure();

  const handleLogout = async () => {
    try {
      await logout().unwrap();
      navigate("/");
    } catch (error) {
      let errMessage = "Problème lors de la déconnexion.";
      if (error.data?.message) errMessage = error.data.message;
      toast({
        title: errMessage,
        status: "error",
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Box
        as='nav'
        role={"navigation"}
        fontFamily='heading'
        position='sticky'
        top='0px'
        zIndex='dropdown'
        bg='white'
        px={4}
        boxShadow={useColorModeValue("sm", "sm-dark")}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          {/* Logo */}
          <HStack w={"300px"}>
            <SUROIL />
            <KDCM />
          </HStack>

          {/* Links and actions */}
          <HStack spacing={"20"} display={{ base: "none", lg: "flex" }}>
            {/* <Link className="nav-link">Test</Link> */}
            <ButtonGroup variant='link' spacing='8' colorScheme={"black"}>
              <Button
                // className={({isActive}) => {return isActive ? 'nav-link nav-link-active' : 'nav-link'}}
                className='nav-link'
                as={NavLink}
                to='/'
                _hover={{ color: "suroilRed.600" }}>
                Présentation
              </Button>
              <Button
                className='nav-link'
                as={NavLink}
                to='/produits'
                _hover={{ color: "suroilRed.600" }}>
                Produits
              </Button>
              <Menu isLazy autoSelect={false}>
                <MenuButton
                  className='nav-link'
                  as={Button}
                  rightIcon={<IoChevronDown />}
                  _hover={{ color: "suroilRed.600" }}
                  _active={{ color: "suroilRed.600" }}>
                  Nos services
                </MenuButton>
                <MenuList zIndex='dropdown'>
                  <MenuItem as={NavLink} to='/service-apres-vente'>
                    Service aprés vente
                  </MenuItem>
                </MenuList>
              </Menu>
              <Menu isLazy autoSelect={false}>
                <MenuButton
                  className='nav-link'
                  as={Button}
                  rightIcon={<IoChevronDown />}
                  _hover={{ color: "suroilRed.600" }}
                  _active={{ color: "suroilRed.600" }}>
                  Contact
                </MenuButton>
                <MenuList zIndex='dropdown'>
                  <MenuItem as={NavLink} to='/nous-contacter'>
                    Nous contacter
                  </MenuItem>
                </MenuList>
              </Menu>
            </ButtonGroup>

            <HStack spacing='2'>
              <IconButton
                aria-label='shopping-cart'
                variant='link'
                fontSize='3xl'
                icon={<IoCartOutline />}
                onClick={onShoppingCartOpen}
                _hover={{ color: "suroilRed.600" }}
              />
              {user ? (
                <Menu isLazy autoSelect={false}>
                  <MenuButton
                    py={2}
                    transition='all 0.3s'
                    _focus={{ boxShadow: "none" }}>
                    <HStack>
                      <Avatar
                        name={user.username}
                        size={"sm"}
                        // src={
                        //   "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                        // }
                      />
                      <VStack
                        display={{ base: "none", md: "flex" }}
                        alignItems='flex-start'
                        spacing='1px'
                        ml='2'>
                        <Text fontSize='sm'>{user.username}</Text>
                        <Text fontSize='xs' color='gray.600'>
                          {user.email}
                        </Text>
                      </VStack>
                      <Box display={{ base: "none", md: "flex" }}>
                        <IoChevronDown />
                      </Box>
                    </HStack>
                  </MenuButton>
                  <MenuList
                    zIndex={2}
                    // bg={useColorModeValue("white", "gray.900")}
                    // borderColor={useColorModeValue("gray.200", "gray.700")}
                  >
                    {/* {userLinks.map((link) => (
                      <MenuItem as={ReachLink} key={link.name} to={link.href}>
                        {link.name}
                      </MenuItem>
                    ))} */}
                    <MenuGroup title='Profile'>
                      <MenuItem as={NavLink} to='/compte'>
                        Mon compte
                      </MenuItem>
                    </MenuGroup>
                    <MenuDivider />
                    <MenuItem onClick={handleLogout}>Se déconnecter</MenuItem>
                  </MenuList>
                </Menu>
              ) : (
                <Link to='/auth' as={NavLink}>
                  <Button
                    variant={"suroilGhost"}
                    rightIcon={<IoLogInOutline fontSize={"4vh"} />}>
                    Se connecter
                  </Button>
                </Link>
              )}
            </HStack>
          </HStack>

          {/* Mobile menu button */}
          <IconButton
            variant='link'
            fontSize='3xl'
            icon={isMobileViewOpen ? <IoCloseOutline /> : <IoMenuOutline />}
            aria-label={"Open Menu"}
            display={{ lg: "none", xl: "none" }}
            onClick={isMobileViewOpen ? onMobileViewClose : onMobileViewOpen}
          />
        </Flex>

        {isMobileViewOpen ? (
          <Box p={4} display={{ lg: "none" }}>
            <Stack as={"nav"} spacing={4} textAlign='center'>
              <Link
                as={NavLink}
                to='/'
                _hover={{ color: "suroil.primary" }}
                _active={{ color: "suroil.primary" }}>
                Présentation
              </Link>
              <Link
                as={NavLink}
                to='/produits'
                _hover={{ color: "suroil.primary" }}
                _active={{ color: "suroil.primary" }}>
                Produits
              </Link>
              <Link
                as={NavLink}
                to='/service-apres-vente'
                _hover={{ color: "suroil.primary" }}
                _active={{ color: "suroil.primary" }}>
                Nos services
              </Link>
              <Link
                as={NavLink}
                to='/nous-contacter'
                _hover={{ color: "suroil.primary" }}
                _active={{ color: "suroil.primary" }}>
                Contact
              </Link>
            </Stack>
          </Box>
        ) : null}
      </Box>

      <ShoppingCart isOpen={isShoppingCartOpen} onClose={onShoppingCartClose} />
    </>
  );
};

export default Navbar;
