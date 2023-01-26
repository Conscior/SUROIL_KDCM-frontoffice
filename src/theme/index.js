import { extendTheme } from "@chakra-ui/react";
import { Button } from "./components/button";
export const theme = extendTheme({
  colors: {
    // suroilRed: {
    //   100: "#FCE6E9",
    //   200: "#F9CCD3",
    //   300: "#F399A8",
    //   400: "#EC667C",
    //   500: "#E63351",
    //   600: "#E00025", // Primary
    //   700: "#B3001E",
    //   800: "#860016",
    //   900: "#5A000F",
    //   1000: "#2D0007",
    //   primary: "#E00025",
    //   secondary: "#008933",
    // },
    suroilRed: {
      primary: "#E00025",
      100: "#F48996",
      200: "#F27377",
      300: "#EF505E",
      400: "#ED444B",
      500: "#C4414C",
      600: "#ED1C25",
    },
    suroilWhite: "#EBE6DF",
    suroilGreen: {
      primary: "008933",
      100: "#18984D",
      200: "#1F7C48",
    },
    kdcmBlue: {
      100: "#E6EEF5",
      200: "#CCDDEB",
      300: "#99BAD7",
      400: "#6698C3",
      500: "#3375AF",
      600: "#00539B", // Secondary
      700: "#00427C",
      800: "#00325D",
      900: "#00213E",
      1000: "#00111F",
      primary: "#00539B",
      secondary: "#FBC20B",
    },

    primary: "#E00025",
    secondary: "#00539b",
  },
  components: {
    Button,
  },
});
