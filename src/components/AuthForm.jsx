import {
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Stack,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";

import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

const AuthForm = () => {
  return (
    <>
      <Flex
        align={"center"}
        justify={"center"}>
        <Stack w={"50%"}>
          <Tabs align='center' variant='enclosed' isFitted>
            <TabList textColor={"primary"}>
              <Tab>Se connecter</Tab>
              <Tab>Créer un compte</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <SignInForm />
              </TabPanel>
              <TabPanel>
                <SignUpForm />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Stack>
      </Flex>
    </>
  );
};

export default AuthForm;
