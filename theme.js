import { theme } from "@chakra-ui/core";
import { merge } from "@chakra-ui/utils";

const customTheme = merge(theme, {
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Montserrat, sans-serif",
  },
  colors: {
    primary: {
      50: "#dbfdff",
      100: "#b5f3f7",
      200: "#8ceaef",
      300: "#61e0e8",
      400: "#38d6e0",
      500: "#1fbdc7",
      600: "#0d939c",
      700: "#006a6f",
      800: "#004044",
      900: "#001719",
    },
  },
});

export default customTheme;
