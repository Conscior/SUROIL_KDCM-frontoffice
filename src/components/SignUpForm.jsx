import {
  Box,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Icon,
  Link,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Image,
  useToast,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import { ReactComponent as UNDRAW_JOIN } from "../assets/undraw_join.svg";
import { BsEye, BsEyeSlash } from "react-icons/bs";

import { useState } from "react";

import { useCreateUserMutation } from "../features/api/usersApiSlice";

const SignUpForm = ({ switchAuth }) => {
  const toast = useToast();
  const [createUser, { isLoading }] = useCreateUserMutation();
  const [showPassword, setShowPassword] = useState(false);

  const [formFields, setFormFields] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPwd: "",
  });
  const { userName, email, password, confirmPwd } = formFields;

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const roles = ["Employee"];
    try {
      const res = await createUser({ userName, email, password, roles });
      toast({
        title: "Account created.",
        description: "We've created your account for you.", //TODO Custom
        status: "success",
        isClosable: true,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
      let errMessage = "";
      if (err.data?.message) {
        errMessage = err.data.message;
      } else {
        errMessage = "Sign up failed";
      }

      // Toggle the Toast
      toast({
        title: "Error signing up.",
        description: errMessage, //TODO Custom
        status: "error",
        isClosable: true,
      });
    }
  };

  return (
    <Box
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      px={10}
      py={5}>
      <Stack direction={{ base: "column", md: "row" }} spacing='0'>
        <Flex flex={1} display={{ base: "none", lg: "flex", xl: "flex" }}>
          <UNDRAW_JOIN />
        </Flex>
        <Flex flex={1} align={"center"} justify={"center"}>
          <Stack spacing={8}>
            <Stack spacing='6'>
              {/* <Logo /> */}
              <Stack
                spacing={{
                  base: "2",
                  md: "3",
                }}
                textAlign='center'>
                <Heading>Créer un nouveau compte</Heading>
                <HStack spacing='1' justify='center'>
                  <Text color={"grey"}>Vous possédez déjà un compte?</Text>
                  <Button
                    variant='link'
                    color={"secondary"}
                    onClick={switchAuth}
                    size='sm'>
                    Connectez-vous
                  </Button>
                </HStack>
              </Stack>
            </Stack>
            <Box
              py={{
                base: "0",
                sm: "8",
              }}
              px={{
                base: "4",
                sm: "10",
              }}
              bg={useBreakpointValue({
                base: "transparent",
                sm: "bg-surface",
              })}
              boxShadow={{
                base: "none",
                sm: useColorModeValue("md", "md-dark"),
              }}
              borderRadius={{
                base: "none",
                sm: "xl",
              }}>
              <form onSubmit={handleFormSubmit}>
                <Stack spacing={4}>
                  <FormControl id='userName' isRequired>
                    <FormLabel>Nom d'utilisateur</FormLabel>
                    <Input
                      name='userName'
                      type='text'
                      value={userName}
                      onChange={handleFormChange}
                    />
                  </FormControl>

                  <FormControl id='email' isRequired>
                    <FormLabel>Adresse e-mail</FormLabel>
                    <Input
                      name='email'
                      type='email'
                      value={email}
                      onChange={handleFormChange}
                    />
                  </FormControl>

                  <FormControl id='password' isRequired>
                    <FormLabel>Mot de passe</FormLabel>
                    <InputGroup>
                      <Input
                        name='password'
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={handleFormChange}
                      />
                      <InputRightElement h={"full"}>
                        <Button
                          variant={"ghost"}
                          onClick={() =>
                            setShowPassword((showPassword) => !showPassword)
                          }>
                          {showPassword ? (
                            <Icon as={BsEye} />
                          ) : (
                            <Icon as={BsEyeSlash} />
                          )}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                  <Button
                    type='submit'
                    isLoading={isLoading}
                    loadingText='Creation du compte ...'
                    size='lg'
                    bg={"secondary"}
                    color={"white"}
                    _hover={{
                      bg: "primary",
                    }}>
                    S'inscrire
                  </Button>
                </Stack>
              </form>
            </Box>
          </Stack>
        </Flex>
      </Stack>
    </Box>
  );

  return (
    <Flex p={8} flex={1} align={"center"} justify={"center"}>
      <form onSubmit={handleFormSubmit}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Créer un nouveau compte</Heading>
          <FormControl id='userName' isRequired>
            <FormLabel>Nom d'utilisateur</FormLabel>
            <Input
              name='userName'
              type='text'
              value={userName}
              onChange={handleFormChange}
            />
          </FormControl>

          <FormControl id='email' isRequired>
            <FormLabel>Adresse e-mail</FormLabel>
            <Input
              name='email'
              type='email'
              value={email}
              onChange={handleFormChange}
            />
          </FormControl>

          <FormControl id='password' isRequired>
            <FormLabel>Mot de passe</FormLabel>
            <InputGroup>
              <Input
                name='password'
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handleFormChange}
              />
              <InputRightElement h={"full"}>
                <Button
                  variant={"ghost"}
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }>
                  {showPassword ? (
                    <Icon as={BsEye} />
                  ) : (
                    <Icon as={BsEyeSlash} />
                  )}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <Stack spacing={6}>
            <Link textAlign={"end"} color={"blue.500"}>
              {/* Forgot password? */}
            </Link>
            <Button
              type='submit'
              isLoading={isLoading}
              loadingText='Submitting'
              size='lg'
              bg={"primary"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}>
              S'inscrire
            </Button>
          </Stack>
        </Stack>
      </form>
    </Flex>
  );
};

export default SignUpForm;
