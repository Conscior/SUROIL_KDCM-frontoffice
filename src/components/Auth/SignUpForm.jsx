import {
  Box,
  Stack,
  HStack,
  Button,
  Heading,
  Text,
  Icon,
  Link,
  Flex,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
  useToast,
} from "@chakra-ui/react";
import {
  IoPerson,
  IoMail,
  IoLockClosed,
  IoEye,
  IoEyeOff,
} from "react-icons/io5";
import { ReactComponent as UNDRAW_JOIN } from "../../assets/undraw_join.svg";
import { motion } from "framer-motion";

import { useState } from "react";
import { useCreateUserMutation } from "../../features/api/usersApiSlice";

const SignUpForm = ({ switchAuth }) => {
  const toast = useToast();
  const [createUser, { isLoading }] = useCreateUserMutation();
  const [showPwd, setShowPwd] = useState(false);

  const [formFields, setFormFields] = useState({
    username: "",
    email: "",
    password: "",
    confirmPwd: "",
  });
  const { username, email, password, confirmPwd } = formFields;

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const roles = ["Employee"];
    try {
      await createUser({ username, email, password, roles }).unwrap();
      toast({
        title: "Compte créer avec succès !",
        description: "Nous avons créé votre compte pour vous.",
        status: "success",
        isClosable: true,
      });
    } catch (error) {
      let errMessage = "Problème lors de la création de votre compte.";
      if (error.data?.message) errMessage = error.data.message;
      toast({
        title: errMessage,
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
      <HStack spacing={8}>
        <Flex flex={1} display={{ base: "none", lg: "flex", xl: "flex" }}>
          <UNDRAW_JOIN />
        </Flex>
        <Flex
          flex={1}
          align={"center"}
          justify={"center"}
          width={"50%"}
          boxShadow='lg'
          borderRadius='lg'
          pt={8}
          pb={4}>
          <Stack spacing={8}>
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
            <Box
              py={{
                base: "0",
                sm: "8",
              }}
              px={{
                base: "4",
                sm: "10",
              }}>
              <form onSubmit={handleFormSubmit}>
                <Stack spacing={4}>
                  <FormControl id='username' isRequired>
                    <FormLabel>Nom d'utilisateur</FormLabel>
                    <InputGroup>
                      <InputLeftElement children={<IoPerson />} />
                      <Input
                        name='username'
                        type='text'
                        value={username}
                        onChange={handleFormChange}
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl id='email' isRequired>
                    <FormLabel>Adresse e-mail</FormLabel>
                    <InputGroup>
                      <InputLeftElement children={<IoMail />} />
                      <Input
                        name='email'
                        type='email'
                        value={email}
                        onChange={handleFormChange}
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl id='password' isRequired>
                    <FormLabel>Mot de passe</FormLabel>
                    <InputGroup>
                      <InputLeftElement
                        h={"full"}
                        children={<IoLockClosed />}
                      />
                      <Input
                        name='password'
                        type={showPwd ? "text" : "password"}
                        value={password}
                        onChange={handleFormChange}
                      />
                      <InputRightElement h={"full"}>
                        <Button
                          variant={"ghost"}
                          onClick={() => setShowPwd(!showPwd)}>
                          {showPwd ? (
                            <Icon as={IoEye} />
                          ) : (
                            <Icon as={IoEyeOff} />
                          )}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>

                  <Box />

                  <Button
                    type='submit'
                    size='lg'
                    variant={"kdcmSolid"}
                    isLoading={isLoading}
                    loadingText='Creation du compte ...'>
                    S'inscrire
                  </Button>
                </Stack>
              </form>
            </Box>
          </Stack>
        </Flex>
      </HStack>
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
