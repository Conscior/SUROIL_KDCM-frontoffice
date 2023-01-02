import {
  Box,
  FormControl,
  FormLabel,
  Input,
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
  useToast,
} from "@chakra-ui/react";

import { BsEye, BsEyeSlash } from "react-icons/bs";

import { useState } from "react";

import { useCreateUserMutation } from "../features/api/usersApiSlice";

const SignUpForm = () => {
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
    <>
      <Stack spacing={8} maxW={"lg"}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Créer un nouveau compte
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}>
          <form onSubmit={handleFormSubmit}>
            <Stack spacing={4}>
              {/* <HStack>
                <Box>
                  <FormControl id='firstName' isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type='text' />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id='lastName'>
                    <FormLabel>Last Name</FormLabel>
                    <Input type='text' />
                  </FormControl>
                </Box>
              </HStack> */}
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

              <Stack spacing={10} pt={2}>
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
              {/* <Stack pt={6}>
                <Text align={"center"}>
                  Already a user? <Link color={"blue.400"}>Login</Link>
                </Text>
              </Stack> */}
            </Stack>
          </form>
        </Box>
      </Stack>
    </>
  );
};

export default SignUpForm;
