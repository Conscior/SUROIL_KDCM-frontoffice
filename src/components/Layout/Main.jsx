import { Flex } from "@chakra-ui/react";

const Main = (props) => {
  return (
    <Flex as='main' role='main' direction='column' flex='1' {...props}>
      {props.children}
    </Flex>
  );
};

export default Main;
