import { Flex } from "@chakra-ui/react";

const Main = (props) => {
  return (
    // <Flex as='main' role='main' direction='column' flex='1' px='8' py="10" {...props}>
    <Flex as='main' role='main' direction='column' flex='1' px='8' py="10" {...props}>
      {/* <Container flex='1' > */}
        {props.children}
      {/* </Container> */}
    </Flex>
  );
};

export default Main;
