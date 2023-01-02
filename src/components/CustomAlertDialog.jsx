import {
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";

const CustomAlertDialog = ({ isOpen, onClose, alertInfo }) => {
  return (
    <>
      <AlertDialog isOpen={isOpen} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              {alertInfo.header}
            </AlertDialogHeader>

            <AlertDialogBody>{alertInfo.body}</AlertDialogBody>

            <AlertDialogFooter>
              <Button onClick={alertInfo.onConfirm}>
                {alertInfo.confirmText}
              </Button>
              <Button onClick={onClose} ml={3}>
                {alertInfo.cancelText}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default CustomAlertDialog;
