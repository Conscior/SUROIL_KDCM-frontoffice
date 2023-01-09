import { ReactComponentElement } from "react";
import {
  Box,
  Flex,
  Avatar,
  IconButton,
  Button,
  ButtonGroup,
  useDisclosure,
  useColorModeValue,
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
} from "@chakra-ui/react";
import {
  BsList,
  BsX,
  BsBoxArrowInRight,
  BsCart,
  BsChevronDown,
} from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";

import { NavLink, Link as ReachLink } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "../features/state/authSlice";
import { useLogoutMutation } from "../features/api/authApiSlice";

import Sidebar from "./Sidebar";
import ShoppingCart from "./ShoppingCart";

import { ReactComponent as SUROIL } from "../assets/SUROIL.svg";
import { ReactComponent as KDCM } from "../assets/KDCM.svg";
// import { KDCM as KDCM } from "../assets/KDCM.svg"

const links = [
  { name: "Présentation", href: "/" },
  { name: "Produits", href: "/products" },
  { name: "Nos services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const userLinks = [{ name: "Compte", href: "/account" }];

const Navbar = () => {
  const user = useSelector(selectCurrentUser);
  const [logout] = useLogoutMutation();

  const {
    isOpen: isMobileViewOpen,
    onOpen: onMobileViewOpen,
    onClose: onMobileViewClose,
  } = useDisclosure();
  const {
    isOpen: isDrawerOpen,
    // onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();
  const {
    isOpen: isShoppingCartOpen,
    onOpen: onShoppingCartOpen,
    onClose: onShoppingCartClose,
  } = useDisclosure();

  return (
    <>
      <Box
        as='nav'
        role={"navigation"}
        bg='bg-surface'
        px={4}
        boxShadow={useColorModeValue("sm", "sm-dark")}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          {/* Logo */}
          <HStack w={"300px"}>
            <SUROIL />
            <KDCM />
          </HStack>

          {/* Links and actions */}
          <HStack spacing={"10"} display={{ base: "none", lg: "flex" }}>
            <ButtonGroup variant='link' spacing='8'>
              <Button
                as={NavLink}
                to='/'
                style={({ isActive }) =>
                  isActive ? { color: "black" } : { color: "grey" }
                }
                _hover={{}}>
                Présentation
              </Button>
              <Button
                as={NavLink}
                to='/products'
                style={({ isActive }) =>
                  isActive ? { color: "black" } : { color: "grey" }
                }
                _hover={{}}>
                Produits
              </Button>
              <Menu isLazy autoSelect={false}>
                <MenuButton
                  as={Button}
                  rightIcon={<BsChevronDown />}
                  _hover={{}}>
                  Nos services
                </MenuButton>
                <MenuList zIndex={2}>
                  <MenuItem as={NavLink} to='/service-apres-vente'>
                    Service aprés vente
                  </MenuItem>
                  <MenuItem as={NavLink} to='/installation'>
                    Installation
                  </MenuItem>
                  <MenuItem as={NavLink} to='/formation'>
                    Formation
                  </MenuItem>
                </MenuList>
              </Menu>
              <Button
                as={NavLink}
                to='/contact'
                style={({ isActive }) =>
                  isActive ? { color: "black" } : { color: "grey" }
                }
                _hover={{}}>
                Contact
              </Button>
            </ButtonGroup>

            <HStack spacing='2'>
              <IconButton
                aria-label='shopping-cart'
                variant='link'
                fontSize='3xl'
                icon={<BsCart />}
                onClick={onShoppingCartOpen}
              />
              {user ? (
                <Menu isLazy autoSelect={false}>
                  <MenuButton
                    py={2}
                    transition='all 0.3s'
                    _focus={{ boxShadow: "none" }}>
                    <HStack>
                      <Avatar
                        size={"sm"}
                        src={
                          "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                        }
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
                        <FiChevronDown />
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
                      <MenuItem as={ReachLink}  to='/compte'>
                        Mon compte
                      </MenuItem>
                    </MenuGroup>
                    <MenuDivider />
                    <MenuItem onClick={() => logout()}>Se déconnecter</MenuItem>
                  </MenuList>
                </Menu>
              ) : (
                <Link to='/auth' as={ReachLink}>
                  <Button
                    bg={"primary"}
                    color={"white"}
                    // colorScheme={"teal"}
                    rightIcon={<Icon as={BsBoxArrowInRight} />}>
                    Se connecter
                  </Button>
                </Link>
              )}
            </HStack>
          </HStack>

          {/* Mobile menu button */}
          <IconButton
            size={"md"}
            icon={isMobileViewOpen ? <Icon as={BsX} /> : <Icon as={BsList} />}
            aria-label={"Open Menu"}
            display={{ lg: "none", xl: "none" }}
            onClick={isMobileViewOpen ? onMobileViewClose : onMobileViewOpen}
          />
        </Flex>

        {isMobileViewOpen ? (
          <Box pb={4} display={{ lg: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {links.map((link) => (
                <Link
                  as={NavLink}
                  to={link.href}
                  key={link.name}
                  textDecoration='none'
                  _hover={{ textDecoration: "none" }}
                  style={({ isActive }) => (isActive ? {} : { color: "red" })}>
                  {link.name}
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      {/* SideBar */}
      <Sidebar isOpen={isDrawerOpen} onClose={onDrawerClose} user={user} />

      <ShoppingCart isOpen={isShoppingCartOpen} onClose={onShoppingCartClose} />
    </>
  );
};

export default Navbar;
