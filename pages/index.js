import Head from "next/head";
import Nav from "../components/Nav";
import { signIn, signOut, useSession } from "next-auth/client";
import { Grid, Box } from "@chakra-ui/react";

export default function Home() {
  const [session, loading] = useSession();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />

      <Grid as="main" gridRow="body" gridColumn="content">
        <h1>Welcome!</h1>
      </Grid>

      <Box as="footer" sx={{ gridRow: "footer", gridColumn: "content" }}>
        <a href="/">Home</a>
      </Box>
    </>
  );
}
