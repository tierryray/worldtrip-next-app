import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      "50": "#F5F8FA",
      "300": "#DADADA",
      "500": "#47585B",
    },
    yellow: {
      "300": "#FFBA08",
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'gray.500'
      }
    }
  }
});