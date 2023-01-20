import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

import { useLogoutMutation } from "../../features/api/authApiSlice";

const UserCard = ({ user }) => {
  const navigate = useNavigate();
  const toast = useToast();
  const [logout, { isLoading }] = useLogoutMutation();

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
    <Center width={"full"}>
      <Box
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}>
        <Flex justify={"center"}>
          <Avatar
            size={"xl"}
            name={user?.username}
            // src={
            //   "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
            // }
            alt={"Author"}
            css={{
              border: "2px solid white",
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={"center"} mb={5}>
            <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
              {user?.firstname} {user?.lastname}
            </Heading>
            <Text color={"gray.500"}>{user?.email}</Text>
          </Stack>

          <Button
            w={"full"}
            mt={8}
            rounded={"md"}
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
            isLoading={isLoading}
            loadingText='Déconnexion ...'
            onClick={handleLogout}>
            Se déconnecter
          </Button>
        </Box>
      </Box>
    </Center>
  );
};

export default UserCard;
