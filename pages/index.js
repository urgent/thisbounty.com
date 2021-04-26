import React from "react";
import Head from "next/head";
import Nav from "../components/Nav";
import Bounty from "../components/Bounty";
import { Grid, Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />

      <Grid as="main" gridRow="body" gridColumn="content">
        <Bounty
          slug="work"
          title="Work"
          img="/playing_cards/King of Hearts.png"
        />
        <Bounty
          slug="pay"
          title="Pay"
          img="/playing_cards/King of Hearts.png"
        />
        <Bounty
          slug="resale"
          title="Resale"
          img="/playing_cards/King of Hearts.png"
        />
        <Bounty
          slug="salvage"
          title="Salvage"
          img="/playing_cards/King of Hearts.png"
        />
      </Grid>

      <Box as="footer" sx={{ gridRow: "footer", gridColumn: "content" }}>
        <a href="/">Home</a>
      </Box>
    </>
  );
}
