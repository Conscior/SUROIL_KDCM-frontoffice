import { HStack, Box, Heading, Text, Button } from "@chakra-ui/react";

import { ReactComponent as UNDRAW_PAGE_NOT_FOUND } from "../assets/undraw_page_not_found.svg";

import { Link } from "react-router-dom";

const NotFound404 = () => {
  return (
    <HStack alignContent={"center"} justify='center' spacing={8} p={12}>
      <Box w='60%' display={{ base: "none", lg: "flex" }}>
        <UNDRAW_PAGE_NOT_FOUND />
      </Box>
      <Box textAlign='center' py={10} px={6}>
        <Heading
          display='inline-block'
          as='h2'
          size='2xl'
          bgGradient='linear(to-r, primary, secondary)'
          backgroundClip='text'>
          Page introuvable !
        </Heading>
        <Text fontSize='18px' mt={3} mb={2}>
          Le contenu que vous cherchez ne semble pas exister.
        </Text>

        <Button
          as={Link}
          to='/'
          bgGradient='linear(to-r, primary, secondary)'
          color='white'
          variant='solid'>
          Aller à l'accueil
        </Button>
      </Box>
    </HStack>
  );
};

export default NotFound404;
