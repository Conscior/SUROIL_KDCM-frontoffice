export const Button = {
  // style object for base or default style
  baseStyle: {},
  variants: {
    suroilSolid: {
      bg: "suroilRed.600",
      color: "white",
      _hover: {
        backgroundColor: "red.600",
        _disabled: {
          bg: "suroilRed.600",
          backgroundColor: "suroilRed.600",
          borderColor: "suroilRed.600",
          color: "white",
        },
      },
      _disabled: {
        bg: "suroilRed.600",
        backgroundColor: "suroilRed.600",
        borderColor: "suroilRed.600",
        color: "white",
        _hover: {
          bg: "suroilRed.600",
          backgroundColor: "suroilRed.600",
          borderColor: "suroilRed.600",
          color: "white",
        },
      },
      // _hover: {
      //   _disabled: {
      //     bg: "suroil.primary",
      //     backgroundColor: "suroil.primary",
      //     borderColor: "suroil.primary",
      //     color: "white",
      //   },
      // },
    },
    suroilOutline: {
      bg: "white",
      color: "suroilRed.600",
      border: "2px solid",
      borderColor: "suroilRed.600",
    },
    suroilGhost: {
      color: "suroilRed.primary",
      bg: "transparent",
      _hover: {
        color: "suroilRed.500",
      },
      _active: {
        color: "suroilRed.primary",
      },
    },
    kdcmSolid: {
      bg: "kdcm.primary",
      color: "white",
      _hover: {
        _disabled: {
          bg: "kdcm.primary",
          backgroundColor: "kdcm.primary",
          borderColor: "kdcm.primary",
          color: "white",
        },
      },
      _disabled: {
        bg: "kdcm.primary",
        backgroundColor: "kdcm.primary",
        borderColor: "kdcm.primary",
        color: "white",
        _hover: {
          bg: "kdcm.primary",
          backgroundColor: "kdcm.primary",
          borderColor: "kdcm.primary",
          color: "white",
        },
      },
    },
    outline: {
      border: "2px solid",
      borderColor: "primary",
      color: "primary",
      _hover: {},
      // _hover: {
      //   borderColor: "secondary",
      //   color: "secondary",
      // },
    },
    solid: {
      bg: "primary",
      color: "white",
      _hover: {
        bg: "primary",
      },
      // _hover: {
      //   bg: "secondary",
      // },
    },
  },
};
