import { useState } from "react";

import SignInForm from "../components/Auth/SignInForm";
import SignUpForm from "../components/Auth/SignUpForm";

const Auth = () => {
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
    </>
  );
};

export default Auth;
