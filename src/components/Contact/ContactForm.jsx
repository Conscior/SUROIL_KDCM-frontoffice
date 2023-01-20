import {
  Box,
  Button,
  IconButton,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  HStack,
  Textarea,
  useColorModeValue,
  VStack,
  Select,
  useToast,
} from "@chakra-ui/react";
import {
  IoPerson,
  IoMail,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
} from "react-icons/io5";
import { motion } from "framer-motion";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { selectCurrentUser } from "../../features/state/authSlice";
import { useCreateContactFormEntryMutation } from "../../features/api/contactFormEntriesApiSlice";
import { useGetStoresQuery } from "../../features/api/storesApiSlice";

const socials = [
  {
    title: "Facebook",
    link: "www.facebook.com",
    icon: IoLogoFacebook,
  },
  { title: "Instagram", link: "www.instagram.com", icon: IoLogoInstagram },
  { title: "Twitter", link: "www.twitter.com", icon: IoLogoTwitter },
];

const emailHeaders = ["Header 1", "Header 2", "Header 3"];

const ContactForm = () => {
  const toast = useToast();

  const user = useSelector(selectCurrentUser);

  const [createContactFormEntry, { isLoading }] =
    useCreateContactFormEntryMutation();
  const { data: stores, isSuccess, isError, error } = useGetStoresQuery();

  const [formFields, setFormFields] = useState({
    firstname: user?.firstname || "",
    lastname: user?.lastname || "",
    email: user?.email || "",
    emailHeader: "",
    store: false,
    message: "",
  });
  const { firstname, lastname, email, emailHeader, store, message } =
    formFields;

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleContactFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await createContactFormEntry({
        customer_firstname: firstname,
        customer_lastname: lastname,
        customer_email: email,
        email_header: emailHeader,
        store_id: store,
        message,
      }).unwrap();
      toast({
        title: "Formulaire envoie avec succès !",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      let errMessage = "Problème lors de l'envoi du formulaire.";
      if (error.data?.message) errMessage = error.data.message;
      toast({
        title: errMessage,
        status: "error",
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    if (user) {
      setFormFields({
        ...formFields,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
      });
    }
  }, [user, setFormFields]);

  return (
    <Stack
      spacing={{ base: 4, md: 8, lg: 10 }}
      direction={{ base: "column", md: "row" }}>
      <Stack
        align='center'
        justify='space-around'
        direction={{ base: "row", md: "column" }}>
        {socials.map((social) => (
          <Link href={social.link} key={social.title}>
            <IconButton
              aria-label={social.title}
              variant='ghost'
              size='lg'
              fontSize='3xl'
              icon={<social.icon />}
              _hover={{
                bg: "primary",
                color: useColorModeValue("white", "gray.700"),
              }}
              isRound
            />
          </Link>
        ))}
      </Stack>

      <Box
        bg={useColorModeValue("white", "gray.700")}
        borderRadius='lg'
        p={8}
        w='100%'
        color={useColorModeValue("gray.700", "whiteAlpha.900")}
        shadow='base'>
        <form onSubmit={handleContactFormSubmit}>
          <VStack spacing={5}>
            <HStack width='100%'>
              <Box width='50%'>
                <FormControl id='firstname' isRequired>
                  <FormLabel>Prénom</FormLabel>
                  <InputGroup>
                    <InputLeftElement children={<IoPerson />} />
                    <Input
                      type='text'
                      name='firstname'
                      value={firstname}
                      onChange={handleFormChange}
                    />
                  </InputGroup>
                </FormControl>
              </Box>
              <Box width='50%'>
                <FormControl id='lastname' isRequired>
                  <FormLabel>Nom</FormLabel>
                  <InputGroup>
                    <InputLeftElement children={<IoPerson />} />
                    <Input
                      type='text'
                      name='lastname'
                      value={lastname}
                      onChange={handleFormChange}
                    />
                  </InputGroup>
                </FormControl>
              </Box>
            </HStack>

            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
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

            <FormControl isRequired>
              <FormLabel>Objet</FormLabel>
              <Select
                name='emailHeader'
                value={emailHeader}
                onChange={handleFormChange}
                placeholder="Choisissez l'objet de l'email">
                {emailHeaders?.map((header, index) => (
                  <option key={index} value={header}>
                    {header}
                  </option>
                ))}
              </Select>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Magasin</FormLabel>
              <Select
                name='store'
                value={store}
                onChange={handleFormChange}
                placeholder='Choisissez un magasin'>
                {stores?.map((store) => (
                  <option key={store.id} value={store.id}>
                    {store.name}
                  </option>
                ))}
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Message</FormLabel>
              <Textarea
                name='message'
                value={message}
                onChange={handleFormChange}
                rows={6}
                resize='none'
              />
            </FormControl>

            <Button
              as={motion.button}
              // whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type='submit'
              variant='suroilSolid'
              isLoading={isLoading}
              loadingText='Envoie ...'>
              Envoyer
            </Button>
          </VStack>
        </form>
      </Box>
    </Stack>
  );
};

export default ContactForm;
