import {
  Box,
  Button,
  Heading,
  HStack,
  VStack,
  Text,
  FormControl,
  FormLabel,
  Input,
  Divider,
  Stack,
} from "@chakra-ui/react";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "../features/state/authSlice";

import AccountForm from "../components/Account/AccountForm";
import UserCard from "../components/Account/UserCard";

const Account = () => {
  const user = useSelector(selectCurrentUser);
  return (
    <Stack direction={"row"} p={8} spacing={8}>
      <Box width={"70%"}>
        <AccountForm user={user} />
      </Box>
      <Box width={"30%"}>
        <UserCard user={user} />
      </Box>
    </Stack>
  );
};

export default Account;
