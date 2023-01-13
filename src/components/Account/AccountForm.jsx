import {
  Box,
  Button,
  Heading,
  HStack,
  VStack,
  Text,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Divider,
  useToast,
} from "@chakra-ui/react";
import { IoPerson, IoMail, IoLocate, IoCall } from "react-icons/io5";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../features/state/authSlice";
import { useUpdateUserMutation } from "../../features/api/usersApiSlice";

const AccountForm = ({ user }) => {
  const toast = useToast();
  const dispatch = useDispatch();

  const [updateUser, { isLoading }] = useUpdateUserMutation();

  const [isFormReadOnly, setIsFormReadOnly] = useState(true);
  const [formFields, setFormFields] = useState({
    username: user?.username || "",
    email: user?.email || "",
    firstname: user?.firstname || "",
    lastname: user?.lastname || "",
    address: user?.address || "",
    phone: user?.phone_number || "",
  });
  const { username, email, firstname, lastname, address, phone } = formFields;

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleFormStateSwitch = () => {
    setIsFormReadOnly(!isFormReadOnly);
  };

  const handleFormCancel = () => {
    handleFormCancel;
    setFormFields({
      username: user?.username || "",
      email: user?.email || "",
      firstname: user?.firstname || "",
      lastname: user?.lastname || "",
      address: user?.address || "",
      phone: user?.phone_number || "",
    });
    handleFormStateSwitch();
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (user)
      try {
        await updateUser({
          id: user.id,
          firstname,
          lastname,
          address,
          phone_number: phone,
        }).unwrap();
        dispatch(
          setCredentials({
            userInfo: {...user, firstname, lastname, address, phone_number: phone },
          })
        );
        toast({
          title: "Informations mises à jour avec succès.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        handleFormStateSwitch();
      } catch (error) {
        let errMessage = "Problème lors de mises à jour des informations.";
        if (error.data?.message) errMessage = error.data.message;
        toast({
          title: errMessage,
          status: "error",
          isClosable: true,
        });
      }
  };

  return (
    <Box p={8} shadow='base' borderRadius={"lg"} width={"full"}>
      <HStack justifyContent={"space-between"}>
        <Heading as='h1'>Mon compte</Heading>
        <Button
          display={!isFormReadOnly ? "none" : "flex"}
          onClick={handleFormStateSwitch}>
          Modifier
        </Button>
      </HStack>
      <form onSubmit={handleFormSubmit}>
        <VStack align='start' spacing={8}>
          <VStack width={"100%"} spacing={4} alignItems={"start"}>
            <Heading size={"md"}>Informations utilisateur</Heading>
            <HStack width='100%' spacing={8}>
              <Box width='50%'>
                <FormControl id='firstname'>
                  <FormLabel>Nom d'utilisateur</FormLabel>
                  <InputGroup>
                    <InputLeftElement children={<IoPerson />} />
                    <Input
                      type='text'
                      name='username'
                      value={username}
                      // onChange={handleFormChange}
                      isDisabled
                      variant='filled'
                    />
                  </InputGroup>
                </FormControl>
              </Box>
              <Box width='50%'>
                <FormControl id='email'>
                  <FormLabel>Adresse e-mail</FormLabel>
                  <InputGroup>
                    <InputLeftElement children={<IoMail />} />
                    <Input
                      type='email'
                      name='email'
                      value={email}
                      // onChange={handleFormChange}
                      isDisabled
                      variant='filled'
                    />
                  </InputGroup>
                </FormControl>
              </Box>
            </HStack>
            <HStack width='100%' spacing={8}>
              <Box width='50%'>
                <FormControl id='firstname'>
                  <FormLabel>Prénom</FormLabel>
                  <InputGroup>
                    <InputLeftElement children={<IoPerson />} />
                    <Input
                      type='text'
                      name='firstname'
                      value={firstname}
                      onChange={handleFormChange}
                      isDisabled={isFormReadOnly}
                      variant={isFormReadOnly ? "filled" : "outline"}
                      pointerEvents={isFormReadOnly ? "none" : "auto"}
                    />
                  </InputGroup>
                </FormControl>
              </Box>
              <Box width='50%'>
                <FormControl id='lastname'>
                  <FormLabel>Nom</FormLabel>
                  <InputGroup>
                    <InputLeftElement children={<IoPerson />} />
                    <Input
                      type='text'
                      name='lastname'
                      value={lastname}
                      onChange={handleFormChange}
                      isDisabled={isFormReadOnly}
                      variant={isFormReadOnly ? "filled" : "outline"}
                      pointerEvents={isFormReadOnly ? "none" : "auto"}
                    />
                  </InputGroup>
                </FormControl>
              </Box>
            </HStack>
          </VStack>
          <Divider />
          <Box width={"100%"}>
            <Heading size={"md"}>Coordonnées</Heading>
            <HStack width='100%' spacing={8}>
              <Box width='50%'>
                <FormControl id='address'>
                  <FormLabel>Adresse</FormLabel>
                  <InputGroup>
                    <InputLeftElement children={<IoLocate />} />
                    <Input
                      type='text'
                      name='address'
                      value={address}
                      onChange={handleFormChange}
                      isDisabled={isFormReadOnly}
                      variant={isFormReadOnly ? "filled" : "outline"}
                      pointerEvents={isFormReadOnly ? "none" : "auto"}
                    />
                  </InputGroup>
                </FormControl>
              </Box>
              <Box width='50%'>
                <FormControl id='tel'>
                  <FormLabel>Numéro de téléphone</FormLabel>
                  <InputGroup>
                    <InputLeftElement children={<IoCall />} />
                    <Input
                      type='tel'
                      name='phone'
                      value={phone}
                      onChange={handleFormChange}
                      isDisabled={isFormReadOnly}
                      variant={isFormReadOnly ? "filled" : "outline"}
                      pointerEvents={isFormReadOnly ? "none" : "auto"}
                    />
                  </InputGroup>
                </FormControl>
              </Box>
            </HStack>
          </Box>
          <Divider display={isFormReadOnly ? "none" : "flex"} />
          <HStack
            alignSelf={"end"}
            spacing={4}
            display={isFormReadOnly ? "none" : "flex"}>
            <Button type='submit'>Sauvegarder</Button>
            <Button onClick={handleFormCancel}>Annuler</Button>
          </HStack>
        </VStack>
      </form>
    </Box>
  );
};

export default AccountForm;
