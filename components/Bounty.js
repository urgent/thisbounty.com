import React from "react";
import { Grid, Image, Text, Box, Button } from "@chakra-ui/react";

export default function Bounty({ slug, img, title }) {
  return (
    <Grid
      data-cy={`bounty-${slug}`}
      templateColumns="[image] 2fr [stats] 3fr"
      w={300}
      my={1}
    >
      <Image src={img} sx={{ gridColumn: "image" }} />
      <Grid gridColumn="stats" templateRows="[title] 2em [life] 2em" ml={2}>
        <Text as="h3" sx={{ gridRow: "title" }} mb={2}>
          {title}
        </Text>
        <Text sx={{ gridRow: "life" }} my={2}>
          Life
        </Text>
      </Grid>
    </Grid>
  );
}
