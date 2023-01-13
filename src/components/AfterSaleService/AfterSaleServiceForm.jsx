import {
  Container,
  Box,
  Heading,
  VStack,
  HStack,
  FormLabel,
  FormControl,
  Input,
  InputGroup,
  Button,
  Switch,
  Textarea,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import { useState } from "react";
import { useCreateAfterSaleServiceFormEntryMutation } from "../../features/api/afterSaleServiceFormEntriesApiSlice";

const AfterSaleServiceForm = () => {
  const toast = useToast();

  const [createAfterSaleServiceFormEntry] =
    useCreateAfterSaleServiceFormEntryMutation();

  const [isPro, setIsPro] = useState(false);
  const [formFields, setFormFields] = useState({
    company: "",
    rc: "",
    nif: "",
    firstname: "",
    lastname: "",
    email: "",
    tel: "",
    machineSerialNumber: "",
    machineBrand: "",
    description: "",
  });
  const {
    company,
    rc,
    nif,
    firstname,
    lastname,
    email,
    tel,
    machineSerialNumber,
    machineBrand,
    description,
  } = formFields;

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const clearFormFiels = () => {
    setFormFields({
      company: "",
      rc: "",
      nif: "",
      firstname: "",
      lastname: "",
      email: "",
      tel: "",
      machineSerialNumber: "",
      machineBrand: "",
      description: "",
    });
  };

  const handleIsProChange = (e) => {
    setIsPro(e.target.checked);
    setFormFields({
      ...formFields,
      company: "",
      rc: "",
      nif: "",
      firstname: "",
      lastname: "",
    });
    // clearFormFiels();
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await createAfterSaleServiceFormEntry({
        customer_id: 1,
        customer_firstname: firstname,
        customer_lastname: lastname,
        customer_email: email,
        customer_tel: tel,
        company_name: company,
        company_rc: rc,
        company_nif: nif,
        machine_serial_number: machineSerialNumber,
        machine_brand: machineBrand,
        is_pro: isPro,
        description,
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

  let formHeader;
  if (isPro) {
    formHeader = (
      <>
        <FormControl isRequired>
          <FormLabel>Nom de l'entreprise</FormLabel>
          <InputGroup>
            {/* <InputLeftElement children={<MdOutlineEmail />} /> */}
            <Input
              type='text'
              name='company'
              value={company}
              onChange={handleFormChange}
            />
          </InputGroup>
        </FormControl>

        <HStack width='100%'>
          <Box width='50%'>
            <FormControl isRequired>
              <FormLabel>N° RC</FormLabel>
              <InputGroup>
                {/* <InputLeftElement children={<MdOutlineEmail />} /> */}
                <Input
                  type='text'
                  name='rc'
                  value={rc}
                  onChange={handleFormChange}
                />
              </InputGroup>
            </FormControl>
          </Box>
          <Box width='50%'>
            <FormControl isRequired>
              <FormLabel>N° NIF</FormLabel>
              <InputGroup>
                {/* <InputLeftElement children={<MdOutlineEmail />} /> */}
                <Input
                  type='text'
                  name='nif'
                  value={nif}
                  onChange={handleFormChange}
                />
              </InputGroup>
            </FormControl>
          </Box>
        </HStack>
      </>
    );
  } else {
    formHeader = (
      <>
        <HStack width='100%'>
          <Box width='50%'>
            <FormControl id='firstname' isRequired>
              <FormLabel>Prénom</FormLabel>
              <Input
                type='text'
                name='firstname'
                value={firstname}
                onChange={handleFormChange}
              />
            </FormControl>
          </Box>
          <Box width='50%'>
            <FormControl id='lastname' isRequired>
              <FormLabel>Nom</FormLabel>
              <Input
                type='text'
                name='lastname'
                value={lastname}
                onChange={handleFormChange}
              />
            </FormControl>
          </Box>
        </HStack>
      </>
    );
  }

  return (
    <>
      <Heading textAlign={"center"} pb={6}>
        Veuillez remplir ce formulaire
      </Heading>
      <form onSubmit={handleFormSubmit}>
        <VStack spacing={5} width='100%'>
          {formHeader}
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <InputGroup>
              {/* <InputLeftElement children={<MdOutlineEmail />} /> */}
              <Input
                type='email'
                name='email'
                value={email}
                onChange={handleFormChange}
              />
            </InputGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Numéro de téléphone</FormLabel>
            <InputGroup>
              {/* <InputLeftElement children={<MdOutlineEmail />} /> */}
              <Input
                type='tel'
                name='tel'
                value={tel}
                onChange={handleFormChange}
              />
            </InputGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Numéro de série (Machine)</FormLabel>

            <InputGroup>
              {/* <InputLeftElement children={<BsPerson />} /> */}
              <Input
                type='text'
                name='machineSerialNumber'
                value={machineSerialNumber}
                onChange={handleFormChange}
              />
            </InputGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Marque (Machine)</FormLabel>

            <InputGroup>
              {/* <InputLeftElement children={<BsPerson />} /> */}
              <Input
                type='text'
                name='machineBrand'
                value={machineBrand}
                onChange={handleFormChange}
              />
            </InputGroup>
          </FormControl>

          <FormControl
            display='flex'
            textAlign={"center"}
            justifyContent={"right"}>
            <FormLabel htmlFor='isPro' mb='0'>
              Professionnels (Entreprise) ?
            </FormLabel>
            <Switch id='isPro' onChange={handleIsProChange} />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Description</FormLabel>

            <Textarea
              name='description'
              value={description}
              onChange={handleFormChange}
              rows={6}
              resize='none'
            />
          </FormControl>
          <Button type='submit' variant='suroilSolid'>
            Envoyer
          </Button>
        </VStack>
      </form>
    </>
  );
};

export default AfterSaleServiceForm;
