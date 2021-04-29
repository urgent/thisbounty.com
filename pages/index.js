import React from "react";
import Head from "next/head";
import Nav from "../components/Nav";
import Bounty from "../components/Bounty";
import { Grid, Container, Text, Link, Button } from "@chakra-ui/react";

const bounties = [
  {
    id: "work",
    title: "Work",
    img: "/playing_cards/King of Hearts.png",
    damage: ["OAuth"],
    level: 0,
    wd: 0,
  },
  {
    id: "hire",
    title: "Hire",
    img: "/flags/Blackbeard.png",
    damage: [],
    level: 0,
    wd: 0,
  },
  {
    id: "resale",
    title: "Resale",
    img: "/hobo_signs/safe_camp.png",
    damage: [],
    level: 0,
    wd: 0,
  },
  {
    id: "salvage",
    title: "Salvage",
    img: "/paintings/treasure_island.png",
    damage: [],
    level: 0,
    wd: 0,
  },
  {
    id: "thisbounty",
    title: "thisbounty.com",
    img: "/playing_cards/Ace of Hearts.png",
    damage: ["OAuth"],
    level: 0,
    wd: "work",
  },
  {
    id: "thisbounty-oauth",
    title: "OAuth",
    img: "/playing_cards/Jack of Spades.png",
    damage: ["OAuth"],
    level: 0,
    wd: "thisbounty",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>No Catch, No Pay! thisbounty.com</title>
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
        {bounties.map((bounty) => (
          <Bounty {...bounty} />
        ))}
      </Grid>

      <Grid
        as="footer"
        gridRow="footer"
        gridColumn="sidebar / -1"
        bg="brand.200"
        templateColumns="[sidebar] 1fr [content] 3fr [info] 1fr"
        pt="10"
      >
        <Container sx={{ gridColumn: "content" }} centerContent>
          <Text>Websites and Apps &bull; Secondary Market</Text>
          <Text>Free Start &bull; No Fee &bull; No Award Required</Text>
          <Text>Click Pictures to Start</Text>
          <Link href="/">Home</Link>
        </Container>
      </Grid>
    </>
  );
}
