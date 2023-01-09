import {
  Box,
  SimpleGrid,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
  AspectRatio,
  Select,
  useToast,
} from "@chakra-ui/react";

import { BsFacebook, BsInstagram, BsTwitter, BsPerson } from "react-icons/bs";
import { MdEmail, MdOutlineEmail } from "react-icons/md";

import { useState } from "react";

import { useCreateContactFormEntryMutation } from "../features/api/contactFormEntriesApiSlice";
import { useGetStoresQuery } from "../features/api/storesApiSlice";
import { motion } from "framer-motion";

const socials = [
  {
    title: "Facebook",
    link: "www.facebook.com",
    icon: BsFacebook,
  },
  { title: "Instagram", link: "www.instagram.com", icon: BsInstagram },
  { title: "Twitter", link: "www.twitter.com", icon: BsTwitter },
];

const ContactForm = () => {
  const toast = useToast();

  const [createContactFormEntry, { isLoading }] =
    useCreateContactFormEntryMutation();
  const { data: stores, isSuccess, isError, error } = useGetStoresQuery();

  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    store: false,
    message: "",
  });
  const { name, email, store, message } = formFields;

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleContactFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await createContactFormEntry({
        customer_name: name,
        customer_email: email,
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

  return (
    <Box
      borderRadius='lg'
      m={{ base: 5, md: 16, lg: 10 }}
      p={{ base: 5, lg: 10 }}>
      <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
        <Heading
          fontSize={{
            base: "4xl",
            md: "5xl",
          }}>
          Contactez nous !
        </Heading>

        {/* Insert Simple grid here */}
        <SimpleGrid
          w={"100%"}
          columns={{ base: "1", lg: "2" }}
          columnGap={{ sm: "4", md: "6", lg: "4" }}
          rowGap={{ base: "8", md: "10" }}>
          {/* First Grid */}
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
                  <FormControl isRequired>
                    <FormLabel>Nom</FormLabel>

                    <InputGroup>
                      <InputLeftElement children={<BsPerson />} />
                      <Input
                        name='name'
                        type='text'
                        value={name}
                        onChange={handleFormChange}
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>

                    <InputGroup>
                      <InputLeftElement children={<MdOutlineEmail />} />
                      <Input
                        name='email'
                        type='email'
                        value={email}
                        onChange={handleFormChange}
                      />
                    </InputGroup>
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
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    type='submit'
                    isLoading={isLoading}
                    loadingText='Envoie ...'
                    _hover={{}}>
                    Envoyer
                  </Button>
                </VStack>
              </form>
            </Box>
          </Stack>

          {/* Second grid */}
          <AspectRatio ratio={16 / 9} rounded={"lg"}>
            <iframe
              src='https://www.google.com/maps/d/embed?mid=1cMgqnh4_g32TfjF11zxH3xWS37MvO2wQ&ehbc=2E312F'
              width='640'
              height='480'
            />
          </AspectRatio>
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default ContactForm;
