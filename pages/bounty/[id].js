import React from "react";
import Head from "next/head";
import Nav from "../../components/Nav";
import Bounty from "../../components/Bounty";
import { Grid, Container, Text, Link, Button } from "@chakra-ui/react";
import prisma from "../../lib/prisma";

export default function Bounties({ bounties }) {
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

export const getServerSideProps = async ({ params }) => {
  const bounties = await prisma.bounty.findMany({
    where: { wd: params?.id },
    orderBy: {
      rank: "asc",
    },
  });
  return { props: { bounties } };
};
