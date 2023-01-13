import {
  Box,
  Text,
  Button,
  IconButton,
  Flex,
  Heading,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
  Link,
  Stack,
  HStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  useToast,
  useColorModeValue,
} from "@chakra-ui/react";
import { IoMail, IoLockClosed, IoEye, IoEyeOff } from "react-icons/io5";
import { ReactComponent as UNDRAW_MOBILE_APP } from "../../assets/undraw_mobile_app.svg";
import { motion } from "framer-motion";

import { useState } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setCredentials } from "../../features/state/authSlice";
import { useLoginMutation } from "../../features/api/authApiSlice";

const SignInForm = ({ switchAuth }) => {
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const [showPwd, setShowPwd] = useState(false);
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formFields;

  const [fieldsErrMessage, setFieldsErrMessage] = useState({
    email: "",
    password: "",
  });
  // const [formErrMessage, setFormErrMessage] = useState("");

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleFormValidation = () => {
    let errState = false;
    // email
    if (!email || !email.length) {
      setFieldsErrMessage({
        ...fieldsErrMessage,
        email: "Adresse mail requise.",
      });
      errState = true;
    } else {
      setFieldsErrMessage({
        ...fieldsErrMessage,
        email: "",
      });
    }

    // password
    if (!password) {
      setFieldsErrMessage({
        ...fieldsErrMessage,
        password: "Mot de passe requis.",
      });
      errState = true;
    } else {
      setFieldsErrMessage({
        ...fieldsErrMessage,
        password: "",
      });
    }

    return errState;
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // TODO handle form validation

    try {
      const { accessToken, userInfo } = await login({
        email,
        password,
      }).unwrap();
      dispatch(setCredentials({ accessToken, userInfo }));
      navigate("/");
    } catch (error) {
      let errMessage = "Problème lors de la connexion a votre compte.";
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
      px={5}
      py={8}>
      <HStack spacing={8}>
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
              <Heading>Connectez-vous à votre compte</Heading>
              <HStack spacing='1' justify='center'>
                <Text color={"grey"}>Vous ne possédez pas de compte?</Text>
                <Button
                  variant='link'
                  color={"primary"}
                  onClick={switchAuth}
                  size='sm'>
                  Inscrivez-vous
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
                  <FormControl
                    id='email'
                    isRequired
                    isInvalid={fieldsErrMessage.email}>
                    <FormLabel>Adresse e-mail</FormLabel>
                    <InputGroup>
                      <InputLeftElement children={<IoMail />} />
                      <Input
                        name='email'
                        type='text'
                        value={email}
                        onChange={handleFormChange}
                      />
                    </InputGroup>

                    <FormErrorMessage>
                      {fieldsErrMessage.email}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl
                    id='password'
                    isRequired
                    isInvalid={fieldsErrMessage.password}>
                    <FormLabel>Mot de passe</FormLabel>
                    <InputGroup>
                      <InputLeftElement children={<IoLockClosed />} />
                      <Input
                        name='password'
                        type={showPwd ? "text" : "password"}
                        value={password}
                        onChange={handleFormChange}
                      />
                      <InputRightElement>
                        <IconButton
                          variant={"ghost"}
                          icon={showPwd ? <IoEyeOff /> : <IoEye />}
                          onClick={() => setShowPwd(!showPwd)}
                        />
                      </InputRightElement>
                    </InputGroup>

                    <FormErrorMessage>
                      {fieldsErrMessage.password}
                    </FormErrorMessage>
                  </FormControl>
                  <Box textAlign={"right"}>
                    <Button variant='link' color={"primary"} size='sm'>
                      Mot de passe oublié?
                    </Button>
                  </Box>

                  <Button
                    as={motion.button}
                    type='submit'
                    variant={"suroilSolid"}
                    size='lg'
                    isLoading={isLoading}
                    loadingText='Connection ...'>
                    Se connecter
                  </Button>
                </Stack>
              </form>
            </Box>
          </Stack>
        </Flex>
        <Flex flex={1} display={{ base: "none", lg: "flex", xl: "flex" }}>
          <UNDRAW_MOBILE_APP />
        </Flex>
      </HStack>
    </Box>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <Stack minH={"50vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <form onSubmit={handleFormSubmit}>
            <Stack spacing={4} w={"full"} maxW={"md"}>
              <Heading fontSize={"2xl"}>Connectez-vous à votre compte</Heading>
              <FormControl id='email' isInvalid={fieldsErrMessage.email}>
                <FormLabel>Adresse e-mail</FormLabel>
                <Input
                  name='email'
                  type='text'
                  value={email}
                  onChange={handleFormChange}
                />
                <FormErrorMessage>{fieldsErrMessage.email}</FormErrorMessage>
              </FormControl>
              <FormControl id='password' isInvalid={fieldsErrMessage.password}>
                <FormLabel>Mot de passe</FormLabel>
                <Input
                  name='password'
                  type='password'
                  value={password}
                  onChange={handleFormChange}
                />
                <FormErrorMessage>{fieldsErrMessage.password}</FormErrorMessage>
              </FormControl>
              <Stack spacing={6}>
                <Link textAlign={"end"} color={"blue.500"}>
                  Mot de passe oublié?
                </Link>
                <Button
                  type='submit'
                  colorScheme={"blue"}
                  variant={"solid"}
                  isLoading={isLoading}
                  loadingText='Connection ...'>
                  Se connecter
                </Button>
              </Stack>
            </Stack>
          </form>
        </Flex>
        <Flex flex={1}>
          <UNDRAW_SIGNIN />
          {/* <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src={
              "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
            }
          /> */}
        </Flex>
      </Stack>
    </motion.div>
  );
};

export default SignInForm;
