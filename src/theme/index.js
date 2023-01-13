import { extendTheme } from "@chakra-ui/react";
import { Button } from "./components/button";
export const theme = extendTheme({
  colors: {
    suroil: {
      primary: "#E00025",
      secondary: "#008933",
    },
    kdcm: {
      primary: "#00539B",
      secondary: "#FBC20B",
    },
    red: {
      50: "#FFE5EA",
      100: "#FFB8C3",
      200: "#FF8A9D",
      300: "#FF5C77",
      400: "#FF2E50",
      500: "#FF002A",
      600: "#CC0022",
      700: "#990019",
      800: "#660011",
      900: "#330008",
    },
    blue: {
      50: "#E5F3FF",
      100: "#B8DEFF",
      200: "#8AC9FF",
      300: "#5CB3FF",
      400: "#2E9EFF",
      500: "#0089FF",
      600: "#006DCC",
      700: "#005299",
      800: "#003766",
      900: "#001B33",
    },

    primary: "#E00025",
    secondary: "#00539b",
  },
  components: {
    Button,
  },
});
