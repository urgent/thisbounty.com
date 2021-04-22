import React from "react";
import { ChakraProvider, Grid } from "@chakra-ui/react";
import theme from "./theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Grid
        data-cy="grid"
        templateColumns="[sidebar] 1fr [content] 3fr [info] 1fr"
        templateRows={["[nav] 40px [body] auto", "[nav] 100px [body] auto"]}
        gap={6}
      >
        <Component {...pageProps} />
      </Grid>
    </ChakraProvider>
  );
}

export default MyApp;
