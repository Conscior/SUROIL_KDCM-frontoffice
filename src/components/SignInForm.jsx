import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";

import { useState } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setCredentials } from "../features/state/authSlice";
import { useLoginMutation } from "../features/api/authApiSlice";

const SignInForm = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();

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
    } catch (err) {
      console.log(err);
      let errMessage = "";
      if (err.data?.message) {
        errMessage = err.data.message;
      } else {
        errMessage = "Login failed";
      }

      // Toggle the Toast
      toast({
        title: "Error signing in.",
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
          <Heading fontSize={"4xl"}>Connectez-vous à votre compte</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}>
          <form onSubmit={handleFormSubmit}>
            <Stack spacing={4}>
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
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  // align={"start"}
                  justify={"end"}>
                  {/* <Checkbox>Remember me</Checkbox> */}
                  <Link color={"primary"}>Mot de passe oublié?</Link>
                </Stack>
                <Button
                  type='submit'
                  bg={"primary"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  isLoading={isLoading}
                  loadingText='Signing in ...'>
                  Se connecter
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </>
  );
};

export default SignInForm;
