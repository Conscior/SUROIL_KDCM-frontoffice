import { Flex } from "@chakra-ui/react";

import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../features/state/authSlice";

import { useRefreshMutation } from "../features/api/authApiSlice";
import { setCredentials } from "../features/state/authSlice";

import Navbar from "../components/Layout/Navbar";
import Main from "../components/Layout/Main";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";

const BasicLayout = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const [refresh] = useRefreshMutation();

  /*
   Way to persist user on refresh
   Draw back is that even if there is no refresh token i still make an api call
   TODO - Maybe find a better way to keep the user logged in
  */
  useEffect(() => {
    const refreshToken = async () => {
      const { accessToken, userInfo } = await refresh().unwrap();
      if (accessToken && userInfo) {
        dispatch(setCredentials({ accessToken, userInfo }));
      }
    };

    if (!user) {
      try {
        refreshToken();
        console.log("user", user);
      } catch (error) {
        console.log("Error", error);
      }
    }
  }, [user, dispatch, refresh]);

  return (
    <>
      <Flex direction='column' flex='1'>
        <Header />
        <Navbar />

        <Main>
          <Outlet />
        </Main>

        <Footer />
      </Flex>
    </>
  );
};

export default BasicLayout;
