import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
  colors: {
    brand: {
      100: "#121015",
      200: "#16161C",
      300: "#1B1D22",
      400: "#212529",
      500: "#44494B",
      600: "#686D6E",
      700: "#8B908F",
      800: "#AFB2B1",
      900: "#D2D4D3",
    },
  },
};

export const theme = extendTheme(config);
