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

      <Grid
        as="main"
        gridRow="body"
        gridColumn="content"
        bg="brand.200"
        pt={4}
        maxWidth="300"
        mx="auto"
      >
        <Bounty
          slug="work"
          title="Work"
          img="/playing_cards/King of Hearts.png"
        />
        <Bounty slug="pay" title="Pay" img="/flags/Blackbeard.png" />
        <Bounty slug="resale" title="Resale" img="/hobo_signs/safe_camp.png" />
        <Bounty
          slug="salvage"
          title="Salvage"
          img="/paintings/treasure_island.png"
        />
      </Grid>

      <Grid
        as="footer"
        gridRow="footer"
        gridColumn="sidebar / -1"
        bg="brand.200"
        templateColumns="[sidebar] 1fr [content] 3fr [info] 1fr"
        pt="10"
      >
        <Box sx={{ gridColumn: "content" }}>
          <a href="/">Home</a>
        </Box>
      </Grid>
    </>
  );
}
