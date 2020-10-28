import { theme } from "@chakra-ui/core";
import { extendTheme } from "@chakra-ui/core";

const customTheme = extendTheme({
  styles: {
    global: {
      ".stripe-checkout": {
        input: {
          borderRadius: "6px",
          marginBottom: "6px",
          padding: "12px",
          border: "1px solid rgba(50, 50, 93, 0.1)",
          maxHeight: "44px",
          fontSize: "16px",
          width: "100%",
          background: "white",
          boxSizing: "border-box",
        },
      },
    },
  },
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
