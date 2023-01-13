export const Button = {
  // style object for base or default style
  baseStyle: {},
  variants: {
    suroilSolid: {
      bg: "suroil.primary",
      color: "white",
      _hover: {
        _disabled: {
          bg: "suroil.primary",
          backgroundColor: "suroil.primary",
          borderColor: "suroil.primary",
          color: "white",
        },
      },
      _disabled: {
        bg: "suroil.primary",
        backgroundColor: "suroil.primary",
        borderColor: "suroil.primary",
        color: "white",
        _hover: {
          bg: "suroil.primary",
          backgroundColor: "suroil.primary",
          borderColor: "suroil.primary",
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
      color: "suroil.primary",
      border: "2px solid",
      borderColor: "suroil.primary",
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
