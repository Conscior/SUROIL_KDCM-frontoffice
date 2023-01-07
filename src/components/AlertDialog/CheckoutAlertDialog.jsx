import {
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Select,
  VStack,
  Text,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

import { useState } from "react";

const CheckoutAlertDialog = ({ isOpen, onClose }) => {
  return (
    <AlertDialog isOpen={isOpen} onClose={onClose}>
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize='lg' fontWeight='bold'>
            Créer un devis ?
          </AlertDialogHeader>

          <AlertDialogBody>
            <VStack>
              <FormControl>
                <FormLabel>Choix du magasin</FormLabel>
                <Select>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </Select>
              </FormControl>
              <Text>Un email vous sera envoyer. Confirmer?</Text>
            </VStack>
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button onClick={onClose}>Annuler</Button>
            <Button colorScheme='red' onClick={onClose} ml={3}>
              Confirmer
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default CheckoutAlertDialog;
