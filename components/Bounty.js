import React from "react";
import { Grid, Image, Text, Box } from "@chakra-ui/react";
import Life from "./Life";
import Link from "next/link";
import Back from "./Back";

function back({ parent, id }) {
  // parent id specified `/bounty/${parent.wd}`
  if (parent?.wd) {
    return <Back text="Back" href={`/bounty/${parent.wd}`} id={id} />;
  }
  // null parent id, redirect to home
  else if (parent?.wd === null) {
    return <Back text="Back" href={`/`} id={id} />;
  }
  // no parent specified, don't show back button.
  return <></>;
}

function name({ title, id, child }) {
  if (child?.length) {
    return (
      <Link href={`/bounty/${id}`}>
        <Text
          data-cy={`bounty-${id}-title`}
          as="h3"
          sx={{ gridRow: "title" }}
          fontSize="xs"
          cursor="pointer"
          textDecoration="underline"
          fontWeight="bold"
        >
          {title}
        </Text>
      </Link>
    );
  }
  return (
    <Text
      data-cy={`bounty-${id}-title`}
      as="h3"
      sx={{ gridRow: "title" }}
      fontSize="xs"
    >
      {title}
    </Text>
  );
}

export default function Bounty({
  id,
  img,
  title,
  damage,
  level,
  child,
  parent,
}) {
  return (
    <Grid
      data-cy={`bounty-${id}`}
      templateColumns="[back] 20px [image] 2fr [stats] 3fr"
      w={300}
      h={140}
      my={1}
      key={id}
    >
      {back({ parent, id })}
      <Image
        data-cy={`bounty-${id}-image`}
        src={img}
        sx={{ gridColumn: "image" }}
      />
      <Grid gridColumn="stats" templateRows="[title] 1em [life] 1em" ml={2}>
        {name({ title, id, child })}
        <Box sx={{ gridRow: "life" }}>
          <Life level={level} damage={damage} />
        </Box>
      </Grid>
    </Grid>
  );
}
