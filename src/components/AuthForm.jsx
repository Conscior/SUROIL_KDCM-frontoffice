// import {} from "@chakra-ui/react";
import { useState } from "react";

import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

const AuthForm = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const switchAuth = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <>
      {isSignIn ? (
        <SignInForm switchAuth={switchAuth} />
      ) : (
        <SignUpForm switchAuth={switchAuth} />
      )}

      {/* <Flex
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
      </Flex> */}
    </>
  );
};

export default AuthForm;
