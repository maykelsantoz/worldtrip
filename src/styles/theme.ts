import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "700": "#47585b",
      "500": "#999999",
      "400": "rgba(153, 153, 153, 0.5)",
      "300": "#dadada",
      "100": "#f5f8fa",
    },
    yellow: {
      "300": "rgba(255, 186, 8, 0.5)",
      "400": "#ffba08",
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.100',
        color: 'gray.700',
      }
    }
  }
})

// --light - white: #ffffff;
// --light - heading: #f5f8fa;
// --light - info: #dadada;

// --dark - black: #000000;
// --dark - heading: #47585b;
// --dark - info: #999999;
// --dark - info - 50: rgba(153, 153, 153, 0.5);

// --highlight: #ffba08;
// --highlight - 50: rgba(255, 186, 8, 0.5);