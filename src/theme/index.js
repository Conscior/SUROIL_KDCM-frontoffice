import { extendTheme } from "@chakra-ui/react";
import { Button } from "./components/button";
export const theme = extendTheme({
  colors: {
    primary: "#e00025",
    secondary: "#00539b",
  },
  components: {
    Button,
  },
});
