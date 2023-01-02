import { Link } from "react-router-dom";

import {
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerCloseButton,
  DrawerFooter,
  Stack,
  Avatar,
  Divider,
  Flex,
  Icon,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { HiHome, HiOutlineArrowsPointingOut } from "react-icons/hi2";

import { useLogoutMutation } from "../features/api/authApiSlice";

const links = [
  {
    name: "Account",
    href: "/account",
    icon: HiHome,
  },
];

const Sidebar = ({ isOpen, onClose, user }) => {
  const toast = useToast();
  const [logout] = useLogoutMutation();

  const handleLogout = async () => {
    console.log("Logout")
    try {
      await logout().unwrap();
      onClose()
    } catch (error) {
      let errMessage = "";
      errMessage = error.data?.message;
      toast({
        title: "Error logging out.",
        description: errMessage,
        status: "error",
        isClosable: true,
      });
    }
  };
  return (
    <>
      <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          {/* {currentUser && (
            <DrawerHeader textAlign='center'>
              <VStack>
                <Avatar
                  size={"2xl"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
                <Box>{currentUser.email}</Box>
              </VStack>
            </DrawerHeader>
          )} */}

          <DrawerBody textAlign='center'>
            <Divider mb={4} />
            <Stack>
              {links.map((link) => (
                <Link to={link.href} key={link.name} textDecoration='none'>
                  <Flex
                    // align='center'
                    textAlign='center'
                    p='4'
                    mx='4'
                    borderRadius='lg'
                    role='group'
                    cursor='pointer'
                    _hover={{
                      bg: "cyan.400",
                      color: "white",
                    }}>
                    {link.icon && (
                      <Icon
                        mr='4'
                        fontSize='16'
                        _groupHover={{
                          color: "white",
                        }}
                        as={link.icon}
                      />
                    )}
                    {link.name}
                  </Flex>
                </Link>
              ))}
              {/* <Link to={link.href} key={link.name} textDecoration='none'> */}
              <Box onClick={handleLogout}>
                <Flex
                  // align='center'
                  textAlign='center'
                  p='4'
                  mx='4'
                  borderRadius='lg'
                  role='group'
                  cursor='pointer'
                  _hover={{
                    bg: "red.400",
                    color: "white",
                  }}>
                  <Icon
                    mr='4'
                    fontSize='16'
                    _groupHover={{
                      color: "white",
                    }}
                    as={HiOutlineArrowsPointingOut}
                  />
                  Logout
                </Flex>
              </Box>
              {/* </Link> */}
            </Stack>
          </DrawerBody>

          {/* <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Logout
            </Button>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
