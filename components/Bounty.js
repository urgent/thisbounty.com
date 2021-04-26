import React from "react";
import { Grid, Image, Text, Box, Button } from "@chakra-ui/react";

export default function Bounty({ img }) {
  return (
    <Grid data-cy="bounty" templateColumns="[image] 2fr [stats] 3fr" w={300}>
      <Image src={img} sx={{ gridColumn: "image" }} />
      <Grid gridColumn="stats" templateRows="[title] 1em [life] 2em">
        <Text as="h3" sx={{ gridRow: "title" }}>
          Title
        </Text>
        <Text sx={{ gridRow: "life" }}>Life</Text>
      </Grid>
    </Grid>
  );
}
