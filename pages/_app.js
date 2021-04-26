import React from "react";
import { ChakraProvider, Grid } from "@chakra-ui/react";
import { Provider } from "next-auth/client";
import { theme } from "../components/theme";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <ChakraProvider theme={theme}>
        <Grid
          data-cy="grid"
          templateColumns="[sidebar] 1fr [content] 3fr [info] 1fr"
          templateRows={[
            "[nav] 2rem [body] auto [footer] 80px",
            "[nav] 3rem [body] auto [footer] 200px",
          ]}
          bg="brand.400"
          color="white"
          minHeight="100vh"
        >
          <Component {...pageProps} />
        </Grid>
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
